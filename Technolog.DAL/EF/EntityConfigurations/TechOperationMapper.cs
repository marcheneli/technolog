using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.EntityConfigurations
{
    class TechOperationMapper : EntityTypeConfiguration<TechOperation>
    {
        public TechOperationMapper()
        {
            this.Property(c => c.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            this.Property(c => c.Id).IsRequired();

            this.Property(c => c.Name).HasMaxLength(256).IsUnicode(true);

            this.HasMany<TechStep>(to => to.TechSteps)
                .WithOptional(ts => ts.TechOperation)
                .HasForeignKey(ts => ts.TechOperationId)
                .WillCascadeOnDelete(false);
        }
    }
}
