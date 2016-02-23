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
    public class PartsController : ApiController
    {
        IUnitOfWork unitOfWork = new EFUnitOfWork("TechnologConnection");

        public IHttpActionResult Get()
        {
            return Ok(unitOfWork.Parts.GetAll());
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(PartModel partModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            Part part = new Part() { Id = partModel.Id, Name = partModel.Name };

            unitOfWork.Parts.Update(part);

            try
            {
                unitOfWork.Save();
            }
            catch (Exception ex)
            {
                return NotFound();
            }

            return Ok(part);
        }

        public IHttpActionResult Put(PartModel partModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            Part part = new Part() { Id = partModel.Id, Name = partModel.Name };

            unitOfWork.Parts.Add(part);

            try
            {
                unitOfWork.Save();
            }
            catch (Exception ex)
            {
                return NotFound();
            }

            return Ok(part);
        }

        public IHttpActionResult Delete(int id)
        {
            unitOfWork.Parts.DeleteById(id);

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
