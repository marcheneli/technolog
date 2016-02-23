using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.Domain.Interfaces;

namespace Technolog.DAL.EF
{
    class EFPartRepository : IPartRepository
    {
        ApplicationDbContext dbContext;

        public EFPartRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Add(Part item)
        {
            throw new NotImplementedException();
        }

        public void Delete(Part item)
        {
            throw new NotImplementedException();
        }

        public void DeleteById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Part> GetAll()
        {
            throw new NotImplementedException();
        }

        public Part GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Part item)
        {
            throw new NotImplementedException();
        }
    }
}
