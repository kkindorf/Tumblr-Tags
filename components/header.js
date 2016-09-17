var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var actions = require('../actions')
var connect = require('react-redux').connect;
var SaveContainer= require('./saveContainer');

var Header = React.createClass({
  
    render: function(){
        return(
            
            <div>
                <div className="page-header">
                <Link to= {'/savedposts'}>
                    <button className="btn btn-default"  role="button">Saved Posts</button>
                </Link>
                    <h1>Tumblr Tags</h1>
                </div>
                
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

var Container = connect()(Header);
module.exports = Container;
module.exports = Header;