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
    class PartProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<PartDTO, Part>();
            CreateMap<Part, PartDTO>();
            CreateMap<PartModel, PartDTO>();
            CreateMap<PartDTO, PartModel>();
            CreateMap<PartListDTO, PartListModel>();
        }
    }
}
