using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Technolog.DAL.EF;
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

        private bool disposed = false;

        protected override void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    unitOfWork.Dispose();
                }
                this.disposed = true;
            }
        }
    }
}
