using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.DTO.Tool
{
    public class ToolListDTO
    {
        public IEnumerable<ToolDTO> Tools { get; set; }
        public int ToolAmount { get; set; }
    }
}
