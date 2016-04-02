using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Web.Models.Models
{
    public class PartListModel
    {
        public int PartAmount { get; set; }
        public IEnumerable<PartModel> Parts { get; set; }
    }
}
