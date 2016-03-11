using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.BLL.DTO.Tool;
using Technolog.BLL.Interfaces;
using Technolog.Domain.Interfaces;
using AutoMapper;
using Technolog.Domain.Entities;

namespace Technolog.BLL.Services
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
            database.Save();
        }

        public void Delete(int id)
        {
            database.Tools.DeleteById(id);
            database.Save();
        }

        public ToolDTO Get(int id)
        {
            Tool tool = database.Tools.GetById(id);

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
            database.Save();
        }
    }
}
