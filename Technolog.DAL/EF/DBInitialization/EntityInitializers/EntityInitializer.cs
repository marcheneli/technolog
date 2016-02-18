using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.DAL.EF.DBInitialization
{
    abstract class EntityInitializer
    {
        public abstract void Initialization(ApplicationDbContext context);
    }
}
