var signalrClient = {
    send: function (group, msg) {
        $.connection.chatHub.server.send(group, msg);
    },
    subscribe: function (func, callback, done) {
        $.connection.chatHub.client[func] = callback;
        $.connection.hub.start().done(done);
    },
    connect: function (group) {
        $.connection.chatHub.server.join(group);
    }
}