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
    class TechStepProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<TechStepDTO, TechStep>();
            CreateMap<TechStep, TechStepDTO>();
            CreateMap<TechStepModel, TechStepDTO>();
            CreateMap<TechStepDTO, TechStepModel>();
            CreateMap<TechStepListDTO, TechStepListModel>();
        }
    }
}
