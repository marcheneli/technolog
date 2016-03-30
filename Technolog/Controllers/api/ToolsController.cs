using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Technolog.Infrastructure.Interfaces;
using Technolog.SL.DTO.Tool;
using Technolog.SL.Infrastructure;
using Technolog.SL.Interfaces;
using Technolog.Web.Models;

namespace Technolog.Web.Controllers.api
{
    public class ToolsController : ApiController
    {
        readonly IToolService toolService;
        readonly IMapper mapper;

        public ToolsController(IToolService toolService, IMapper mapper)
        {
            if (toolService == null) throw new ArgumentNullException("toolService");

            if (mapper == null) throw new ArgumentNullException("mapper");

            this.toolService = toolService;
            this.mapper = mapper;
        }

        public IHttpActionResult Get(int? id)
        {
            ToolDTO toolDTO = null;

            if(id == null)
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        "Не установлен идентификатор инструмента"));

            try
            {
                toolDTO = toolService.Get(id ?? 0);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }
            
            ToolModel toolModel = mapper.Map<ToolModel>(toolDTO);

            return Ok(toolModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            ToolListDTO toolListDTO = toolService.GetPage(page, pageSize, search);
            
            ToolListModel toolListModel = mapper.Map<ToolListModel>(toolListDTO);

            return Ok(toolListModel);
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(ToolModel toolModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            ToolDTO toolDTO = mapper.Map<ToolDTO>(toolModel);

            try
            {
                toolService.Update(toolDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(toolModel);
        }

        public IHttpActionResult Put(ToolModel toolModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            ToolDTO toolDTO = mapper.Map<ToolDTO>(toolModel);

            try
            {
                toolModel.Id = toolService.Insert(toolDTO);
            }
            catch (ValidationException ex)
            {
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.BadRequest,
                        ex.Message));
            }

            return Ok(toolModel);
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                toolService.Delete(id);
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
                    toolService.Dispose();
                    base.Dispose(disposing);
                }
                this.disposed = true;
            }
        }
    }
}
