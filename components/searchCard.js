var React= require('react');
var actions = require('../actions')
var connect = require('react-redux').connect;
var postedData;
var SearchCard = React.createClass({
    saved: function(){
        console.log('from line six searchCard', this.props.src);
        this.props.dispatch(actions.postTumblrData(postedData = {
            src: this.props.src,
            blogName: this.props.blogName,
            summary: this.props.summary,
            timeStamp: this.props.timeStamp
        }))
        
    },
    render: function(){
        return(
            
           <div className="card">
             <img className="card-img-top" src={this.props.src} alt="Card image cap"/>
             <div className="card-block">
               <h4 className="card-title">{this.props.blogName}</h4>
               <p className="card-text">{this.props.summary}</p>
               <p className="card-text"><small className="text-muted">Posted: {this.props.timeStamp}</small></p>
               <button className="btn btn-default" type="button" onClick={this.saved}>Button</button>
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
