if(typeof signalrClient === 'undefined') console.log('signalrClient required;');

var Chat = React.createClass({
    getInitialState: function(){
        return {
            messages: [],
        };
    },
    componentDidMount: function(){
        var self = this,
            groupName = self.props.group,
            pwd = self.props.pwd;

        signalrClient
            .connect(function(msg){
                self.state.messages.push(msg);
                self.setState(self.state);
            })
            .done(function(){
                var result = signalrClient.join(groupName, pwd);
            });
    },
    componentWillUnmount: function(){
        var groupName = this.props.group;
        signalrClient.leave(groupName);
    },
    sendSignalr: function(){
        var node = this.getDOMNode();
        var input = node.querySelector('footer > input[name="message"]');
        var msg = {
            text: input.value,
            sender: this.props.userName
        };
        signalrClient.send(this.props.group, msg);
    },
    render: function() {
        return(  
        <div className="chat">
            <article>
                {this.state.messages.map(function(i){
                    return (<div> <strong> {i.sender} </strong>: {i.text} </div>);
                })}
            </article>
            <footer>
                <input type="text" name="message" /> 
                <button onClick={this.sendSignalr} > Send </button>
            </footer>
        </div>);
    }
});