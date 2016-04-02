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
            catch (Exception ex)
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
            catch (Exception ex)
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
            TechStep techStep = mapper.Map<TechStep>(techStepDTO);
            database.TechSteps.Add(techStep);

            try
            {
                database.Save();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }

            return techStep.TechStepId;
        }

        public async Task InsertAsync(TechStepDTO techStepDTO)
        {
            TechStep techStep = mapper.Map<TechStep>(techStepDTO);
            database.TechSteps.Add(techStep);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }
        }

        public void Update(TechStepDTO techStepDTO)
        {
            TechStep techStep = mapper.Map<TechStep>(techStepDTO);
            database.TechSteps.Update(techStep);

            try
            {
                database.Save();
            }
            catch (Exception ex)
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
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }
    }
}
