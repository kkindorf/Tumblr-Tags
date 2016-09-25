var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SearchCard = require('../components/searchCard').SearchCard

describe('searchCard component', function(){
   it('renders a search card component', function(){
       var src='url string';
       var blogName = 'blogname';
       var summary = 'this is a summery';
       var timestamp = '2004';
       var renderer = TestUtils.createRenderer();
       renderer.render(<SearchCard src = {src}
                                   blogName = {blogName}
                                   summary = {summary}
                                   timestamp = {timestamp} />);
       var result = renderer.getRenderOutput();
       result.type.should.equal('div');
       result.props.className.should.equal('card');
       var a = result.props.children[0];
       a.type.should.equal('a');
       a.props.children.type.should.equal('img');
       var cardBlock = result.props.children[1];
       cardBlock.type.should.equal('div');
       cardBlock.props.className.should.equal('card-block');
       var h4 = cardBlock.props.children[0];
       h4.props.className.should.equal('card-title');
       h4.props.children.should.have.length(2)
       var p = cardBlock.props.children[1];
       p.type.should.equal('p');
       p.props.className.should.equal('card-text');
       p.props.children.should.equal('this is a summery');
       
   })
})