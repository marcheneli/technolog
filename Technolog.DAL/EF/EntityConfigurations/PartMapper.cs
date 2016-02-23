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
    class PartMapper : EntityTypeConfiguration<Part>
    {
        public PartMapper()
        {
            this.Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            this.Property(p => p.Id).IsRequired();

            this.Property(p => p.PartNumber).HasMaxLength(256).IsUnicode(true);
            this.Property(p => p.Name).HasMaxLength(256).IsUnicode(true);
        }
    }
}
