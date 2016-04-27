using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Technolog.Infrastructure.Interfaces;
using Technolog.SL.DTO;
using Technolog.SL.Interfaces;
using Technolog.Web.Models;

namespace Technolog.Web.Controllers.api
{
    public class TechProcessesController : ApiController
    {
        readonly ITechProcessService techProcessService;
        readonly IMapper mapper;

        public TechProcessesController(ITechProcessService techProcessService, IMapper mapper)
        {
            if (techProcessService == null) throw new ArgumentNullException("techProcessService");

            if (mapper == null) throw new ArgumentNullException("mapper");

            this.techProcessService = techProcessService;
            this.mapper = mapper;
        }

        public IHttpActionResult Get(int? id)
        {
            TechProcessDTO techProcessDTO = null;

            if (id == null)
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        "Не установлен идентификатор инструмента"));

            try
            {
                techProcessDTO = techProcessService.Get(id ?? 0);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            TechProcessModel techProcessModel = mapper.Map<TechProcessModel>(techProcessDTO);

            return Ok(techProcessModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            TechProcessListDTO techProcessListDTO = techProcessService.GetPage(page, pageSize, search);

            TechProcessListModel techProcessListModel = mapper.Map<TechProcessListModel>(techProcessListDTO);

            return Ok(techProcessListModel);
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(TechProcessModel techProcessModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            TechProcessDTO techProcessDTO = mapper.Map<TechProcessDTO>(techProcessModel);

            try
            {
                techProcessService.Update(techProcessDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(techProcessModel);
        }

        public IHttpActionResult Put(TechProcessModel techProcessModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            TechProcessDTO techProcessDTO = mapper.Map<TechProcessDTO>(techProcessModel);

            try
            {
                techProcessModel.Id = techProcessService.Insert(techProcessDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(techProcessModel);
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                techProcessService.Delete(id);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
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
                    techProcessService.Dispose();
                    base.Dispose(disposing);
                }
                this.disposed = true;
            }
        }
    }
}
