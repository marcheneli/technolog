using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.SL.DTO.Tool;
using Technolog.SL.Interfaces;
using Technolog.Domain.Interfaces;
using AutoMapper;
using Technolog.Domain.Entities;
using Technolog.SL.Infrastructure;

namespace Technolog.SL.Services
{
    public class ToolService : BaseService, IToolService
    {
        public ToolService(IUnitOfWork database)
            :base(database)
        {

        }

        public void Create(ToolDTO toolDTO)
        {
            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<ToolDTO, Tool>());
            IMapper mapper = mapperConfig.CreateMapper();

            Tool tool = mapper.Map<Tool>(toolDTO);
            database.Tools.Add(tool);

            try
            {
                database.Save();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось добавить новый инструмент.", "");
            }
        }

        public void Delete(int id)
        {
            database.Tools.DeleteById(id);

            try
            {
                database.Save();
            }
            catch (Exception ex)
            {
                throw new ValidationException("Не удалось удалить данный инструмент.", "");
            }
        }

        public ToolDTO Get(int id)
        {
            Tool tool = database.Tools.GetById(id);

            if (tool == null)
                throw new ValidationException("Инструмент не найден", "");

            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<Tool, ToolDTO>());
            IMapper mapper = mapperConfig.CreateMapper();

            ToolDTO toolDTO = mapper.Map<ToolDTO>(tool);

            return toolDTO;
        }

        public ToolListDTO Get(int page, int pageSize, string search)
        {
            IEnumerable<Tool> tools;

            if (search == null)
                tools = database.Tools.GetAll().Skip(page * pageSize).Take(pageSize).ToList();
            else
            {
                tools = database.Tools.GetAll().Where(t => t.Name.Contains(search)).Skip(page * pageSize).Take(pageSize).ToList();
            }

            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<Tool, ToolDTO>());
            IMapper mapper = mapperConfig.CreateMapper();

            ToolListDTO toolListDTO = new ToolListDTO();

            toolListDTO.ToolAmount = database.Tools.GetAll().Where(t => t.Name.Contains(search == null ? "" : search)).Count();

            toolListDTO.Tools = mapper.Map<IEnumerable<ToolDTO>>(tools);

            return toolListDTO;
        }

        public void Update(ToolDTO toolDTO)
        {
            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => cfg.CreateMap<ToolDTO, Tool>());
            IMapper mapper = mapperConfig.CreateMapper();

            Tool tool = mapper.Map<Tool>(toolDTO);
            database.Tools.Update(tool);

            try
            {
                database.Save();
            }
            catch(Exception ex)
            {
                throw new ValidationException("Не удалось сохранить изменения.", "");
            }
        }
    }
}
