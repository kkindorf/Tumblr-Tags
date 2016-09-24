var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SaveCard = require('../components/saveCard').SaveCard;

describe('saveCard component', function(){
   it('renders a save card component', function(){
       var src='url string';
       var blogName = 'blogname';
       var summary = 'this is a summery';
       var timestamp = '2003';
       var renderer = TestUtils.createRenderer();
       renderer.render(<SaveCard src = {src}
                                   blogName = {blogName}
                                   summary = {summary}
                                   timestamp = {timestamp} />);
       var result = renderer.getRenderOutput();
       //console.log(result)
   })
})