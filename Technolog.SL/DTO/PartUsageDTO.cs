using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO.Tool;

namespace Technolog.SL.DTO
{
    public class PartUsageDTO
    {
        public int PartId { get; set; }
        public int TechStepId { get; set; }
        public PartDTO Part { get; set; }
        public int Quantity { get; set; }
    }
}
