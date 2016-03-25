using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Ninject;
using System.Reflection;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;

[assembly: OwinStartup(typeof(Technolog.Web.Startup))]

namespace Technolog.Web
{
    public class Startup
    {   
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration httpConfiguration = new HttpConfiguration();

            WebApiConfig.Register(httpConfiguration);
            //app.UseWebApi(httpConfiguration);
            app.UseNinjectMiddleware(() => NinjectConfig.CreateKernel.Value).UseNinjectWebApi(httpConfiguration);
        }
    }
}
