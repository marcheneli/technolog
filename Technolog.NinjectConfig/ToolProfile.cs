using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.SL.DTO.Tool;
using Technolog.Web.Models;

namespace Technolog.NinjectConfig
{
    class ToolProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<ToolDTO, Tool>();
            CreateMap<Tool, ToolDTO>();
            CreateMap<ToolModel, ToolDTO>();
            CreateMap<ToolDTO, ToolModel>();
            CreateMap<ToolListDTO, ToolListModel>();
        }
    }
}
