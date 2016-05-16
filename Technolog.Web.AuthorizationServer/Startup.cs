using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using IdentityServer3.Core.Configuration;
using System.Security.Cryptography.X509Certificates;
using System.Configuration;

[assembly: OwinStartup(typeof(Technolog.Web.AuthorizationServer.Startup))]

namespace Technolog.Web.AuthorizationServer
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var inMemoryManager = new InMemoryManager();
            var factory = new IdentityServerServiceFactory()
                .UseInMemoryUsers(inMemoryManager.GetUsers())
                .UseInMemoryScopes(inMemoryManager.GetScopes())
                .UseInMemoryClients(inMemoryManager.GetClients());

            var certificate = Convert.FromBase64String(
                ConfigurationManager.AppSettings["SigningCertificate"]);

            var options = new IdentityServerOptions
            {
                SigningCertificate = new X509Certificate2(certificate,
                ConfigurationManager.AppSettings["SigningCertificatePassword"]),
                RequireSsl = false,
                Factory = factory
            };

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            app.UseIdentityServer(options);
        }
    }
}
