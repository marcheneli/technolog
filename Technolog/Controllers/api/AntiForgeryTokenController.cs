using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Helpers;
using System.Web.Http;

namespace Technolog.Web.Controllers.api
{
    public class AntiForgeryTokenController : ApiController
    {
        public HttpResponseMessage Get() {
            string cookieToken, formToken;

            CookieHeaderValue antiForgeryCookie = this.Request.Headers.GetCookies(AntiForgeryConfig.CookieName).FirstOrDefault();
            string oldCookieToken = antiForgeryCookie == null ? null : antiForgeryCookie[AntiForgeryConfig.CookieName].Value;

            AntiForgery.GetTokens(oldCookieToken, out cookieToken, out formToken);

            var response = Request.CreateResponse<string>(HttpStatusCode.OK, formToken);

            if (oldCookieToken == null)
                response.Headers.AddCookies(new CookieHeaderValue[] { new CookieHeaderValue(AntiForgeryConfig.CookieName, cookieToken) });
            else if (cookieToken != null)
                antiForgeryCookie[AntiForgeryConfig.CookieName].Value = cookieToken;

            return response;
        }
    }
}
