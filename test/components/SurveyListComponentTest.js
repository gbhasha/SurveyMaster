/* eslint-env node, mocha */
/* global expect, fixture */
/* eslint no-console: 0, no-undef: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';

import createComponent from 'helpers/shallowRenderHelper';

import SurveyListComponent from 'components//SurveyListComponent.js';

describe('SurveyListComponent', () => {
  let component;

  before(function () {
    fixture.setBase('test/fixtures/json');
  });

  beforeEach(() => {
    const surveyData = fixture.load('SurveyList.json');
    component = createComponent(SurveyListComponent, { surveyData: surveyData, onSurveyClick: function () {} });

  });

  afterEach(function () {
    fixture.cleanup();
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('surveylist-component');
  });
});
