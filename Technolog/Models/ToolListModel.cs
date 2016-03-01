using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Technolog.Web.Models
{
    public class ToolListModel
    {
        public int ToolAmount { get; set; }
        public IEnumerable<ToolModel> Tools { get; set; }
    }
}