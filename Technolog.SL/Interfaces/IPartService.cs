using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO;

namespace Technolog.SL.Interfaces
{
    public interface IPartService : IService<PartDTO>
    {
        PartListDTO GetPage(int page, int pageSize, string search);
        Task<PartListDTO> GetPageAsync(int page, int pageSize, string search);
    }
}
