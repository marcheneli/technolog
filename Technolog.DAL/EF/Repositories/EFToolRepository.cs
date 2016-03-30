using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.Domain.Infrastructure;
using Technolog.DAL.Interfaces;

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

        public IQueryable<Tool> GetAll()
        {
            return dbContext.Tools;
        }

        public Tool GetById(int id)
        {
            return dbContext.Tools.Find(id);
        }

        public async Task<Tool> GetByIdAsync(int id)
        {
            return await dbContext.Tools.FindAsync(id);
        }

        public PagedResult<Tool> GetPage(string search, int page, int pageSize)
        {
            IEnumerable<Tool> tools;

            if (search == null)
                tools = dbContext.Tools.OrderBy(t => t.Id).Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                tools = dbContext.Tools.OrderBy(t => t.Id).Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToList();
            }

            PagedResult<Tool> pagedResult = new PagedResult<Tool>();

            pagedResult.Results = tools;

            if (search == null)
                pagedResult.RowCount = dbContext.Tools.OrderBy(t => t.Id).Count();
            else
            {
                pagedResult.RowCount = dbContext.Tools.OrderBy(t => t.Id).Where(t => t.Name.Contains(search == null ? "" : search)).Count();
            }
            

            return pagedResult;
        }

        public async Task<PagedResult<Tool>> GetPageAsync(string search, int page, int pageSize)
        {
            IEnumerable<Tool> tools;

            if (search == null)
                tools = dbContext.Tools.Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                tools = await dbContext.Tools.Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToListAsync();
            }

            PagedResult<Tool> pagedResult = new PagedResult<Tool>();

            pagedResult.Results = tools;
            pagedResult.RowCount = dbContext.Tools.Where(t => t.Name.Contains(search == null ? "" : search)).Count();

            return pagedResult;
        }

        public void Update(Tool item)
        {
            Tool entity = null;

            if (item.Id != 0)
                entity = dbContext.Tools.Find(item.Id);

            if(entity != null)
            {
                entity.Name = item.Name;
                dbContext.SaveChanges();
            }
        }
    }
}
