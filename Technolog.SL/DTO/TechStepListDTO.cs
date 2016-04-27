using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.DTO
{
    public class TechStepListDTO
    {
        public IEnumerable<TechStepDTO> TechSteps { get; set; }
        public int TechStepAmount { get; set; }
    }
}
