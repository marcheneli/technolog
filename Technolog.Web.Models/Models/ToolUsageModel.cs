using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models
{
    public class ToolUsageModel
    {
        public int ToolId { get; set; }
        public ToolModel Tool { get; set; }
        public int Quantity { get; set; }
    }
}
