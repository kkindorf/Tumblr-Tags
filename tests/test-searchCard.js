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
       var result = renderer.getRenderOutput();
        var result = renderer.getRenderOutput();
       result.type.should.equal('div');
       result.props.className.should.equal('card');
       var p = result.props.children[0];
       p.type.should.equal('p');
       var a = result.props.children[1];
       a.type.should.equal('a');
       a.props.children.type.should.equal('img');
       var div = result.props.children[2];
       div.type.should.equal('div');
       div.props.className.should.equal('card-block');
       var cardBLockP= div.props.children[0];
       
   })
})