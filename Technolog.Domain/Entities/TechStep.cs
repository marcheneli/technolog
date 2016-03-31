using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Domain.Entities
{
    public class TechStep
    {
        public int TechStepId { get; set; }

        public string Description { get; set; }

        public virtual ICollection<ToolTechStep> ToolUsages { get; set; }

        public virtual ICollection<PartTechStep> PartUsages { get; set; }
    }
}
