using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.DBInitialization
{
    class TechProcessesInitializer : EntityInitializer
    {
        public override void Initialization(ApplicationDbContext context)
        {
            context.TechProcesses.Add(new TechProcess() { Name = "Сборка двигателя" });
            context.TechProcesses.Add(new TechProcess() { Name = "Сборка редуктора" });
            context.TechProcesses.Add(new TechProcess() { Name = "Сборка коробки перемены передач" });
        }
    }
}
