var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SearchContainer = require('../components/searchContainer');
var SearchCard = require('../components/searchCard');
var results = [<SearchCard />, <SearchCard />]
describe('Search Container', function(){
    it('renders a search container component', function(){
         var renderer = TestUtils.createRenderer();
         renderer.render(<SearchContainer tumblrDataResponse= {results}/>);
         var result = renderer.getRenderOutput();
         result.type.should.equal('div');
         result.props.className.should.equal('search-cards-flex');
         var child1 = result.props.children[0];
         var child2 = result.props.children[1];
         var child3 = result.props.children[2];
         child1.type.displayName.should.equal('Link');
         child2.type.should.equal('div');
         child2.props.className.should.equal('col-xs-12');
         child2.props.children.type.should.equal('form');
         
    })
})