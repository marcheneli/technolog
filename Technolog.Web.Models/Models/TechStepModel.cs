using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models
{
    public class TechStepModel
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public IEnumerable<ToolUsageModel> ToolUsages { get; set; }
        public IEnumerable<PartUsageModel> PartUsages { get; set; }
    }
}
