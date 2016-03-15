using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Infrastructure;

namespace Technolog.Domain.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        T GetById(int id);
        Task<T> GetByIdAsync(int id);
        PagedResult<T> GetPage(string search, int page, int pageSize);
        Task<PagedResult<T>> GetPageAsync(string search, int page, int pageSize);
        void Add(T item);
        void Update(T item);
        void Delete(T item);
        void DeleteById(int id);
    }
}
