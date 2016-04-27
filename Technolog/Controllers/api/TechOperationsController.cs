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
    public class TechOperationsController : ApiController
    {
        readonly ITechOperationService techOperationService;
        readonly IMapper mapper;

        public TechOperationsController(ITechOperationService techOperationService, IMapper mapper)
        {
            if (techOperationService == null) throw new ArgumentNullException("techOperationService");

            if (mapper == null) throw new ArgumentNullException("mapper");

            this.techOperationService = techOperationService;
            this.mapper = mapper;
        }

        public IHttpActionResult Get(int? id)
        {
            TechOperationDTO techOperationDTO = null;

            if (id == null)
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        "Не установлен идентификатор инструмента"));

            try
            {
                techOperationDTO = techOperationService.Get(id ?? 0);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            TechOperationModel techOperationModel = mapper.Map<TechOperationModel>(techOperationDTO);

            return Ok(techOperationModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            TechOperationListDTO techOperationListDTO = techOperationService.GetPage(page, pageSize, search);

            TechOperationListModel techOperationListModel = mapper.Map<TechOperationListModel>(techOperationListDTO);

            return Ok(techOperationListModel);
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(TechOperationModel techOperationModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            TechOperationDTO techOperationDTO = mapper.Map<TechOperationDTO>(techOperationModel);

            try
            {
                techOperationService.Update(techOperationDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(techOperationModel);
        }

        public IHttpActionResult Put(TechOperationModel techOperationModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            TechOperationDTO techOperationDTO = mapper.Map<TechOperationDTO>(techOperationModel);

            try
            {
                techOperationModel.Id = techOperationService.Insert(techOperationDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(techOperationModel);
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                techOperationService.Delete(id);
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
                    techOperationService.Dispose();
                    base.Dispose(disposing);
                }
                this.disposed = true;
            }
        }
    }
}
