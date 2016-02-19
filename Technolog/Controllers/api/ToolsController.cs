using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Technolog.DAL.EF;
using Technolog.Domain.Entities;
using Technolog.Domain.Interfaces;

namespace Technolog.Web.Controllers.api
{
    public class ToolsController : ApiController
    {
        IUnitOfWork unitOfWork = new EFUnitOfWork("TechnologConnection");

        public IHttpActionResult Get()
        {
            return Ok(unitOfWork.Tools.GetAll());
        }

        public IHttpActionResult Post(Tool tool)
        {
            unitOfWork.Tools.Update(tool);
            unitOfWork.Save();

            return Ok(tool);
        }

        public IHttpActionResult Put(Tool tool)
        {
            unitOfWork.Tools.Add(tool);
            unitOfWork.Save();

            return Ok(tool);
        }

        public IHttpActionResult Delete(int id)
        {
            unitOfWork.Tools.DeleteById(id);
            unitOfWork.Save();

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
