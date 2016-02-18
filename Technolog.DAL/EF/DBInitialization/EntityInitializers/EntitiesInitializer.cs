using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.DAL.EF.DBInitialization
{
    class EntitiesInitializer
    {
        List<EntityInitializer> methods = new List<EntityInitializer>();
        ApplicationDbContext context;

        public EntitiesInitializer(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void Add(EntityInitializer initializer)
        {
            methods.Add(initializer);
        }

        public void Initialization()
        {
            foreach (var method in methods)
                method.Initialization(context);
        }
    }
}
