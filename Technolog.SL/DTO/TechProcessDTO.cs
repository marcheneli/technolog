using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.DTO
{
    public class TechProcessDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public IEnumerable<TechOperationDTO> TechOperations { get; set; }
    }
}
