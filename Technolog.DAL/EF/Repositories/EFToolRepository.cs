using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.Domain.Interfaces;

namespace Technolog.DAL.EF
{
    class EFToolRepository : IToolRepository
    {
        ApplicationDbContext dbContext;

        public EFToolRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void Add(Tool item)
        {
            throw new NotImplementedException();
        }

        public void Delete(Tool item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Tool> GetAll()
        {
            return dbContext.Tools.ToList();
        }

        public Tool GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Tool item)
        {
            throw new NotImplementedException();
        }
    }
}
