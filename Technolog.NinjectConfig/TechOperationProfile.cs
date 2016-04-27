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
    class TechOperationProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<TechOperationDTO, TechOperation>();
            CreateMap<TechOperation, TechOperationDTO>();
            CreateMap<TechOperationModel, TechOperationDTO>();
            CreateMap<TechOperationDTO, TechOperationModel>();
            CreateMap<TechOperationListDTO, TechOperationListModel>();
        }
    }
}
