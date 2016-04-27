using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.SL.Interfaces
{
    public interface IService<T> : IDisposable where T : class
    {
        T Get(int id);
        int Insert(T item);
        void Update(T item);
        void Delete(int id);
        void Delete(IEnumerable<T> items);

        Task<T> GetAsync(int id);
        Task InsertAsync(T item);
        Task UpdateAsync(T item);
        Task DeleteAsync(int id);
        Task DeleteAsync(IEnumerable<T> items);
    }
}
