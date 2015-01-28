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
        var self = this;
        window.onhashchange = function(e){
            var log = self.state.log;
            log.push(e.newURL);
            self.setState({log: log});
        };
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