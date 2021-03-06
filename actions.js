var fetch = require('isomorphic-fetch');

var FETCH_TUMBLR_SUCCESS = 'FETCH_TUMBLR_SUCCESS';
    var fetchTumblrSuccess = function(tumblrDataResponse){
        return{
            type: FETCH_TUMBLR_SUCCESS,
            tumblrDataResponse: tumblrDataResponse
        }
    }
var FETCH_TUMBLR_ERROR = 'FETCH_TUMBLR_ERROR';
var fetchTumblrError = function(tumblrDataResponse, error){
    return{
        type: FETCH_TUMBLR_ERROR,
        tumblrDataResponse: tumblrDataResponse,
        error: error
    }
}

var POST_TUMBLR_SUCCESS = 'POST_TUMBLR_SUCCESS';
var postTumblrSuccess = function(postedData){
    return{
    type: POST_TUMBLR_SUCCESS,
    postedData: postedData
    }
}
var POST_TUMBLR_ERROR = 'POST_TUMBLR_ERROR';
var postTumblrError = function(postedData, error){
    return {
        type: POST_TUMBLR_ERROR,
        postedData: postedData,
        error: error
    }
}

var FETCH_POSTS_FROM_DB_SUCCESS = 'FETCH_POSTS_FROM_DB_SUCCESS';
var fetchPostsFromDbSuccess = function(dbData){
    return {
        type: FETCH_POSTS_FROM_DB_SUCCESS,
        dbData: dbData
        
    }
}

var FETCH_POSTS_FROM_DB_ERROR = 'FETCH_POSTS_FROM_DB_ERROR';
var fetchPostsFromDbError = function(error){
    return {
        type: FETCH_POSTS_FROM_DB_ERROR,
        error: error
    }
}

var DELETE_CARD_FROM_DB_SUCCESS = 'DELETE_CARD_FROM_DB_SUCCESS';
var deleteCardFromDbSuccess = function(id){
    return {
        type: DELETE_CARD_FROM_DB_SUCCESS,
        id: id
    }
}

var DELETE_CARD_FROM_DB_ERROR = 'DELETE_CARD_FROM_DB_ERROR';
var deleteCardFromDbError = function(error){
    return{
    type: DELETE_CARD_FROM_DB_ERROR,
    error: error
    }
}


var rootUrl = 'https://serene-ridge-74209.herokuapp.com';
var fetchTumblrData = function(query){
    return function(dispatch){
        var url = rootUrl+'/search?'+query;
        return fetch(url)
        .then(function(response){
               if(response.state < 200 || response.status >= 300){
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
           
            return response.json();
        })
        .then(function(tumblrData){
            return dispatch(fetchTumblrSuccess(tumblrData.response));
        })
        .catch(function(error){
            return dispatch(fetchTumblrError(error))
        })
    }
}

var postTumblrData = function(postedData){
    return function(dispatch){
        var url= rootUrl+'/saved-cards';
        fetch(url,{
            method: 'post',
            headers: {'content-type': 'application/json',
                      'X-Requested-With' : 'XMLHttpRequest'
            },
            body: JSON.stringify({postedData})
        })
        .then(function(res){
            return dispatch(postTumblrSuccess(postedData))
        })
        .catch(function(error){
            return dispatch(postTumblrError(postedData, error))
        })
    }
}

var fetchDbData = function(dbData){
    return function(dispatch){
        var url = rootUrl+'/saved-cards';
        return fetch(url)
        .then(function(response){
              if(response.state < 200 || response.status >= 300){
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response.json();
        })
        .then(function(dbData){
            return dispatch(fetchPostsFromDbSuccess(dbData))
        })
        .catch(function(error){
            return dispatch(fetchPostsFromDbError(error))
        })
    }
}

var deleteDbData = function(id){
    return function(dispatch){
        var url = rootUrl+'/saved-cards/'+id;
        fetch(url,{
            method: 'delete',
            headers: {'content-type': 'application/json'
            }
        })
        .then(function(response){
            if(response.state < 200 || response.status >= 300){
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response.json();
        })
        .then(function(id){
            return dispatch(deleteCardFromDbSuccess(id))
        })
        .catch(function(error){
            return dispatch(deleteCardFromDbError(error))
        })
    }
}

exports.deleteDbData = deleteDbData;
exports.DELETE_CARD_FROM_DB_SUCCESS = DELETE_CARD_FROM_DB_SUCCESS;
exports.DELETE_CARD_FROM_DB_ERROR = DELETE_CARD_FROM_DB_ERROR;
exports.deleteCardFromDbSuccess = deleteCardFromDbSuccess;
exports.deleteCardFromDbError = deleteCardFromDbError;
exports.fetchDbData = fetchDbData;
exports.fetchPostsFromDbError = fetchPostsFromDbError;
exports.fetchPostsFromDbSuccess = fetchPostsFromDbSuccess;
exports.FETCH_POSTS_FROM_DB_ERROR = FETCH_POSTS_FROM_DB_ERROR;
exports.FETCH_POSTS_FROM_DB_SUCCESS = FETCH_POSTS_FROM_DB_SUCCESS;
exports.postTumblrData = postTumblrData;
exports.postTumblrSuccess = postTumblrSuccess;
exports.postTumblrError = postTumblrError;
exports.POST_TUMBLR_SUCCESS = POST_TUMBLR_SUCCESS;
exports.POST_TUMBLR_ERROR = POST_TUMBLR_ERROR;
exports.fetchTumblrData = fetchTumblrData;
exports.fetchTumblrError = fetchTumblrError;
exports.fetchTumblrSuccess = fetchTumblrSuccess;
exports.FETCH_TUMBLR_SUCCESS = FETCH_TUMBLR_SUCCESS;
exports.FETCH_TUMBLR_ERROR = FETCH_TUMBLR_ERROR;