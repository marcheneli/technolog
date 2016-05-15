using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Ninject;
using System.Reflection;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;
using Technolog.NinjectConfig;

[assembly: OwinStartup(typeof(Technolog.Web.Startup))]

namespace Technolog.Web
{
    public class Startup
    {   
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            app.UseIdentityServerBearerTokenAuthentication(new IdentityServer3.AccessTokenValidation.IdentityServerBearerTokenAuthenticationOptions
            {
                Authority = "http://localhost:63808/"
            });

            HttpConfiguration httpConfiguration = new HttpConfiguration();

            WebApiConfig.Register(httpConfiguration);
            //app.UseWebApi(httpConfiguration);
            app.UseNinjectMiddleware(() => NinjectConfigSetup.CreateKernel.Value).UseNinjectWebApi(httpConfiguration);
        }
    }
}
