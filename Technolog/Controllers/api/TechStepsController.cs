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
using Technolog.Web.Models.Models;

namespace Technolog.Web.Controllers.api
{
    public class TechStepsController : ApiController
    {
        readonly ITechStepService techStepService;
        readonly IMapper mapper;

        public TechStepsController(ITechStepService techStepService, IMapper mapper)
        {
            if (techStepService == null) throw new ArgumentNullException("techStepService");

            if (mapper == null) throw new ArgumentNullException("mapper");

            this.techStepService = techStepService;
            this.mapper = mapper;
        }

        public IHttpActionResult Get(int? id)
        {
            TechStepDTO techStepDTO = null;

            if (id == null)
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        "Не установлен идентификатор инструмента"));

            try
            {
                techStepDTO = techStepService.Get(id ?? 0);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            TechStepModel techStepModel = mapper.Map<TechStepModel>(techStepDTO);

            return Ok(techStepModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            TechStepListDTO techStepListDTO = techStepService.GetPage(page, pageSize, search);

            TechStepListModel techStepListModel = mapper.Map<TechStepListModel>(techStepListDTO);

            return Ok(techStepListModel);
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(TechStepModel techStepModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            TechStepDTO techStepDTO = mapper.Map<TechStepDTO>(techStepModel);

            try
            {
                techStepService.Update(techStepDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(techStepModel);
        }

        public IHttpActionResult Put(TechStepModel techStepModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            TechStepDTO techStepDTO = mapper.Map<TechStepDTO>(techStepModel);

            try
            {
                techStepModel.Id = techStepService.Insert(techStepDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(techStepModel);
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                techStepService.Delete(id);
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
                    techStepService.Dispose();
                    base.Dispose(disposing);
                }
                this.disposed = true;
            }
        }
    }
}
