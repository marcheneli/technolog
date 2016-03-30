using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.DAL.Interfaces;
using Technolog.Domain.Entities;
using Technolog.Domain.Infrastructure;

namespace Technolog.DAL.EF
{
    public class EFTechProcessRepository : ITechProcessRepository
    {
        public void Add(TechProcess item)
        {
            throw new NotImplementedException();
        }

        public void Delete(TechProcess item)
        {
            throw new NotImplementedException();
        }

        public void DeleteById(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TechProcess> GetAll()
        {
            throw new NotImplementedException();
        }

        public TechProcess GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<TechProcess> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public PagedResult<TechProcess> GetPage(string search, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<TechProcess>> GetPageAsync(string search, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public void Update(TechProcess item)
        {
            throw new NotImplementedException();
        }
    }
}
