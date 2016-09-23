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
       child1.type.should.equal('div');
       child1.props.className.should.equal('text-align-center');
       child1.props.children[0].type.should.equal('h2');
       child1.props.children[0].props.children.should.equal('Tumblr Tags')
       child2.type.should.equal('div');

    })
})