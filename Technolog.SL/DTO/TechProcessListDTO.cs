using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.DTO
{
    public class TechProcessListDTO
    {
        public IEnumerable<TechProcessDTO> TechProcesses { get; set; }
        public int TechProcessAmount { get; set; }
    }
}
