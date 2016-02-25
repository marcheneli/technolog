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
            dbContext.Parts.Add(item);
        }

        public void Delete(Part item)
        {
            dbContext.Parts.Remove(item);
        }

        public void DeleteById(int id)
        {
            Part part = dbContext.Parts.Find(id);

            if (part != null) dbContext.Parts.Remove(part);
        }

        public IEnumerable<Part> GetAll()
        {
            return dbContext.Parts.ToList();
        }

        public Part GetById(int id)
        {
            return dbContext.Parts.Find(id);
        }

        public void Update(Part item)
        {
            Part entity = null;

            if (item.Id != 0)
                entity = dbContext.Parts.Find(item.Id);

            if (entity != null)
            {
                entity.PartNumber = item.PartNumber;
                entity.Name = item.Name;
                dbContext.SaveChanges();
            }
        }
    }
}
