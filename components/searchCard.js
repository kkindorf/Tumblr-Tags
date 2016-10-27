var React= require('react');
var actions = require('../actions')
var connect = require('react-redux').connect;
var postedData;
var black = "fa fa-heart pull-right black";
var red = "fa fa-heart pull-right red";
var SearchCard = React.createClass({
    getInitialState: function(){
        return{
            color: black
        }
    },
    saved: function(){
         if (this.state.color === black){
            this.setState({color: red});
        }
        this.props.dispatch(actions.postTumblrData(postedData = {
            postUrl: this.props.postUrl,
            blogName: this.props.blogName,
            src: this.props.src,
            summary: this.props.summary
            
        }))
        
    },
    render: function(){
        return(
            
           <div className="card">
              <p className="card-header">{this.props.blogName}</p>
              <a href={this.props.postUrl}><img className="card-img-top" src={this.props.src} alt="Card image cap"/></a>
              <div className="card-block">
                <p className="card-text">{this.props.summary}<i onClick={this.saved} className={this.state.color} aria-hidden="true" ></i></p>
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

exports.ASearchCard = connect(mapStateToProps)(SearchCard)
exports.SearchCard = SearchCard;

