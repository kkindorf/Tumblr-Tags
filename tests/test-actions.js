import expect from 'expect';

import * as actions from '../actions';

describe('main app actions', function(){
    it('fetches data from tumblr api successfully', function(){
        expect(actions.fetchTumblrSuccess([])).toEqual({
            type: 'FETCH_TUMBLR_SUCCESS',
            tumblrDataResponse: []
        })
    })
    it('throws an error if error occurs when retrieving tumblr data', function(){
        expect(actions.fetchTumblrError([], 'this is an error')).toEqual({
            type: 'FETCH_TUMBLR_ERROR',
            tumblrDataResponse: [],
            error: 'this is an error'
        })
    })
    it('posts data to database', function(){
        expect(actions.postTumblrSuccess({})).toEqual({
            type: 'POST_TUMBLR_SUCCESS',
            postedData: {}
        })
    })
    it('throws an error if data not posted', function(){
        expect(actions.postTumblrError({}, 'this is an error')).toEqual({
            type: 'POST_TUMBLR_ERROR',
            postedData: {},
            error: 'this is an error'
        })
    })
    it('fetches posts from database', function(){
        expect(actions.fetchPostsFromDbSuccess([])).toEqual({
            
            type: 'FETCH_POSTS_FROM_DB_SUCCESS',
            dbData: []
        })
        
    })
    it('throws an error if db data not retrieved', function(){
        expect(actions.fetchPostsFromDbError('this is an error')).toEqual({
            type: 'FETCH_POSTS_FROM_DB_ERROR',
            error: 'this is an error'
        })
    })
    it('deletes a card successfully', function(){
        expect(actions.deleteCardFromDbSuccess(112233)).toEqual({
            type: 'DELETE_CARD_FROM_DB_SUCCESS',
            id: 112233
        })
    })
    it('throws an error when deleting a card', function(){
        expect(actions.deleteCardFromDbError('this is an error')).toEqual({
            type: 'DELETE_CARD_FROM_DB_ERROR',
            error: 'this is an error'
        })
    })
})