import expect from 'expect';
var actions = require('../actions');


var appReducer = require('../reducers').appReducer;

describe('app reducer', function(){
    
    it('should return the initial state', function(){
        expect(appReducer(undefined, {})).toEqual({
            tumblrDataResponse: [],
        	postedData: {},
        	loadingdb: true,
        	loadingTumblr: true,
	        dbData: []
        })
   
    })
    it('should fetch tumblr data', function(){
        expect(appReducer({}, {
           type: actions.FETCH_TUMBLR_SUCCESS,
           tumblrDataResponse: []
        })).toEqual({
	        tumblrDataResponse: [],
	        loadingTumblr: false
        })
    })
    it('should post data to the database', function(){
        expect(appReducer({},{
            type: actions.POST_TUMBLR_SUCCESS,
            postedData: {
                src: 'this is a src',
                blogName: 'this is a blogName',
                postUrl: 'this is a postUrl',
                summary: 'this is a summary'
            }
        })).toEqual({
            postedData:{
                src: 'this is a src',
                blogName: 'this is a blogName',
                postUrl: 'this is a postUrl',
                summary: 'this is a summary'
            },

        })
    })
    it('should fetch posts from db success', function(){
        expect(appReducer({},{
            type: actions.FETCH_POSTS_FROM_DB_SUCCESS,
            dbData: [{
                src: 'this is a src',
                blogName: 'this is a blogName',
                postUrl: 'this is a postUrl',
                summary: 'this is a summary'
            },
            {
                src: 'this is a src 2',
                blogName: 'this is a blogName 2',
                postUrl: 'this is a postUrl 2',
                summary: 'this is a summary 2'
            }]
        })).toEqual({
            dbData: [{
                src: 'this is a src',
                blogName: 'this is a blogName',
                postUrl: 'this is a postUrl',
                summary: 'this is a summary'
            },
            {
                src: 'this is a src 2',
                blogName: 'this is a blogName 2',
                postUrl: 'this is a postUrl 2',
                summary: 'this is a summary 2'
            }],
            loadingdb: false
        })
    })
})