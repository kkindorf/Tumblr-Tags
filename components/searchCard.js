var React= require('react');
var actions = require('../actions')
var connect = require('react-redux').connect;
var postedData;
var black = "fa fa-heart pull-right black";
var red = "fa fa-heart pull-right red";
var SearchCard = React.createClass({
    getInitialState: function(){
        return {
            color: black
        };
    },
    saved: function(){
         if (this.state.color === black){
            this.setState({color: red});
        }
        console.log('from line six searchCard', this.props.src);
        this.props.dispatch(actions.postTumblrData(postedData = {
            postUrl: this.props.postUrl,
            blogName: this.props.blogName,
            src: this.props.src,
            summary: this.props.summary
            
        }))
        
    },
    render: function(){
         if (this.state.color === red){
            this.setState({color: red});
        }
        return(
            
           <div className="card">
             <a href={this.props.postUrl}><img className="card-img-top" src={this.props.src} alt="Card image cap"/></a>
             <div className="card-block">
               <h4 className="card-title">{this.props.blogName}<i className={this.state.color} aria-hidden="true" onClick={this.saved}></i></h4>
               <p className="card-text">{this.props.summary}</p>
               
             </div>
           </div>
           
        );
    }
})

var mapStateToProps = function(state, props){
    return{
        postedData: state.postedData
    }
}

var Container = connect(mapStateToProps)(SearchCard);
module.exports = Container;
//module.exports = SearchCard;
