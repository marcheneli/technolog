using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO.Tool;

namespace Technolog.SL.DTO
{
    public class ToolUsageDTO
    {
        public int ToolId { get; set; }
        public ToolDTO Tool { get; set; }
        public int Quantity { get; set; }
    }
}
