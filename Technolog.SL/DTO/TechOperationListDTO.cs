using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.DTO
{
    public class TechOperationListDTO
    {
        public IEnumerable<TechOperationDTO> TechOperations { get; set; }
        public int TechOperationAmount { get; set; }
    }
}
