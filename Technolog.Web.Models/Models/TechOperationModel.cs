using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models
{
    public class TechOperationModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public IEnumerable<TechStepModel> TechSteps { get; set; }
    }
}
