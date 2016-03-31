using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.DAL.EF.EntityConfigurations;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF
{
    class ApplicationDbContext : DbContext
    {
        public DbSet<Tool> Tools { get; set; }
        public DbSet<Part> Parts { get; set; }
        public DbSet<TechStep> TechSteps { get; set; }

        public ApplicationDbContext(string connectionString)
            :base(connectionString)
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Configurations.Add(new ToolMapper());
            modelBuilder.Configurations.Add(new PartMapper());
            modelBuilder.Configurations.Add(new TechStepMapper());
            modelBuilder.Configurations.Add(new ToolTechStepMapper());
            modelBuilder.Configurations.Add(new PartTechStepMapper());
        }
    }
}
