using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Interfaces;
using Technolog.Infrastructure.Interfaces;

namespace Technolog.SL.Services
{
    public abstract class BaseService
    {
        protected readonly IUnitOfWork database;
        protected readonly IMapper mapper;

        public BaseService(IUnitOfWork database, IMapper mapper)
        {
            this.database = database;
            this.mapper = mapper;
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    database.Dispose();
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
