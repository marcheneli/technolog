using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models.Models
{
    public class TechProcessListModel
    {
        public int TechProcessAmount { get; set; }
        public IEnumerable<TechProcessModel> TechOProcesses { get; set; }
    }
}
