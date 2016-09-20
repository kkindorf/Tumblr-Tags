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
             <a href={this.props.postUrl}><img className="card-img-top" src={this.props.src} alt="Card image cap"/></a>
             <div className="card-block">
               <h4 className="card-title">{this.props.blogName}<i className="fa fa-trash pull-right" aria-hidden="true" onClick={this.deleted}></i></h4>
               <p className="card-text">{this.props.summary}</p>
               <p className="display-none">{this.props.id}</p>
             </div>
           </div>
           
        );
    }
})


var Container = connect()(SaveCard);
module.exports = Container;
//module.exports = SaveCard;