using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;
using Technolog.Domain.Infrastructure;
using Technolog.DAL.Interfaces;
using System.Data.Entity;

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

        public IQueryable<Part> GetAll()
        {
            return dbContext.Parts;
        }

        public Part GetById(int id)
        {
            return dbContext.Parts.Find(id);
        }

        public async Task<Part> GetByIdAsync(int id)
        {
            return await dbContext.Parts.FindAsync(id);
        }

        public PagedResult<Part> GetPage(string search, int page, int pageSize)
        {
            IEnumerable<Part> parts;

            if (search == null)
                parts = dbContext.Parts.OrderBy(t => t.Id).Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                parts = dbContext.Parts.OrderBy(t => t.Id).Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToList();
            }

            PagedResult<Part> pagedResult = new PagedResult<Part>();

            pagedResult.Results = parts;

            if (search == null)
                pagedResult.RowCount = dbContext.Parts.OrderBy(t => t.Id).Count();
            else
            {
                pagedResult.RowCount = dbContext.Parts.OrderBy(t => t.Id).Where(t => t.Name.Contains(search == null ? "" : search)).Count();
            }


            return pagedResult;
        }

        public async Task<PagedResult<Part>> GetPageAsync(string search, int page, int pageSize)
        {
            IEnumerable<Part> parts;

            if (search == null)
                parts = dbContext.Parts.Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                parts = await dbContext.Parts.Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToListAsync();
            }

            PagedResult<Part> pagedResult = new PagedResult<Part>();

            pagedResult.Results = parts;
            pagedResult.RowCount = dbContext.Parts.Where(t => t.Name.Contains(search == null ? "" : search)).Count();

            return pagedResult;
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
            }
        }
    }
}
