var actions = require('./actions');

var initialAppState = {
	tumblrDataResponse: [],
	postedData: {},
	dbData: [],
	loadingdb: true,
	loadingTumblr: true
    
}

var appReducer = function(state, action){
     state = state || initialAppState;
     if(action.type === actions.FETCH_TUMBLR_SUCCESS){
         var updatedTumblrDataResponse = Object.assign({}, state, {tumblrDataResponse: action.tumblrDataResponse,
                                                                   loadingTumblr: false
              
                                                                    })
         return updatedTumblrDataResponse;
     }
     if(action.type === actions.FETCH_TUMBLR_ERROR){
          throw new Error('the data from tumblr could not be retrieved', action.error)
     }
     if(action.type === actions.POST_TUMBLR_SUCCESS){
          var updatedPostedData = Object.assign({}, state, {postedData: action.postedData})
          return updatedPostedData;
     }
     if(action.type === actions.POST_TUMBLR_ERROR){
          throw new Error('the data from the database could not be posted', action.error)
     }
     if(action.type === actions.FETCH_POSTS_FROM_DB_SUCCESS){
          var updatedDbData = Object.assign({}, state, {dbData: action.dbData, loadingdb: false});
          return updatedDbData;
     }
     if(action.type === actions.FETCH_POSTS_FROM_DB_ERROR){
          throw new Error('the data could not be retrieved from the database', action.error)
     }
     if(action.type === actions.DELETE_CARD_FROM_DB_SUCCESS){
         console.log('card has been deleted')
     }
     
     return state;
}

exports.appReducer = appReducer;
