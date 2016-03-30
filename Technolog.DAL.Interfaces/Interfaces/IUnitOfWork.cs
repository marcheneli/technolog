using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IToolRepository Tools { get; }
        IPartRepository Parts { get; }
        ITechStepRepository TechSteps { get; }
        ITechOperationRepository TechOperations { get; }
        ITechProcessRepository TechProcesses { get; }

        Task SaveAsync();
        void Save();
    }
}
