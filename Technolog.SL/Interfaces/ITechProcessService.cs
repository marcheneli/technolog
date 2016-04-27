using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO;

namespace Technolog.SL.Interfaces
{
    public interface ITechProcessService : IService<TechProcessDTO>
    {
        TechProcessListDTO GetPage(int page, int pageSize, string search);
        Task<TechProcessListDTO> GetPageAsync(int page, int pageSize, string search);
    }
}
