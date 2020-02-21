using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR.Hubs
{
    public class ChatHub:Hub
    {

        public async Task SendMessage(string usernName , string Message)
        {
            await Clients.All.SendAsync("reciveMsg", usernName, Message);
        }
    }
}
