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
    class EFTechStepRepository : ITechStepRepository
    {
        ApplicationDbContext dbContext;

        public EFTechStepRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Add(TechStep item)
        {
            dbContext.TechSteps.Add(item);
        }

        public void Delete(TechStep item)
        {
            dbContext.TechSteps.Remove(item);
        }

        public void DeleteById(int id)
        {
            TechStep techStep = dbContext.TechSteps.Find(id);

            if (techStep != null) dbContext.TechSteps.Remove(techStep);
        }

        public IQueryable<TechStep> GetAll()
        {
            return dbContext.TechSteps;
        }

        public TechStep GetById(int id)
        {
            return dbContext.TechSteps.Find(id);
        }

        public async Task<TechStep> GetByIdAsync(int id)
        {
            return await dbContext.TechSteps.FindAsync(id);
        }

        public PagedResult<TechStep> GetPage(string search, int page, int pageSize)
        {
            IEnumerable<TechStep> techSteps;

            if (search == null)
                techSteps = dbContext.TechSteps.OrderBy(t => t.Id).Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                techSteps = dbContext.TechSteps.OrderBy(t => t.Id).Where(t => t.Description.Contains(search)).Skip(page * pageSize).Take(pageSize).ToList();
            }

            PagedResult<TechStep> pagedResult = new PagedResult<TechStep>();

            pagedResult.Results = techSteps;

            if (search == null)
                pagedResult.RowCount = dbContext.TechSteps.OrderBy(t => t.Id).Count();
            else
            {
                pagedResult.RowCount = dbContext.TechSteps.OrderBy(t => t.Id).Where(t => t.Description.Contains(search == null ? "" : search)).Count();
            }


            return pagedResult;
        }

        public async Task<PagedResult<TechStep>> GetPageAsync(string search, int page, int pageSize)
        {
            IEnumerable<TechStep> techSteps;

            if (search == null)
                techSteps = dbContext.TechSteps.Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                techSteps = await dbContext.TechSteps.Where(t => t.Description.Contains(search)).Skip(page * pageSize).Take(pageSize).ToListAsync();
            }

            PagedResult<TechStep> pagedResult = new PagedResult<TechStep>();

            pagedResult.Results = techSteps;
            pagedResult.RowCount = dbContext.TechSteps.Where(t => t.Description.Contains(search == null ? "" : search)).Count();

            return pagedResult;
        }

        public void Update(TechStep item)
        {
            TechStep entity = null;

            if (item.Id != 0)
                entity = dbContext.TechSteps.Find(item.Id);

            if (entity != null)
            {
                entity.Description = item.Description;
            }
        }
    }
}
