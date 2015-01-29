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

var Item = React.createClass({
    getInitialState: function(){
        return {
            head: 'head',
            aside: 'aside from class',
            article: 'articla from clas'
        };
    },
    componentDidMount: function(){
    },
    componentWillUnmount: function(){
    },
    hideContent : function(){
        var element = this.getDOMNode();
        var content = element.querySelector('section');

        if(content.style.display == 'none'){
            content.style.display ='flex';
        } else {
            content.style.display = 'none';
        }
    },
    render: function() {
        return(
            
            <div className="item">
                <header onClick={this.hideContent}> {this.props.head} </header>
                <section onClick={this.props.handleClick}>
                    <aside> {this.state.aside} </aside>
                    <article> {this.state.article} </article>
                </section>
            </div>
            
            );
    }
});

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
    itemClick: function(e){
        console.log(e);
    },
    render: function() {
        return( 
            <Item head="prop head" handleClick={this.itemClick}/> 
            );
    }
});

React.render(
    <MainView />,
    document.querySelector('article div.main-content')
);