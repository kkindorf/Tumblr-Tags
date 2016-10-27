var React= require('react');
var actions = require('../actions')
var connect = require('react-redux').connect;

var SaveCard = React.createClass({
    getInitialState: function(){
        return {
            hide: 'save-card card'
        };
    },
    deleted: function(){
        if (this.state.hide === 'save-card card'){
            this.setState({hide: 'display-none'});
        }
        this.props.dispatch(actions.deleteDbData(this.props.id))
    },
    render: function(){
        return(
            <div className= {this.state.hide} >
            <p className="card-header">{this.props.blogName}</p>
             <a href={this.props.postUrl}><img className="card-img-top" src={this.props.src} alt="Card image cap"/></a>
             <div className="card-block">
              
               <p className="card-text">{this.props.summary}<i className="fa fa-trash pull-right" aria-hidden="true" onClick={this.deleted}></i></p>
               <p className="display-none">{this.props.id}</p>
             </div>
           </div>
           
        );
    }
})

exports.ASaveCard = connect()(SaveCard)
exports.SaveCard = SaveCard;
