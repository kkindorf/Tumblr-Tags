var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SaveCard = require('../components/saveCard').SaveCard;

describe('saveCard component', function(){
   it('renders a save card component', function(){
       var src='url string';
       var blogName = 'blogname';
       var summary = 'this is a summery';
       var postUrl = 'this is a post url'
       var renderer = TestUtils.createRenderer();
       renderer.render(<SaveCard src = {src}
                                   blogName = {blogName}
                                   summary = {summary}
                                   timestamp = {postUrl} />);
       var result = renderer.getRenderOutput();
        var result = renderer.getRenderOutput();
       result.type.should.equal('div');
       result.props.className.should.equal('save-card card');
       console.log(result.props.children[2]);
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