using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.DAL.Interfaces;

namespace Technolog.DAL.EF
{
    public class EFUnitOfWork : IUnitOfWork
    {
        ApplicationDbContext dbContext;

        IToolRepository tools;
        IPartRepository parts;
        ITechStepRepository techSteps;
        ITechOperationRepository techOperations;
        ITechProcessRepository techProcesses;

        public EFUnitOfWork(string connectionString)
        {
            dbContext = new ApplicationDbContext(connectionString);
        }

        public IToolRepository Tools
        {
            get
            {
                if (tools == null)
                    tools = new EFToolRepository(dbContext);

                return tools;
            }
        }

        public IPartRepository Parts
        {
            get
            {
                if (parts == null)
                    parts = new EFPartRepository(dbContext);

                return parts;
            }
        }

        public ITechStepRepository TechSteps
        {
            get
            {
                if (techSteps == null)
                    techSteps = new EFTechStepRepository(dbContext);

                return techSteps;
            }
        }

        public ITechOperationRepository TechOperations
        {
            get
            {
                if (techOperations == null)
                    techOperations = new EFTechOperationRepository(dbContext);

                return techOperations;
            }
        }

        public ITechProcessRepository TechProcesses
        {
            get
            {
                if (techProcesses == null)
                    techProcesses = new EFTechProcessRepository(dbContext);

                return techProcesses;
            }
        }

        public void Save()
        {
            dbContext.SaveChanges();
        }

        public Task SaveAsync()
        {
            throw new NotImplementedException();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    dbContext.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
