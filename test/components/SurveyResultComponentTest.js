/* eslint-env node, mocha */
/* global expect, fixture */
/* eslint no-console: 0 */

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';

import SurveyResultComponent from 'components//SurveyResultComponent';

import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('---SurveyResultComponent---', () => {
  let SurveyResultData;

  before(() => fixture.setBase('test/fixtures/json'));

  beforeEach(() => {
    SurveyResultData = fixture.load('SurveyResults.json');
  });

  afterEach(() => fixture.cleanup());


  it('contains spec with an expectation', () => {
    expect(shallow(<SurveyResultComponent surveyResultData={SurveyResultData} />)
      .is('.surveyresult-component')).to.be.true;
  });

  it('contains spec with an expectation', () => {
    expect(mount(<SurveyResultComponent surveyResultData={SurveyResultData} />)
    .find('.surveyresult-component').length).to.eq(1);
  });

  // it('can run an expectation with render', () => {
  //   expect(render(<SurveyResultComponent surveyResultData={SurveyResultData} />)
  //   .find('.surveyresult-component').length).to.eq(1);
  // });
});
