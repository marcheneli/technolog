using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            dbContext.Tools.Add(item);
        }

        public void Delete(Tool item)
        {
            dbContext.Tools.Remove(item);
        }

        public void DeleteById(int id)
        {
            Tool tool = dbContext.Tools.Find(id);

            if (tool != null) dbContext.Tools.Remove(tool);
        }

        public IEnumerable<Tool> GetAll()
        {
            return dbContext.Tools.ToList();
        }

        public Tool GetById(int id)
        {
            return dbContext.Tools.Find(id);
        }

        public void Update(Tool item)
        {
            dbContext.Entry(item).State = EntityState.Modified;
        }
    }
}
