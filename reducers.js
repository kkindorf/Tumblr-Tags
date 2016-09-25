var actions = require('./actions');

var initialAppState = {
	tumblrDataResponse: [],
	postedData: {},
	dbData: {},
	loading: true
    
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
     if(action.type === actions.POST_TUMBLR_ERROR){
          console.log('from line 27 in reducer', action.error);
          throw new Error('the data from the database could not be posted', action.error)
     }
     if(action.type === actions.FETCH_POSTS_FROM_DB_SUCCESS){
          //console.log('hello?')
          console.log('from line 31 in reducer', action.dbData);
          
          var updatedDbData = Object.assign({}, state, {dbData: action.dbData, loading: false});
          return updatedDbData;
     }
     if(action.type === actions.FETCH_POSTS_FROM_DB_ERROR){
          console.log(action.error);
          throw new Error('the data could not be retrieved from the database', action.error)
     }
     if(action.type === actions.DELETE_CARD_FROM_DB_SUCCESS){
         console.log('card has been deleted')
     }
     
     return state;
}

exports.appReducer = appReducer;
