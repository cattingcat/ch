var Chat = React.createClass({
    getInitialState: function(){
        return {
            messages: ['test1', '2', '3']
        };
    },
    componentDidMount: function(){
        var self = this;
        signalrClient.subscribe('sendMessage', function(msg){
            self.state.messages.push(msg);
            self.setState(self.state);
        });
    },
    componentWillUnmount: function(){
    },
    send: function(){
        var node = this.getDOMNode();
        var input = node.querySelector('footer > input');
        var msg = input.value;
        this.state.messages.push(msg);

        if(this.props.send) this.props.send(msg);

        this.setState(this.state);
    },
    testSignalr: function(){
        var node = this.getDOMNode();
        var input = node.querySelector('footer > input');
        var msg = input.value;
        signalrClient.send(msg);
    },
    render: function() {
        return(  
        <div className="chat">
            <article>
                {this.state.messages.map(function(i){
                    return (<div> {i} </div>);
                })}
            </article>
            <footer>
                <input type="text" /> 
                <button onClick={this.send} > Send </button>
                <button onClick={this.testSignalr} > Test SignalR </button>
            </footer>
        </div>);
    }
});