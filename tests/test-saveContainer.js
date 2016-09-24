var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var SaveContainer = require('../components/saveContainer').SaveContainer;
var SaveCard = require('../components/saveCard').SaveCard;

describe('saveContainer component', function(){
    it('renders a saveContainer component', function(){
          var results = [<SaveCard />, 
                         <SaveCard  /> ];

       var renderer = TestUtils.createRenderer();
         renderer.render(<SaveContainer dbData = {results} />);
         var result = renderer.getRenderOutput();
         result.type.should.equal('div');
         result.props.children[0].type.should.equal('div');
         result.props.children[0].props.className.should.equal('text-align-center')
         var Link = result.props.children[0].props.children;
         Link.props.to.should.equal('/');
         Link.props.children.type.should.equal('button');
         result.props.children[1].type.should.equal('div');
         result.props.children[1].props.className.should.equal('save-cards-flex');
         var saveCard = result.props.children[1].props.children[0];

    })
})