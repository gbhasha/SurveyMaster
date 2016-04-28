/* eslint-env node, mocha */
/* global expect, fixture */
/* eslint no-console: 0, no-undef: 0, func-names: 0 */

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';

import createComponent from 'helpers/shallowRenderHelper';

import SurveyListComponent from 'components//SurveyListComponent';

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

describe('SurveyListComponent', () => {
  let component;
  let surveyData;
  before(() => fixture.setBase('test/fixtures/json'));

  beforeEach(() => {
    surveyData = fixture.load('SurveyList.json');
    const SurveyListItem = {
      handleClick: () => {},
    };


    let hasClicked = false;
    const click = () => hasClicked = true;

    component = shallow(<SurveyListComponent
      surveyData={surveyData}  onSurveyClick={click} />);
  });

  afterEach(() => {
    fixture.cleanup();
  });

  it('should have its component name as default className', () => {

    expect(component.is('.surveylist-component')).to.be.true;
  });

  it('should handle click on second survey item', () => {
    const onSurveyClick = sinon.spy();

    const comp = mount(<SurveyListComponent
      surveyData={surveyData} onSurveyClick={onSurveyClick} />);

    comp.find('li').at(1).simulate('click');
    expect(onSurveyClick.calledOnce).to.be.true;


  });
});
