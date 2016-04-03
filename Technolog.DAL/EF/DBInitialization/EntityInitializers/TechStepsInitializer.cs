using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.DBInitialization
{
    class TechStepsInitializer : EntityInitializer
    {
        public override void Initialization(ApplicationDbContext context)
        {
            context.TechSteps.Add(new TechStep() { Description = "Установить кронштейн на основание. Закрепить болтовым соедиением." });
            context.TechSteps.Add(new TechStep() { Description = "Установить опору на основание. Закрепить болтовым соедиением." });
            context.TechSteps.Add(new TechStep() { Description = "Установить двигатель на основание. Закрепить болтовым соедиением." });
        }
    }
}
