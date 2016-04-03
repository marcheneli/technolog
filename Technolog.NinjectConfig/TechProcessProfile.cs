using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.SL.DTO;
using Technolog.Web.Models;

namespace Technolog.NinjectConfig
{
    class TechProcessProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<TechProcessDTO, TechProcess>();
            CreateMap<TechProcess, TechProcessDTO>();
            CreateMap<TechProcessModel, TechProcessDTO>();
            CreateMap<TechProcessDTO, TechProcessModel>();
            CreateMap<TechProcessListDTO, TechProcessListModel>();
        }
    }
}
