var signalrClient = {
    send: function (msg) {
        $.connection.hub.start().done(function () {
            $.connection.chatHub.server.send(msg);
        });
    },
    subscribe: function (func, callback) {
        $.connection.chatHub.client[func] = callback;
    },
    connect: function () {
        // TODO
    }
}