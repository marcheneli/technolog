using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Interfaces;

namespace Technolog.DAL.EF
{
    public class EFUnitOfWork : IUnitOfWork
    {
        ApplicationDbContext dbContext;

        IToolRepository tools;
        IPartRepository parts;

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
