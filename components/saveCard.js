var React= require('react');
var SaveCard = React.createClass({
    deleted: function(){
        console.log("I've been deleted!");
    },
    render: function(){
        return(
            
           <div className="card">
             <img className="card-img-top" src={this.props.src} alt="Card image cap"/>
             <div className="card-block">
               <h4 className="card-title">{this.props.blogName}</h4>
               <p className="card-text">{this.props.summary}</p>
               <p className="card-text"><small className="text-muted">Posted: {this.props.timestamp}</small></p>
               <button className="btn btn-default" type="button" onClick={this.deleted}>Button</button>
             </div>
           </div>
           
        );
    }
})
module.exports = SaveCard;