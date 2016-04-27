using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.DBInitialization
{
    class TechOperationsInitializer : EntityInitializer
    {
        public override void Initialization(ApplicationDbContext context)
        {
            context.TechOperations.Add(new TechOperation() { Name = "Установка бензонасоса" });
            context.TechOperations.Add(new TechOperation() { Name = "Подсборка первичного вала" });
            context.TechOperations.Add(new TechOperation() { Name = "Установка датчика оборотов" });
        }
    }
}
