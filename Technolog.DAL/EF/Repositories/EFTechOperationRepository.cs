using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.DAL.Interfaces;
using Technolog.Domain.Entities;
using Technolog.Domain.Infrastructure;

namespace Technolog.DAL.EF
{
    class EFTechOperationRepository : ITechOperationRepository
    {
        ApplicationDbContext dbContext;

        public EFTechOperationRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Add(TechOperation item)
        {
            dbContext.TechOperations.Add(item);
        }

        public void Delete(TechOperation item)
        {
            dbContext.TechOperations.Remove(item);
        }

        public void DeleteById(int id)
        {
            TechOperation techOperation = dbContext.TechOperations.Find(id);

            if (techOperation != null) dbContext.TechOperations.Remove(techOperation);
        }

        public IQueryable<TechOperation> GetAll()
        {
            return dbContext.TechOperations;
        }

        public TechOperation GetById(int id)
        {
            return dbContext.TechOperations.Find(id);
        }

        public async Task<TechOperation> GetByIdAsync(int id)
        {
            return await dbContext.TechOperations.FindAsync(id);
        }

        public PagedResult<TechOperation> GetPage(string search, int page, int pageSize)
        {
            IEnumerable<TechOperation> techOperations;

            if (search == null)
                techOperations = dbContext.TechOperations.OrderBy(t => t.Id).Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                techOperations = dbContext.TechOperations.OrderBy(t => t.Id).Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToList();
            }

            PagedResult<TechOperation> pagedResult = new PagedResult<TechOperation>();

            pagedResult.Results = techOperations;

            if (search == null)
                pagedResult.RowCount = dbContext.TechOperations.OrderBy(t => t.Id).Count();
            else
            {
                pagedResult.RowCount = dbContext.TechOperations.OrderBy(t => t.Id).Where(t => t.Name.Contains(search == null ? "" : search)).Count();
            }


            return pagedResult;
        }

        public async Task<PagedResult<TechOperation>> GetPageAsync(string search, int page, int pageSize)
        {
            IEnumerable<TechOperation> techOperations;

            if (search == null)
                techOperations = dbContext.TechOperations.Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                techOperations = await dbContext.TechOperations.Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToListAsync();
            }

            PagedResult<TechOperation> pagedResult = new PagedResult<TechOperation>();

            pagedResult.Results = techOperations;
            pagedResult.RowCount = dbContext.TechOperations.Where(t => t.Name.Contains(search == null ? "" : search)).Count();

            return pagedResult;
        }

        public void Update(TechOperation item)
        {
            TechOperation entity = null;

            if (item.Id != 0)
                entity = dbContext.TechOperations.Find(item.Id);

            if (entity != null)
            {
                entity.Name = item.Name;
            }
        }
    }
}
