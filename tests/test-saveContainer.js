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
         result.props.children.type.should.equal('div');
         var div = result.props.children;
         var nav = div.props.children[0];
         nav.type.should.equal('nav');
         nav.props.className.should.equal('navbar navbar-default navbar-inverse');
         nav.props.children.type.should.equal('div');
         var cards = div.props.children[1];
         cards.type.should.equal('div');
         cards.props.className.should.equal('cards');

    })
})