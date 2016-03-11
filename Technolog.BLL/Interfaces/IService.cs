using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.BLL.Interfaces
{
    public interface IService<T> : IDisposable
    {
        T Get(int id);
        void Create(T toolDTO);
        void Update(T toolDTO);
        void Delete(int id);
    }
}
