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
using Technolog.Web.Models.Models;

namespace Technolog.Web.Controllers.api
{
    public class PartsController : ApiController
    {
        readonly IPartService partService;
        readonly IMapper mapper;

        public PartsController(IPartService partService, IMapper mapper)
        {
            if (partService == null) throw new ArgumentNullException("partService");

            if (mapper == null) throw new ArgumentNullException("mapper");

            this.partService = partService;
            this.mapper = mapper;
        }

        public IHttpActionResult Get(int? id)
        {
            PartDTO partDTO = null;

            if (id == null)
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        "Не установлен идентификатор инструмента"));

            try
            {
                partDTO = partService.Get(id ?? 0);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            PartModel partModel = mapper.Map<PartModel>(partDTO);

            return Ok(partModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            PartListDTO partListDTO = partService.GetPage(page, pageSize, search);

            PartListModel partListModel = mapper.Map<PartListModel>(partListDTO);

            return Ok(partListModel);
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(PartModel partModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            PartDTO partDTO = mapper.Map<PartDTO>(partModel);

            try
            {
                partService.Update(partDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(partModel);
        }

        public IHttpActionResult Put(PartModel partModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            PartDTO partDTO = mapper.Map<PartDTO>(partModel);

            try
            {
                partModel.Id = partService.Insert(partDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(partModel);
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                partService.Delete(id);
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
                    partService.Dispose();
                    base.Dispose(disposing);
                }
                this.disposed = true;
            }
        }
    }
}
