using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models
{
    public class TechOperationListModel
    {
        public int TechOperationAmount { get; set; }
        public IEnumerable<TechOperationModel> TechOperations { get; set; }
    }
}
