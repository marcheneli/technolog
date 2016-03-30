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
    public class EFTechStepRepository : ITechStepRepository
    {
        public void Add(TechStep item)
        {
            throw new NotImplementedException();
        }

        public void Delete(TechStep item)
        {
            throw new NotImplementedException();
        }

        public void DeleteById(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TechStep> GetAll()
        {
            throw new NotImplementedException();
        }

        public TechStep GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<TechStep> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public PagedResult<TechStep> GetPage(string search, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public Task<PagedResult<TechStep>> GetPageAsync(string search, int page, int pageSize)
        {
            throw new NotImplementedException();
        }

        public void Update(TechStep item)
        {
            throw new NotImplementedException();
        }
    }
}
