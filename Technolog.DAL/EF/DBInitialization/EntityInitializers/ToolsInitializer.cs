using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.DBInitialization
{
    class ToolsInitializer : EntityInitializer
    {
        public override void Initialization(ApplicationDbContext context)
        {
            context.Tools.Add(new Tool() { Name = "Молоток" });
            context.Tools.Add(new Tool() { Name = "Отвертка" });
            context.Tools.Add(new Tool() { Name = "Гайковерт" });

            context.SaveChanges();
        }
    }
}
