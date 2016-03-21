// © 2015-2016 Sitecore Corporation A/S. All rights reserved.

using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Sitecore.ContentDelivery;

namespace Sitecore.WebService
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            ContentDeliveryConfig.RegisterRoutes();
            ContentDeliveryConfig.MountDataStores();
        }
    }
}
