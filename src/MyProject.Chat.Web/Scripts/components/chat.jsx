var Chat = React.createClass({
    getInitialState: function(){
        this.props.group = 'mainGroup'; // TODO fix it
        return {
            messages: ['test1', '2', '3'],
        };
    },
    componentDidMount: function(){
        var self = this;
        signalrClient.subscribe('sendMessage',
            function(msg){
                self.state.messages.push(msg);
                self.setState(self.state);
            },
            function(){
                signalrClient.connect(self.props.group);
            }
        );
    },
    componentWillUnmount: function(){
    },
    sendSignalr: function(){
        var node = this.getDOMNode();
        var input = node.querySelector('footer > input');
        var msg = input.value;
        signalrClient.send(this.props.group, msg);
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
                <button onClick={this.sendSignalr} > Send </button>
            </footer>
        </div>);
    }
});