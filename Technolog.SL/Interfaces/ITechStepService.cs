using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO;

namespace Technolog.SL.Interfaces
{
    public interface ITechStepService : IService<TechStepDTO>
    {
        TechStepListDTO GetPage(int page, int pageSize, string search);
        Task<TechStepListDTO> GetPageAsync(int page, int pageSize, string search);
    }
}
