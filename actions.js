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
        savedTumblrData: postedData,
        error: error
    }
}

var fetchTumblrData = function(query){
    return function(dispatch){
        var url = 'https://crossorigin.me/http://api.tumblr.com/v2/tagged?tag='+query+'&limit=300&api_key=F2iyRm0Ffc73oZncziOzs4SRvswAbAMQG4VS2ErSAHEtSB3JRz';
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
            console.log(tumblrData)
            console.log(tumblrData.response.length)
            return dispatch(fetchTumblrSuccess(tumblrData.response));
        })
        .catch(function(error){
            return dispatch(fetchTumblrError(error))
        })
    }
}

var postTumblrData = function(postedData){
    return function(dispatch){
        var url= '/saved-cards';
        fetch(url,{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({postedData})
        })
        .then(function(res){
            console.log('logging response inside fetch post', res)
            return dispatch(postTumblrSuccess(postedData))
        })
        .catch(function(error){
            console.log('logging error inside fetch post', error)
            return dispatch(postTumblrError(postedData, error))
        })
    }
}
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
