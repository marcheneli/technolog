using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO.Tool;
using Technolog.SL.Interfaces;
using Technolog.DAL.Interfaces;
using Technolog.Domain.Entities;
using Technolog.SL.Infrastructure;
using Technolog.Domain.Infrastructure;
using Technolog.Infrastructure.Interfaces;

namespace Technolog.SL.Services
{
    public class ToolService : BaseService, IToolService
    {
        public ToolService(IUnitOfWork database, IMapper mapper)
            :base(database, mapper)
        {

        }

        public void Delete(int id)
        {
            database.Tools.DeleteById(id);

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
            database.Tools.DeleteById(id);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось удалить данный инструмент.", "");
            }
        }

        public ToolDTO Get(int id)
        {
            Tool tool = database.Tools.GetById(id);

            if (tool == null)
                throw new ValidationException("Инструмент не найден", "");
            
            ToolDTO toolDTO = mapper.Map<ToolDTO>(tool);

            return toolDTO;
        }

        public ToolDTO Get(string name)
        {
            Tool tool = database.Tools.GetByName(name);

            if (tool == null)
                throw new ValidationException("Инструмент не найден", "");

            ToolDTO toolDTO = mapper.Map<ToolDTO>(tool);

            return toolDTO;
        }

        public ToolListDTO GetPage(int page, int pageSize, string search)
        {
            PagedResult<Tool> pagedTools = database.Tools.GetPage(search, page, pageSize);
            
            ToolListDTO toolListDTO = new ToolListDTO();

            toolListDTO.ToolAmount = pagedTools.RowCount;

            toolListDTO.Tools = mapper.Map<IEnumerable<ToolDTO>>(pagedTools.Results);

            return toolListDTO;
        }

        public Task<ToolDTO> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ToolListDTO> GetPageAsync(int page, int pageSize, string search)
        {
            throw new NotImplementedException();
        }

        public int Insert(ToolDTO toolDTO)
        {
            Tool tool = mapper.Map<Tool>(toolDTO);
            database.Tools.Add(tool);

            try
            {
                database.Save();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }

            return tool.Id;
        }

        public async Task InsertAsync(ToolDTO toolDTO)
        {
            Tool tool = mapper.Map<Tool>(toolDTO);
            database.Tools.Add(tool);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }
        }

        public void Update(ToolDTO toolDTO)
        {
            Tool tool = mapper.Map<Tool>(toolDTO);
            database.Tools.Update(tool);

            try
            {
                database.Save();
            }
            catch(Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public async Task UpdateAsync(ToolDTO toolDTO)
        {
            Tool tool = mapper.Map<Tool>(toolDTO);
            database.Tools.Update(tool);

            try
            {
                await database.SaveAsync();
            }
            catch (Exception)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }

        public void Delete(IEnumerable<ToolDTO> toolDTOs)
        {
            foreach (ToolDTO toolDTO in toolDTOs) {
                database.Tools.DeleteById(toolDTO.Id);
            }

            database.Save();
        }

        public Task DeleteAsync(IEnumerable<ToolDTO> toolDTOs)
        {
            throw new NotImplementedException();
        }
    }
}
