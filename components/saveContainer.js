var React = require('react');
var SaveCard = require('./saveCard').ASaveCard;
var SearchCard = require('./searchCard').ASearchCard;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var actions = require('../actions');
var connect = require('react-redux').connect;
var Link = router.Link;
var results = [];
var itemId = '';
var submitted = false;
var SaveContainer = React.createClass({
    componentDidMount: function(){
        this.props.dispatch(actions.fetchDbData(this.props.dbData))
    },
        onSubmit: function(e){
        submitted = true;
        results = [];
        e.preventDefault();
        var query = this.refs.input.value;
        this.props.dispatch(actions.fetchTumblrData(query))
        this.refs.input.value ='';

    },
    
    render: function(){
        if(!submitted){
            results = this.props.dbData.map(function(item, id){
            itemId = item._id;
                return (
                    <SaveCard key={id}
                              blogName = {item.blogName}
                              src = {item.src}  
                              summary = {item.summary}
                              postUrl = {item.postUrl}
                              id = {itemId} />
                )
     })
        }else{
            submitted = true;
            results = this.props.tumblrDataResponse.map(function(item, id){
            if(!item.photos){
                return;
            }else{
                return (
                    <SearchCard key={id}
                                blogName = {item.blog_name}
                                src = {item.photos[0].original_size.url}  
                                summary = {item.summary}
                                postUrl = {item.post_url} />
                )
            }
            
        })
        }
        return(
            <div>
                {this.props.loadingdb   ?
              	<div className="loader">
					<i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
					<span className="sr-only">Loading</span>
				</div>
          :
                <div>
                    <nav className="navbar navbar-default navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">Tumblr Tags</a>
                            </div>
                            <span className="navbar-text text-muted">
                                <i className="fa fa-home fa-2x" aria-hidden="true"></i> <i className="fa fa-compass fa-2x" aria-hidden="true"></i> <i className="fa fa-envelope fa-2x" aria-hidden="true"></i> <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i> <i className="fa fa-bolt fa-2x" aria-hidden="true"></i> <i className="fa fa-user fa-2x" aria-hidden="true"></i> <i className="fa fa-pencil-square fa-2x" aria-hidden="true"></i>
                            </span>
                            <form className="navbar-form navbar-left" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" ref='input' className="form-control" id="form" placeholder="Search"/>
                                </div>
                            </form>

                        </div>
                    </nav>
                    <div className="cards">
                        <div className="actions">
                            <div className="my-fancy-container">
                                <span><i className="fa fa-font fa-3x" aria-hidden="true"></i></span>
                                <p className="my-text">Text</p>
                            </div>
                             <div className="my-fancy-container">
                                <span className="my-icon"><i className="fa fa-camera-retro fa-3x" aria-hidden="true"></i></span>
                                <p className="my-text">Photo</p>
                            </div>
                            <div className="my-fancy-container">
                                <span><i className="fa fa-quote-right fa-3x" aria-hidden="true"></i></span>
                                <p className="my-text">Quote</p>
                            </div>
                            <div className="my-fancy-container">
                                <span> <i className="fa fa-link fa-3x" aria-hidden="true"></i></span>
                                <p className="my-text">Share</p>
                            </div>
                            <div className="my-fancy-container">
                                <span><i className="fa fa-users fa-3x" aria-hidden="true"></i></span>
                                <p className="my-text">Chat</p>
                            </div>
                            <div className="my-fancy-container">
                                <span><i className="fa fa-headphones fa-3x" aria-hidden="true"></i></span>
                                <p className="my-text">Music</p>
                            </div>
                            <div className="my-fancy-container">
                                <span><i className="fa fa-video-camera fa-3x" aria-hidden="true"></i></span>
                                <p className="my-text">Video</p>
                            </div>
                        </div>
                        {results}
                    </div>
                </div>}
            </div>
        )
    }
})

var mapStateToProps = function(state, props){
    return{
        tumblrDataResponse: state.tumblrDataResponse,
        loadingdb: state.loadingdb,
        loadingTumblr: state.loadingTumblr,
        dbData: state.dbData
    }
}
exports.ASaveContainer = connect(mapStateToProps)(SaveContainer)
exports.SaveContainer = SaveContainer;
