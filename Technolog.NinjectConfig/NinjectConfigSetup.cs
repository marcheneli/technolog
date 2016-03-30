using AutoMapper;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Technolog.DAL.EF;
using Technolog.Domain.Entities;
using Technolog.DAL.Interfaces;
using Technolog.Infrastructure.Mapper.AM;
using Technolog.SL.DTO.Tool;
using Technolog.SL.Interfaces;
using Technolog.SL.Services;

namespace Technolog.NinjectConfig
{
    public static class NinjectConfigSetup
    {
        public static Lazy<IKernel> CreateKernel = new Lazy<IKernel>(() =>
        {
            var kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());

            RegisterServices(kernel);

            return kernel;
        });

        private static void RegisterServices(KernelBase kernel)
        {
            MapperConfiguration mapperConfig = new MapperConfiguration(cfg => {
                cfg.AddProfile<ToolProfile>();
            });
            IMapper mapper = mapperConfig.CreateMapper();

            kernel.Bind<Technolog.Infrastructure.Interfaces.IMapper>()
             .ToConstant(new AutoMapperAdapter(mapper));

            kernel.Bind<IUnitOfWork>()
             .To<EFUnitOfWork>().WithConstructorArgument("connectionString", "TechnologConnection");

            kernel.Bind<IToolService>()
             .To<ToolService>();
        }
    }
}
