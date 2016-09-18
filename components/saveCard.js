var React= require('react');
var actions = require('../actions')
var connect = require('react-redux').connect;

var SaveCard = React.createClass({
    
    deleted: function(){
        console.log('from line 8 in save card', this.props.id);
        console.log('deleted has been clicked!');
        this.props.dispatch(actions.deleteDbData(this.props.id))
    },
    render: function(){
        return(
            
           <div className="card">
             <img className="card-img-top" src={this.props.src} alt="Card image cap"/>
             <div className="card-block">
               <h4 className="card-title">{this.props.blogName} </h4>
               <p className="card-text">{this.props.summary}</p>
               <p className="card-text"><small className="text-muted">Posted: {this.props.timestamp}</small></p>
               <p className="display-none">{this.props.id}</p>
               
               <button className="btn btn-default" type="button" onClick={this.deleted}>Delete Me!</button>
             </div>
           </div>
           
        );
    }
})


var Container = connect()(SaveCard);
module.exports = Container;
//module.exports = SaveCard;