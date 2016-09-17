var React = require('react');
var SaveCard = require('./saveCard');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var SEARCH = [
    
        {
            id: 0,
            blogName: "movie 8",
            src: "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
            timestamp: "2006",
            summary: "This is a description"
        },
        {
            id: 1,
            blogName: "movie 9",
            src: "https://s-media-cache-ak0.pinimg.com/236x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg",
            timestamp: "2010",
            summary: "Anothe description"
        }
    
]
var SaveContainer = React.createClass({
    
    render: function(){
        
        
        
        return(
            <div>
                <Link to= {'/'}>
                    <button className="btn btn-default"  role="button">Previous Search</button>
                </Link>
              
            </div>    
        )
    }
})
module.exports = SaveContainer;