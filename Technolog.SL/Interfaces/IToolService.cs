using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO.Tool;

namespace Technolog.SL.Interfaces
{
    public interface IToolService : IService<ToolDTO>
    {
        ToolListDTO GetPage(int page, int pageSize, string search);
        Task<ToolListDTO> GetPageAsync(int page, int pageSize, string search);
    }
}
