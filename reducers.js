var actions = require('./actions');

var initialAppState = {
	tumblrDataResponse: [],
	postedData: {}
    
}

var appReducer = function(state, action){
     state = state || initialAppState;
     if(action.type === actions.FETCH_TUMBLR_SUCCESS){
         console.log('from line 11 in reducer', action.tumblrDataResponse)
         var updatedTumblrDataResponse = Object.assign({}, state, {tumblrDataResponse: action.tumblrDataResponse })
         return updatedTumblrDataResponse;
     }
     if(action.type === actions.FETCH_TUMBLR_ERROR){
          console.log('from line 17 in reducer', action.error)
          throw new Error('the data from tumblr could not be retrieved', action.error)
     }
     if(action.type === actions.POST_TUMBLR_SUCCESS){
          console.log('from line 21 in reducer', action.postedData);
          var updatedPostedData = Object.assign({}, state, {postedData: action.postedData})
          return updatedPostedData;
     }
     
     return state;
}

exports.appReducer = appReducer;
