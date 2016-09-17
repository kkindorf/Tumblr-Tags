var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SaveContainer = require('../components/saveContainer');

describe('saveContainer component', function(){
    it('renders a saveContainer component', function(){
          var results = [];
         var renderer = TestUtils.createRenderer();
        renderer.render(<SaveContainer />);
         var result = renderer.getRenderOutput();
       var renderer = TestUtils.createRenderer();
         renderer.render(<SaveContainer />);
         var result = renderer.getRenderOutput();
         result.type.should.equal('div');
         var Link = result.props.children[0];
         Link.props.to.should.equal('/');
         Link.props.children.type.should.equal('button');
         var saveCard = result.props.children[1][0];
         saveCard.props.blogName.should.be.a('string');
         saveCard.props.src.should.be.a('string');
         saveCard.props.summary.should.be.a('string');
         saveCard.props.timestamp.should.be.a('string');
         var saveCard2 = result.props.children[1][1];
         saveCard.props.blogName.should.be.a('string');
         saveCard.props.src.should.be.a('string');
         saveCard.props.summary.should.be.a('string');
         saveCard.props.timestamp.should.be.a('string');
    })
})