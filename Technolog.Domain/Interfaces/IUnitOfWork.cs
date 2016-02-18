using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IToolRepository Tools { get; }

        Task SaveAsync();
        void Save();
    }
}
