using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models
{
    public class PartUsageModel
    {
        public int PartId { get; set; }
        public int TechStepId { get; set; }
        public PartModel Part { get; set; }
        public int Quantity { get; set; }
    }
}
