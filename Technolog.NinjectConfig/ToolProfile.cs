using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.SL.DTO.Tool;

namespace Technolog.NinjectConfig
{
    public class ToolProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<ToolDTO, Tool>();
            CreateMap<Tool, ToolDTO>();
        }
    }
}
