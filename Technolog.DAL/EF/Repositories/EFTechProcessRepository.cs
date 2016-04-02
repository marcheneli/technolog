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
    class EFTechProcessRepository : ITechProcessRepository
    {
        ApplicationDbContext dbContext;

        public EFTechProcessRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Add(TechProcess item)
        {
            dbContext.TechProcesses.Add(item);
        }

        public void Delete(TechProcess item)
        {
            dbContext.TechProcesses.Remove(item);
        }

        public void DeleteById(int id)
        {
            TechProcess techProcess = dbContext.TechProcesses.Find(id);

            if (techProcess != null) dbContext.TechProcesses.Remove(techProcess);
        }

        public IQueryable<TechProcess> GetAll()
        {
            return dbContext.TechProcesses;
        }

        public TechProcess GetById(int id)
        {
            return dbContext.TechProcesses.Find(id);
        }

        public async Task<TechProcess> GetByIdAsync(int id)
        {
            return await dbContext.TechProcesses.FindAsync(id);
        }

        public PagedResult<TechProcess> GetPage(string search, int page, int pageSize)
        {
            IEnumerable<TechProcess> techProcesses;

            if (search == null)
                techProcesses = dbContext.TechProcesses.OrderBy(t => t.TechProcessId).Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                techProcesses = dbContext.TechProcesses.OrderBy(t => t.TechProcessId).Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToList();
            }

            PagedResult<TechProcess> pagedResult = new PagedResult<TechProcess>();

            pagedResult.Results = techProcesses;

            if (search == null)
                pagedResult.RowCount = dbContext.TechProcesses.OrderBy(t => t.TechProcessId).Count();
            else
            {
                pagedResult.RowCount = dbContext.TechProcesses.OrderBy(t => t.TechProcessId).Where(t => t.Name.Contains(search == null ? "" : search)).Count();
            }


            return pagedResult;
        }

        public async Task<PagedResult<TechProcess>> GetPageAsync(string search, int page, int pageSize)
        {
            IEnumerable<TechProcess> techProcesses;

            if (search == null)
                techProcesses = dbContext.TechProcesses.Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                techProcesses = await dbContext.TechProcesses.Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToListAsync();
            }

            PagedResult<TechProcess> pagedResult = new PagedResult<TechProcess>();

            pagedResult.Results = techProcesses;
            pagedResult.RowCount = dbContext.TechProcesses.Where(t => t.Name.Contains(search == null ? "" : search)).Count();

            return pagedResult;
        }

        public void Update(TechProcess item)
        {
            TechProcess entity = null;

            if (item.TechProcessId != 0)
                entity = dbContext.TechProcesses.Find(item.TechProcessId);

            if (entity != null)
            {
                entity.Name = item.Name;
            }
        }
    }
}
