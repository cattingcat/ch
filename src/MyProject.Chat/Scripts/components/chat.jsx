var Chat = React.createClass({
    getInitialState: function(){
        return { 
            messages: ['dgfdfg', 'dfgdfg', 'dfgdfgdfg']
        };
    },
    componentDidMount: function(){
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
            </footer>
        </div>);
    }
});