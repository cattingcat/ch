using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyProject.Chat.ApiControllers
{
    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        [HttpGet, Route]
        public object Test()
        {
            return new { Name = "qwe", Desc = "asd", Tmp = new { a = 5, b = "sdf" } }; 
        }
    }
}
