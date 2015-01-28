/** @jsx React.DOM */

var TimerExample = React.createClass({
    // ctor
    getInitialState: function(){
        return { elapsed: 0 };
    },

    // mount
    componentDidMount: function(){
        this.timer = setInterval(this.tick, 50);
    },

    // unmount
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {
        
        var elapsed = Math.round(this.state.elapsed / 100);

        var seconds = (elapsed / 10).toFixed(1);    

        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
    }
});

React.render(
    <TimerExample start={Date.now()} />,
    document.querySelector('footer .timer')
);


var HistoryLog = React.createClass({
    getInitialState: function(){
        return { log: [window.location.href] };
    },
    componentDidMount: function(){
        window.addEventListener('hashchange', this.hashChange);
    },
    componentWillUnmount: function(){
        window.removeEventListener('hashchange', this.hashChange);
    },
    hashChange: function(e){
        var log = this.state.log;
        log.push(e.newURL);
        this.setState({log: log});
    },
    render: function() {
        return <div>{
            this.state.log.map(function(i){
                return <div> {i} </div>
            })}
        </div>;
    }
});

React.render(
    <HistoryLog />,
    document.querySelector('aside')
);

var MainView = React.createClass({
    getInitialState: function(){
        return { route: window.location.hash };
    },
    componentDidMount: function(){
        window.addEventListener('hashchange', this.hashChange);
    },
    componentWillUnmount: function(){
        window.removeEventListener('hashchange', this.hashChange);
    },
    hashChange: function(){
        this.setState({ route: window.location.hash });
    },
    render: function() {
        if(this.state.route == '#i1'){
            return(<strong> 1 </strong>);
        } else if(this.state.route == '#i2') {
            return(<strong> 2 </strong>);
        }
    }
});

React.render(
    <MainView />,
    document.querySelector('article')
);