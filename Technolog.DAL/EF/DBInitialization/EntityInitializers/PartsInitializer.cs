using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.DBInitialization
{
    class PartsInitializer : EntityInitializer
    {
        public override void Initialization(ApplicationDbContext context)
        {
            context.Parts.Add(new Part() { PartNumber = "324-692", Name = "Болт" });
            context.Parts.Add(new Part() { PartNumber = "354-692", Name = "Гайка" });
            context.Parts.Add(new Part() { PartNumber = "394-692", Name = "Шайба" });

            context.SaveChanges();
        }
    }
}
