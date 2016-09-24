import expect from 'expect'
import * as actions from '../actions'
import thunk from 'redux-thunk'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'

const middleWares = [ thunk ]
const mockStore = configureMockStore(middleWares)
var rootUrl = 'https://serene-ridge-74209.herokuapp.com';

/*describe('async actions', function(){
    afterEach(function(){
        nock.cleanAll();
    })

var postedData = {postedData:{src: 'this is a src',
                            blogName: 'this is a blogName',
                            postUrl: 'this is a postUrl',
                            summary: 'this is a summary'}
                }

it('creates a POST_TUMBLR_DATA_SUCCESS when saving data from Tumblr', function(){
   nock(rootUrl)
   .post('/saved-cards')
   .reply(201, {body:{postedData:{ src: 'this is a src',
                                   blogName: 'this is a blogName',
                                   postUrl: 'this is a postUrl',
                                   summary: 'this is a summary'
                                 }}})
   var expectedActions = [{type: actions.POST_TUMBLR_SUCCESS, body: {saveCard:{src: 'this is a src',
                                                              blogName: 'this is a blogName',
                                                              postUrl: 'this is a postUrl',
                                                              summary: 'this is a summary'
                                                               }}}]
   var store = mockStore({})
   return store.dispatch(actions.postTumblrData({saveCard: {src: 'this is a src',
                            blogName: 'this is a blogName',
                            postUrl: 'this is a postUrl',
                            summary: 'this is a summary'}}))
   .then(function(){
       expect(store.getActions()).toEqual(expectedActions)
   })
})
it('fetches DB data successfully on FETCH_POSTS_FROM_DB_SUCCESS', function(){
    nock(rootUrl)
    .get('/saved-cards')
    .reply({body: })
})
})*/
