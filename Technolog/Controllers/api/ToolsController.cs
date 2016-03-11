using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Technolog.BLL.DTO.Tool;
using Technolog.BLL.Interfaces;
using Technolog.BLL.Services;
using Technolog.DAL.EF;
using Technolog.Domain.Entities;
using Technolog.Domain.Interfaces;
using Technolog.Web.Models;

namespace Technolog.Web.Controllers.api
{
    public class ToolsController : ApiController
    {
        IUnitOfWork unitOfWork;
        IToolService toolService;

        public ToolsController()
        {
            unitOfWork = new EFUnitOfWork("TechnologConnection");
            toolService = new ToolService(unitOfWork);
        }

        public IHttpActionResult Get(int id)
        {
            ToolDTO toolDTO = toolService.Get(id);

            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<ToolDTO, ToolModel>());
            IMapper mapper = mapperConfig.CreateMapper();

            ToolModel toolModel = mapper.Map<ToolModel>(toolDTO);

            return Ok(toolModel);
        }

        public IHttpActionResult Get(string search = null, int page = 0, int pageSize = 25)
        {
            ToolListDTO toolListDTO = toolService.Get(page, pageSize, search);

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
