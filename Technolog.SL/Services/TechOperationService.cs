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
    public class TechOperationService : BaseService, ITechOperationService
    {
        public TechOperationService(IUnitOfWork database, IMapper mapper)
            :base(database, mapper)
        {

        }

        public void Delete(int id)
        {
            database.TechOperations.DeleteById(id);

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
            database.TechOperations.DeleteById(id);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось удалить данный инструмент.", "");
            }
        }

        public TechOperationDTO Get(int id)
        {
            TechOperation techOperation = database.TechOperations.GetById(id);

            if (techOperation == null)
                throw new ValidationException("Инструмент не найден", "");

            TechOperationDTO techOperationDTO = mapper.Map<TechOperationDTO>(techOperation);

            return techOperationDTO;
        }

        public TechOperationListDTO GetPage(int page, int pageSize, string search)
        {
            PagedResult<TechOperation> pagedTechOperations = database.TechOperations.GetPage(search, page, pageSize);

            TechOperationListDTO techOperationListDTO = new TechOperationListDTO();

            techOperationListDTO.TechOperationAmount = pagedTechOperations.RowCount;

            techOperationListDTO.TechOperations = mapper.Map<IEnumerable<TechOperationDTO>>(pagedTechOperations.Results);

            return techOperationListDTO;
        }

        public Task<TechOperationDTO> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<TechOperationListDTO> GetPageAsync(int page, int pageSize, string search)
        {
            throw new NotImplementedException();
        }

        public int Insert(TechOperationDTO techOperationDTO)
        {
            TechOperation techOperation = mapper.Map<TechOperation>(techOperationDTO);
            database.TechOperations.Add(techOperation);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }

            return techOperation.Id;
        }

        public async Task InsertAsync(TechOperationDTO techOperationDTO)
        {
            TechOperation techOperation = mapper.Map<TechOperation>(techOperationDTO);
            database.TechOperations.Add(techOperation);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }
        }

        public void Update(TechOperationDTO techOperationDTO)
        {
            TechOperation techOperation = mapper.Map<TechOperation>(techOperationDTO);
            database.TechOperations.Update(techOperation);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public async Task UpdateAsync(TechOperationDTO techOperationDTO)
        {
            TechOperation techOperation = mapper.Map<TechOperation>(techOperationDTO);
            database.TechOperations.Update(techOperation);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public void Delete(IEnumerable<TechOperationDTO> items)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(IEnumerable<TechOperationDTO> items)
        {
            throw new NotImplementedException();
        }
    }
}
