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
    public class TechProcessService : BaseService, ITechProcessService
    {
        public TechProcessService(IUnitOfWork database, IMapper mapper)
            :base(database, mapper)
        {

        }

        public void Delete(int id)
        {
            database.TechProcesses.DeleteById(id);

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
            database.TechProcesses.DeleteById(id);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось удалить данный инструмент.", "");
            }
        }

        public TechProcessDTO Get(int id)
        {
            TechProcess techProcess = database.TechProcesses.GetById(id);

            if (techProcess == null)
                throw new ValidationException("Инструмент не найден", "");

            TechProcessDTO techProcessDTO = mapper.Map<TechProcessDTO>(techProcess);

            return techProcessDTO;
        }

        public TechProcessListDTO GetPage(int page, int pageSize, string search)
        {
            PagedResult<TechProcess> pagedTechProcesses = database.TechProcesses.GetPage(search, page, pageSize);

            TechProcessListDTO techProcessListDTO = new TechProcessListDTO();

            techProcessListDTO.TechProcessAmount = pagedTechProcesses.RowCount;

            techProcessListDTO.TechProcesses = mapper.Map<IEnumerable<TechProcessDTO>>(pagedTechProcesses.Results);

            return techProcessListDTO;
        }

        public Task<TechProcessDTO> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<TechProcessListDTO> GetPageAsync(int page, int pageSize, string search)
        {
            throw new NotImplementedException();
        }

        public int Insert(TechProcessDTO techProcessDTO)
        {
            TechProcess techProcess = new TechProcess()
            {
                Name = techProcessDTO.Name,
                TechOperations = new List<TechOperation>()
            };

            foreach (var techOperationDTO in techProcessDTO.TechOperations)
            {
                var techOperation = database.TechOperations.GetById(techOperationDTO.Id);

                techProcess.TechOperations.Add(techOperation);
            }

            database.TechProcesses.Add(techProcess);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }

            return techProcess.Id;
        }

        public async Task InsertAsync(TechProcessDTO techProcessDTO)
        {
            TechProcess techProcess = mapper.Map<TechProcess>(techProcessDTO);
            database.TechProcesses.Add(techProcess);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }
        }

        public void Update(TechProcessDTO techProcessDTO)
        {
            TechProcess techProcess = database.TechProcesses.GetById(techProcessDTO.Id);

            techProcess.Name = techProcessDTO.Name;

            foreach (var techOperationDTO in techProcessDTO.TechOperations)
            {
                var techOperation = techProcess.TechOperations.FirstOrDefault(to => to.Id == techOperationDTO.Id);

                if (techOperation == null) {
                    techOperation = database.TechOperations.GetById(techOperationDTO.Id);

                    techProcess.TechOperations.Add(techOperation);
                }
            }

            database.TechProcesses.Update(techProcess);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public async Task UpdateAsync(TechProcessDTO techProcessDTO)
        {
            TechProcess techProcess = mapper.Map<TechProcess>(techProcessDTO);
            database.TechProcesses.Update(techProcess);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public void Delete(IEnumerable<TechProcessDTO> items)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(IEnumerable<TechProcessDTO> items)
        {
            throw new NotImplementedException();
        }
    }
}
