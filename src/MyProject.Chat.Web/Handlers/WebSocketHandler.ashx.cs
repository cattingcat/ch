using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.WebSockets;

namespace MyProject.Chat.Web.Handlers
{
    public class WebSocketHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            if (context.IsWebSocketRequest)
            {
               
            }

            context.Response.ContentType = "text/plain";
            context.Response.Write("Привет всем!");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}