using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF
{
    class ApplicationDbContext : DbContext
    {
        public DbSet<Tool> Tools { get; set; }

        public ApplicationDbContext(string connectionString)
            :base(connectionString)
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Configurations.Add(new ToolMapper());
        }
    }
}
