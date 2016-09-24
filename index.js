var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header').Header;
var SaveContainer = require('./components/saveContainer').ASaveContainer;
var SearchContainer = require('./components/searchContainer').ASearchContainer;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Provider = require('react-redux').Provider;
var store = require('./store');
var actions = require('./actions')
var connect = require('react-redux').connect;

var routes = (
             <Router history= {hashHistory}>
              <Route path = '/' component={Header}>
                <IndexRoute component={SearchContainer}/>
                <Route path = '/savedposts' component = {SaveContainer}/>
              </Route>
             </Router>
             )
             
document.addEventListener('DOMContentLoaded', function(){

	ReactDOM.render(
		<Provider store = {store}>
			<Router history = {hashHistory}
					routes = {routes} />
		</Provider>, document.getElementById('app'))
});