using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using Technolog.DAL.EF;
using Technolog.Domain.Interfaces;
using Technolog.SL.Interfaces;
using Technolog.SL.Services;

namespace Technolog.Web
{
    public static class NinjectConfig
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
            kernel.Bind<IUnitOfWork>()
             .To<EFUnitOfWork>().WithConstructorArgument("connectionString", "TechnologConnection");

            kernel.Bind<IToolService>()
             .To<ToolService>();
        }
    }
}