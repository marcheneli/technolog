using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Domain.Entities
{
    public class PartTechStep
    {
        public int PartId { get; set; }
        public int TechStepId { get; set; }

        public int Quantity { get; set; }

        public virtual Part Part { get; set; }
        public virtual TechStep TechStep { get; set; }
    }
}
