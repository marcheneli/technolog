using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.DAL.Interfaces;
using Technolog.Domain.Entities;
using Technolog.Domain.Infrastructure;
using Technolog.Infrastructure.Interfaces;
using Technolog.SL.DTO;
using Technolog.SL.Infrastructure;
using Technolog.SL.Interfaces;

namespace Technolog.SL.Services
{
    public class TechStepService : BaseService, ITechStepService
    {
        public TechStepService(IUnitOfWork database, IMapper mapper)
            :base(database, mapper)
        {

        }

        public void Delete(int id)
        {
            database.TechSteps.DeleteById(id);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось удалить данный инструмент.", "");
            }
        }

        public async Task DeleteAsync(int id)
        {
            database.TechSteps.DeleteById(id);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось удалить данный инструмент.", "");
            }
        }

        public TechStepDTO Get(int id)
        {
            TechStep techStep = database.TechSteps.GetById(id);

            if (techStep == null)
                throw new ValidationException("Инструмент не найден", "");

            TechStepDTO techStepDTO = mapper.Map<TechStepDTO>(techStep);

            return techStepDTO;
        }

        public TechStepListDTO GetPage(int page, int pageSize, string search)
        {
            PagedResult<TechStep> pagedTechSteps = database.TechSteps.GetPage(search, page, pageSize);

            TechStepListDTO techStepListDTO = new TechStepListDTO();

            techStepListDTO.TechStepAmount = pagedTechSteps.RowCount;

            techStepListDTO.TechSteps = mapper.Map<IEnumerable<TechStepDTO>>(pagedTechSteps.Results);

            return techStepListDTO;
        }

        public Task<TechStepDTO> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<TechStepListDTO> GetPageAsync(int page, int pageSize, string search)
        {
            throw new NotImplementedException();
        }

        public int Insert(TechStepDTO techStepDTO)
        {
            TechStep techStep = new TechStep() { Description = techStepDTO.Description, ToolUsages = new List<ToolTechStep>(), PartUsages = new List<PartTechStep>()};

            foreach (var toolUsage in techStepDTO.ToolUsages)
            {
                techStep.ToolUsages.Add(new ToolTechStep() { ToolId = toolUsage.ToolId, Quantity = toolUsage.Quantity });
            }

            foreach (var partUsage in techStepDTO.PartUsages)
            {
                techStep.PartUsages.Add(new PartTechStep() { PartId = partUsage.PartId, Quantity = partUsage.Quantity });
            }

            database.TechSteps.Add(techStep);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }

            return techStep.Id;
        }

        public async Task InsertAsync(TechStepDTO techStepDTO)
        {
            TechStep techStep = mapper.Map<TechStep>(techStepDTO);
            database.TechSteps.Add(techStep);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }
        }

        public void Update(TechStepDTO techStepDTO)
        {
            TechStep techStep = database.TechSteps.GetById(techStepDTO.Id);

            techStep.Description = techStepDTO.Description;
            
            foreach (var toolUsage in techStepDTO.ToolUsages)
            {
                var techStepToolUsage = techStep.ToolUsages.FirstOrDefault(
                    tu => tu.ToolId == toolUsage.ToolId);

                if (techStepToolUsage != null)
                {
                    techStepToolUsage.Quantity = toolUsage.Quantity;
                }
                else
                {
                    techStep.ToolUsages.Add(new ToolTechStep() { ToolId = toolUsage.ToolId, Quantity = toolUsage.Quantity });
                }
            }

            foreach (var partUsage in techStepDTO.PartUsages)
            {
                var techStepPartUsage = techStep.PartUsages.FirstOrDefault(
                    pu => pu.PartId == partUsage.PartId);

                if (techStepPartUsage != null)
                {
                    techStepPartUsage.Quantity = partUsage.Quantity;
                }
                else
                {
                    techStep.PartUsages.Add(new PartTechStep() { PartId = partUsage.PartId, Quantity = partUsage.Quantity });
                }
            }

            foreach (var toolUsage in techStep.ToolUsages.ToList())
            {
                var toolUsageDTO = techStepDTO.ToolUsages.FirstOrDefault(tu => tu.ToolId == toolUsage.ToolId);

                if (toolUsageDTO == null) techStep.ToolUsages.Remove(toolUsage);
            }

            foreach (var partUsage in techStep.PartUsages.ToList())
            {
                var partUsageDTO = techStepDTO.PartUsages.FirstOrDefault(pu => pu.PartId == partUsage.PartId);

                if (partUsageDTO == null) techStep.PartUsages.Remove(partUsage);
            }

            database.TechSteps.Update(techStep);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public async Task UpdateAsync(TechStepDTO techStepDTO)
        {
            TechStep techStep = mapper.Map<TechStep>(techStepDTO);
            database.TechSteps.Update(techStep);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public void Delete(IEnumerable<TechStepDTO> items)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(IEnumerable<TechStepDTO> items)
        {
            throw new NotImplementedException();
        }
    }
}
