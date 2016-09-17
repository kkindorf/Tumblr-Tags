var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Header = require('../components/header');

describe(' header component', function(){
    it('renders a header component with button and search form', function(){
       var renderer = TestUtils.createRenderer();
       renderer.render(<Header/>);
       var result = renderer.getRenderOutput();
       result.type.should.equal('div');
       var child1 = result.props.children[0];
       var child2 = result.props.children[1];
       var child3 = result.props.children[2];
       child1.type.should.equal('div');
       child1.props.className.should.equal('page-header');
       var Link = child1.props.children[0];
       Link.props.to.should.equal('/savedposts');
       Link.props.children.type.should.equal('button');
       var title = child1.props.children[1];
       title.type.should.equal('h1');
       title.props.children.should.equal('Tumblr Tags');
       child2.type.should.equal('div');
       child2.props.className.should.equal('col-xs-12');
       child2.props.children.type.should.equal('form');
       child3.type.should.equal('div');
       
       
      
    })
})