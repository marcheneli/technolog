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
    public class PartService : BaseService, IPartService
    {
        public PartService(IUnitOfWork database, IMapper mapper)
            :base(database, mapper)
        {

        }

        public void Delete(int id)
        {
            database.Parts.DeleteById(id);

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
            database.Parts.DeleteById(id);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось удалить данный инструмент.", "");
            }
        }

        public PartDTO Get(int id)
        {
            Part part = database.Parts.GetById(id);

            if (part == null)
                throw new ValidationException("Инструмент не найден", "");

            PartDTO partDTO = mapper.Map<PartDTO>(part);

            return partDTO;
        }

        public PartListDTO GetPage(int page, int pageSize, string search)
        {
            PagedResult<Part> pagedParts = database.Parts.GetPage(search, page, pageSize);

            PartListDTO partListDTO = new PartListDTO();

            partListDTO.PartAmount = pagedParts.RowCount;

            partListDTO.Parts = mapper.Map<IEnumerable<PartDTO>>(pagedParts.Results);

            return partListDTO;
        }

        public Task<PartDTO> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<PartListDTO> GetPageAsync(int page, int pageSize, string search)
        {
            throw new NotImplementedException();
        }

        public int Insert(PartDTO partDTO)
        {
            Part part = mapper.Map<Part>(partDTO);
            database.Parts.Add(part);

            try
            {
                database.Save();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }

            return part.Id;
        }

        public async Task InsertAsync(PartDTO partDTO)
        {
            Part part = mapper.Map<Part>(partDTO);
            database.Parts.Add(part);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }
        }

        public void Update(PartDTO partDTO)
        {
            Part part = mapper.Map<Part>(partDTO);
            database.Parts.Update(part);

            try
            {
                database.Save();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public async Task UpdateAsync(PartDTO partDTO)
        {
            Part part = mapper.Map<Part>(partDTO);
            database.Parts.Update(part);

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
