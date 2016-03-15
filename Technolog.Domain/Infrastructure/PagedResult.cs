using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Domain.Infrastructure
{
    public class PagedResult<T> where T : class
    {
        public IEnumerable<T> Results { get; set; }
        public int CurrentPage { get; set; }
        public int PageCount { get; set; }
        public int PageSize { get; set; }
        public int RowCount { get; set; }
    }
}
