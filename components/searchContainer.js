var React = require('react');
var SearchCard = require('./searchCard');
var actions = require('../actions');
var connect = require('react-redux').connect;
var tumblrResults;

var SearchContainer = React.createClass({
    
    onSubmit: function(e){
        e.preventDefault();
        var query = this.refs.input.value;
        this.props.dispatch(actions.fetchTumblrData(query))
        tumblrResults = this.props.tumblrDataResponse.map(function(item, id){
            //returns defined outside of loop
            var defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
            return (
              <SearchCard blogName = {item.blog_name}
                            src = {item.photos ? item.photos[0].alt_sizes[1].url: defaultImage }  
                            summary = {item.summary}
                            timeStamp = {item.timestamp}
                            
                                                        />
            )
        })
       
    },
    render: function(){
         console.log('from line 57', this.props.tumblrDataResponse)
           
        return(
            <div>
               
                <div className="col-xs-12">
                    <form onSubmit={this.onSubmit}>
                    <input type="text" className="form-control" ref='input'  placeholder=" Search for gif, Bill Murray, Batman, Smithsonian..."/>
                    </form>
                </div>
                <div>
                
                {tumblrResults}
              </div>
            </div>    
        )
    }
})

var mapStateToProps = function(state, props){
    return{
        tumblrDataResponse: state.tumblrDataResponse
    }
}

var Container = connect(mapStateToProps)(SearchContainer)
module.exports = Container;
