var MainView = React.createClass({
    getInitialState: function(){
        return { 
            index: null,
            data:{
                head: 'head',
                aside: 'aside from class',
                article: 'articla from clas',
                items: [
                    {
                        head: 'head',
                        aside: 'aside from class',
                        article: 'articla from clas',
                    },
                    {
                        head: 'head',
                        aside: 'aside from class',
                        article: 'articla from clas',
                    }
                ]
            }
        };
    },
    componentDidMount: function(){
        this.hashChange();
        window.addEventListener('hashchange', this.hashChange);
    },
    componentWillUnmount: function(){
        window.removeEventListener('hashchange', this.hashChange);
    },
    hashChange: function(){
        var self = this;
        self.state.index = null;
        this.props.routing.some(function(item, index){
            if(window.location.hash.match(item.pattern)){
                self.state.index = index;
                return true;
            }
        });
        this.setState(this.state);
    },
    itemClick: function(e){
        console.log(e);
    },
    addItem: function(){
        var item = {
            head: 'test',
            aside: 'test',
            article: 'test',
        };
        this.state.data.items.push(item);
        this.setState(this.state);
    },
    render: function() {
        if(this.state.index === null) return(<strong> Oups! </strong>);
        var tmp = this.props.routing[this.state.index].component;
        return React.createElement(tmp, { data: this.state.data });
    }
});
