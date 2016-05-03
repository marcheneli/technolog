using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.DTO
{
    public class TechStepDTO
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public IEnumerable<ToolUsageDTO> ToolUsages { get; set; }
        public IEnumerable<PartUsageDTO> PartUsages { get; set; }
    }
}
