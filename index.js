var React = require('react');
var ReactDOM = require('react-dom');
var SaveContainer = require('./components/saveContainer').ASaveContainer;
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
              <Route path = '/' component={SaveContainer}>
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