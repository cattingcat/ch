if(typeof Chat === 'undefined') console.log('Chat required;');

var ChatLogin = React.createClass({
    getInitialState: function(){
        return null;
    },
    componentDidMount: function(){
    },
    componentWillUnmount: function(){
    },
    login: function(){
        var node = this.getDOMNode(),
            name = node.querySelector('input[name="name"]').value,
            group = node.querySelector('input[name="group"]').value,
            pwd = node.querySelector('input[name="pwd"]').value;

        React.render(
            <Chat group={group} userName={name} pwd={pwd} />,
            node.parentNode
        );
    },
    render: function() {
        return(
        <div className="chat">
            <div className="form">
                <label>
                    <span>Name:</span>
                    <input type="text" name="name" />
                </label>
                <label>
                    <span>Group:</span>
                    <input type="text" name="group" />
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" name="pwd" />
                </label>
                <button onClick={this.login}> Log in </button>
            </div>
        </div>);
    }
});