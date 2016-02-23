using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Technolog.DAL.EF;
using Technolog.Domain.Entities;
using Technolog.Domain.Interfaces;
using Technolog.Web.Models;

namespace Technolog.Web.Controllers.api
{
    public class ToolsController : ApiController
    {
        IUnitOfWork unitOfWork = new EFUnitOfWork("TechnologConnection");

        public IHttpActionResult Get()
        {
            return Ok(unitOfWork.Tools.GetAll());
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(ToolModel toolModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            Tool tool = new Tool() { Id = toolModel.Id, Name = toolModel.Name };

            unitOfWork.Tools.Update(tool);

            try
            {
                unitOfWork.Save();
            }
            catch (Exception ex)
            {
                return NotFound();
            }

            return Ok(tool);
        }

        public IHttpActionResult Put(ToolModel toolModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            Tool tool = new Tool() { Id = toolModel.Id, Name = toolModel.Name };

            unitOfWork.Tools.Add(tool);

            try
            {
                unitOfWork.Save();
            }
            catch (Exception ex)
            {
                return NotFound();
            }

            return Ok(tool);
        }

        public IHttpActionResult Delete(int id)
        {
            unitOfWork.Tools.DeleteById(id);

            try
            {
                unitOfWork.Save();
            }
            catch (Exception ex)
            {
                return NotFound();
            }

            return Ok(id);
        }

        private bool disposed = false;

        protected override void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    unitOfWork.Dispose();
                    base.Dispose(disposing);
                }
                this.disposed = true;
            }
        }
    }
}
