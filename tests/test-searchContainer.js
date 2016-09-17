var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SearchContainer = require('../components/searchContainer');

describe('Search Container', function(){
    it('renders a search container component', function(){
         var results = [];
         var renderer = TestUtils.createRenderer();
         renderer.render(<SearchContainer />);
         var result = renderer.getRenderOutput();
         result.type.should.equal('div');
         var searchCard = result.props.children[0];
         searchCard.props.blogName.should.be.a('string');
         searchCard.props.src.should.be.a('string');
         searchCard.props.summary.should.be.a('string');
         searchCard.props.timestamp.should.be.a('string');
    })
})