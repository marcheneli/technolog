using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.BLL.DTO.Tool;

namespace Technolog.BLL.Interfaces
{
    public interface IToolService : IService<ToolDTO>
    {
        ToolListDTO Get(int page, int pageSize, string search);
    }
}
