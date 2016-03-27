using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Infrastructure.Interfaces;

namespace Technolog.Infrastructure.Mapper.AM
{
    public class AutoMapperAdapter : IMapper
    {
        readonly AutoMapper.IMapper mapper;

        public AutoMapperAdapter(AutoMapper.IMapper mapper)
        {
            this.mapper = mapper;
        }

        public T Map<T>(object source)
        {
            return mapper.Map<T>(source);
        }
    }
}
