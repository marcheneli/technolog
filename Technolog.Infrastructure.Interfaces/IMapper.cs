using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Infrastructure.Interfaces
{
    public interface IMapper
    {
        T Map<T>(object source);
    }
}
