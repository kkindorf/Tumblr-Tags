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
            <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <h3 className="navbar-brand">Tumblr Tags
      </h3>
      
    </div>
  </div>
</nav>
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