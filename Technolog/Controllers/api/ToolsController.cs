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

        public IHttpActionResult Get(int id)
        {
            Tool tool = unitOfWork.Tools.GetById(id);

            ToolModel toolModel = new ToolModel() { Id = tool.Id, Name = tool.Name };

            return Ok(toolModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            List<Tool> tools = null;
            if(search == null)
                tools = unitOfWork.Tools.GetAll().Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                tools = unitOfWork.Tools.GetAll().Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToList();
            }

            ToolListModel toolListModel = new ToolListModel() { ToolAmount = unitOfWork.Tools.GetAll().Where(t => t.Name.Contains(search == null ? "" : search)).Count() };
            toolListModel.Tools = tools.Select(t => { return new ToolModel() { Id = t.Id, Name = t.Name }; }).ToList();

            return Ok(toolListModel);
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
