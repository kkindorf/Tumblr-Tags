var React = require('react');
var SaveCard = require('./saveCard');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var actions = require('../actions');
var connect = require('react-redux').connect;
var Link = router.Link;
var dbResults = [];
var itemId = '';
var SaveContainer = React.createClass({
    render: function(){
        this.props.dispatch(actions.fetchDbData(this.props.dbData))
        dbResults = this.props.dbData.map(function(item, id){
            itemId = item._id;
            //console.log('from line 17 in save container', itemId)
                return (
                    <SaveCard blogName = {item.blogName}
                            src = {item.src}  
                            summary = {item.summary}
                            timeStamp = {item.timeStamp}
                            id = {itemId} />
                )
     })
        return(
            <div>
                <Link to= {'/'}>
                    <button className="btn btn-default"  role="button">Previous Search</button>
                </Link>
                
              {dbResults}
            </div>    
        )
    }
})

var mapStateToProps = function(state, props){
    return{
        dbData: state.dbData
    }
}
var Container = connect(mapStateToProps)(SaveContainer)
module.exports = Container;
