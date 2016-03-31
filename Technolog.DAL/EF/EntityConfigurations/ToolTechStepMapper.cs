using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.EF.EntityConfigurations
{
    class ToolTechStepMapper : EntityTypeConfiguration<ToolTechStep>
    {
        public ToolTechStepMapper()
        {
            this.HasKey(tts => new { tts.TechStepId, tts.ToolId });
        }
    }
}
