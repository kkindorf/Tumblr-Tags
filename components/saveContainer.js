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
            <div className="cards-flex">
            <div className="button-space">
                <Link to= {'/'}>
                    <button className="btn btn-default"  role="button">Search For More</button>
                </Link>
            </div>
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
