var signalrClient = {
    send: function (msg) {
        $.connection.chatHub.server.send(msg);
    },
    subscribe: function (func, callback) {
        $.connection.chatHub.client[func] = callback;
        $.connection.hub.start();
    },
    connect: function () {
        // TODO connect to some signalr-group
    }
}