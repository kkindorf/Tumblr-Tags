var React = require('react');
var SaveCard = require('./saveCard').ASaveCard;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var actions = require('../actions');
var connect = require('react-redux').connect;
var Link = router.Link;

var SaveContainer = React.createClass({
    getInitialState: function(){
        return{
            hide: "save-cards-flex"
        }
    },
    componentDidMount: function(){
        this.props.dispatch(actions.fetchDbData(this.props.dbData.skip))
    },
    getNext: function(){
        if(this.props.dbData.skip >= this.props.dbData.count - 1){
            return false;
        }
            
            this.props.dispatch(actions.fetchDbData(this.props.dbData.skip + 1))
        
    },
    getPrev: function(){
        if(this.props.dbData.skip  < 1){
            return false;
        }
        this.props.dispatch(actions.fetchDbData(this.props.dbData.skip - 1))
        
        
    },
    deleted: function(){
        this.props.dispatch(actions.deleteDbData(this.props.dbData.savedCards[0]._id))
        if(this.props.dbData.count === 1){
                this.props.dispatch(actions.deleteDbData(this.props.dbData.savedCards[0]._id))
                this.setState({hide: 'display-none'});
        }
        if(this.props.dbData.count > 1 && this.props.dbData.skip >= 1){
            this.props.dispatch(actions.fetchDbData(this.props.dbData.skip - 1))
        }
        if(this.props.dbData.skip === 0 && this.props.dbData.count >= 1){
            this.props.dispatch(actions.fetchDbData(this.props.dbData.skip + 1))
        }
        
        //var newSkip = Math.max(this.props.dbData.skip - 1, 0)
    },
    
      render: function(){
        return(
            <div>
                <div className="text-align-center">
                     <Link to= {'/'}>
                       <button className="btn btn-default"  role="button">Previous Search</button>
                    </Link>
                </div>
                <div className={this.state.hide}>
                    <SaveCard 
                            blogName = {this.props.dbData.savedCards[0].blogName}
                            src = {this.props.dbData.savedCards[0].src}  
                            summary = {this.props.dbData.savedCards[0].summary}
                            postUrl = {this.props.dbData.savedCards[0].postUrl}
                            id = {this.props.dbData.savedCards[0]._id} 
                            onClick = {this.deleted}/>
                </div>  
                <div className ="buttons">
                    <button className="btn btn-default pull-left" onClick={this.getPrev} id = "getPrev" role="button">Previous</button>
                    <button className="btn btn-default pull-right" onClick={this.getNext} id="getNext" role="button">Next</button>
                </div>
            </div>
            
            
        )
    }
})



var mapStateToProps = function(state, props){
    return{
        dbData: state.dbData
    }
}
exports.ASaveContainer = connect(mapStateToProps)(SaveContainer)
exports.SaveContainer = SaveContainer;

/*var Container = connect(mapStateToProps)(SaveContainer)
module.exports = Container;
module.exports = SaveContainer;*/