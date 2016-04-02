using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models.Models
{
    public class TechStepListModel
    {
        public int TechStepAmount { get; set; }
        public IEnumerable<TechStepModel> TechSteps { get; set; }
    }
}
