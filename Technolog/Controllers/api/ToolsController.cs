﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Technolog.SL.DTO.Tool;
using Technolog.SL.Infrastructure;
using Technolog.SL.Interfaces;
using Technolog.SL.Services;
using Technolog.DAL.EF;
using Technolog.Domain.Entities;
using Technolog.Domain.Interfaces;
using Technolog.Web.Models;

namespace Technolog.Web.Controllers.api
{
    public class ToolsController : ApiController
    {
        IToolService toolService;

        public ToolsController(IToolService toolService)
        {
            this.toolService = toolService;
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

            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<ToolDTO, ToolModel>());
            IMapper mapper = mapperConfig.CreateMapper();

            ToolModel toolModel = mapper.Map<ToolModel>(toolDTO);

            return Ok(toolModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            ToolListDTO toolListDTO = toolService.GetPage(page, pageSize, search);

            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => {
                    cfg.CreateMap<ToolDTO, ToolModel>();
                    cfg.CreateMap<ToolListDTO, ToolListModel>();
                });

            IMapper mapper = mapperConfig.CreateMapper();
            
            ToolListModel toolListModel = mapper.Map<ToolListModel>(toolListDTO);

            return Ok(toolListModel);
        }

        [ValidateAntiForgeryToken]
        public IHttpActionResult Post(ToolModel toolModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<ToolModel, ToolDTO>());
            IMapper mapper = mapperConfig.CreateMapper();

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

            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<ToolModel, ToolDTO>());
            IMapper mapper = mapperConfig.CreateMapper();

            ToolDTO toolDTO = mapper.Map<ToolDTO>(toolModel);

            try
            {
                toolService.Insert(toolDTO);
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
