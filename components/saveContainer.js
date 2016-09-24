var React = require('react');
var SaveCard = require('./saveCard').ASaveCard;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var actions = require('../actions');
var connect = require('react-redux').connect;
var Link = router.Link;
var dbResults = [];
var itemId = '';
var SaveContainer = React.createClass({
    componentDidMount: function(){
        this.props.dispatch(actions.fetchDbData(this.props.dbData))
    },
    
    render: function(){
        
        dbResults = this.props.dbData.map(function(item, id){
            itemId = item._id;
            //console.log('from line 17 in save container', itemId)
                return (
                    <SaveCard blogName = {item.blogName}
                            src = {item.src}  
                            summary = {item.summary}
                            postUrl = {item.postUrl}
                            id = {itemId} />
                )
     })
        return(
            <div>
                <div className="text-align-center">
                     <Link to= {'/'}>
                       <button className="btn btn-default"  role="button">Previous Search</button>
                    </Link>
                </div>
                <div className="save-cards-flex">
                    {dbResults}
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