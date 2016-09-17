var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SearchCard = require('../components/searchCard');

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
       //console.log(result)
   })
})