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
        public Task Send(string group, dynamic message)
        {
            // TODO fix
            return Clients.Group(group).SendMessage(Context.ConnectionId.Substring(0, 5) + ": "+ message);
        }

        public Task Join(string group)
        {
            return Groups.Add(Context.ConnectionId, group);
        }

        public Task Leave(string group)
        {
            return Groups.Remove(Context.ConnectionId, group);
        }
    }
}