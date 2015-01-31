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
            return Clients.Group(group).SendMessage(message);
        }

        public int Join(string group, string pwd)
        {
            //TODO pwd from database
            if (pwd == group)
            {
                Groups.Add(Context.ConnectionId, group);
                return 0;
            }
            else
            {
                return -1;
            }
        }

        public Task Leave(string group)
        {
            return Groups.Remove(Context.ConnectionId, group);
        }
    }
}