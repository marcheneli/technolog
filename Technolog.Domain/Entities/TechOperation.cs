using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Domain.Entities
{
    public class TechOperation
    {
        public int Id { get; set; }
        public int? TechProcessId { get; set; }
        public string Name { get; set; }

        public virtual TechProcess TechProcess { get; set; }
        public virtual ICollection<TechStep> TechSteps { get; set; }
    }
}
