var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var actions = require('../actions')
var connect = require('react-redux').connect;
var SaveContainer= require('./saveContainer');
var SearchContainer = require('./searchContainer')
var Header = React.createClass({
    
    render: function(){
        return(
            <div>
                <div className="text-align-center">
                    <h2>Tumblr Tags</h2><span>Search for images on tumblr by tag. Save them for others to see.</span>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
                    
              
        );
    }
});

exports.Header = connect()(Header)
exports.Header = Header;
