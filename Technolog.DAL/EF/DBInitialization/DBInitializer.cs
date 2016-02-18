using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Technolog.DAL.EF.DBInitialization
{
    class DBInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            EntitiesInitializer initializers = new EntitiesInitializer(context);

            initializers.Add(new ToolsInitializer());

            initializers.Initialization();
        }
    }
}
