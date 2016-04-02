using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.DTO
{
    public class PartListDTO
    {
        public IEnumerable<PartDTO> Parts { get; set; }
        public int PartAmount { get; set; }
    }
}
