using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.EntityConfigurations
{
    class TechStepMapper : EntityTypeConfiguration<TechStep>
    {
        public TechStepMapper()
        {

            this.HasMany<ToolTechStep>(ts => ts.ToolUsages)
                .WithRequired(tts => tts.TechStep)
                .HasForeignKey(tts => tts.TechStepId)
                .WillCascadeOnDelete(true);

            this.HasMany<PartTechStep>(ts => ts.PartUsages)
                .WithRequired(pts => pts.TechStep)
                .HasForeignKey(pts => pts.TechStepId)
                .WillCascadeOnDelete(true);
        }
    }
}
