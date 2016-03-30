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
    public class EFTechOperationRepository : ITechOperationRepository
    {
        public void Add(TechOperation item)
        {
            throw new NotImplementedException();
        }

        public void Delete(TechOperation item)
        {
            throw new NotImplementedException();
        }

        public void DeleteById(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TechOperation> GetAll()
        {
            throw new NotImplementedException();
        }

        public TechOperation GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<TechOperation> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public PagedResult<TechOperation> GetPage(string search, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<TechOperation>> GetPageAsync(string search, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public void Update(TechOperation item)
        {
            throw new NotImplementedException();
        }
    }
}
