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
        void Insert(T toolDTO);
        void Update(T toolDTO);
        void Delete(int id);

        Task<T> GetAsync(int id);
        Task InsertAsync(T toolDTO);
        Task UpdateAsync(T toolDTO);
        Task DeleteAsync(int id);
    }
}
