var React= require('react');
var actions = require('../actions')
var connect = require('react-redux').connect;

var SaveCard = React.createClass({

    render: function(){
        return(
            <div className= 'save-card card' >
             <a href={this.props.postUrl}><img className="card-img-top" src={this.props.src} alt="Card image cap"/></a>
             <div className="card-block">
               <h4 className="card-title">{this.props.blogName}<i className="fa fa-trash pull-right" aria-hidden="true" onClick={this.props.onClick}></i></h4>
               <p className="card-text">{this.props.summary}</p>
               <p className="display-none">{this.props.id}</p>
             </div>
           </div>
           
        );
    }
})

exports.ASaveCard = connect()(SaveCard)
exports.SaveCard = SaveCard;
/*var Container = connect()(SaveCard);
module.exports = Container;
module.exports = SaveCard;*/