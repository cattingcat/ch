using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace MyProject.Chat.Web.Hubs
{
    [HubName("chatHub")]
    public class ChatHub : Hub
    {
        public Task Send(dynamic message)
        {
            return Clients.All.SendMessage(message);
        }
    }
}