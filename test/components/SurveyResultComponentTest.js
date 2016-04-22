/* eslint-env node, mocha */
/* global expect, fixture */
/* eslint no-console: 0 */

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import SurveyResultComponent from 'components//SurveyResultComponent';

describe('SurveyResultComponent', () => {
  let component;

  before(() => fixture.setBase('test/fixtures/json'));

  beforeEach(() => {
    const SurveyResultData = fixture.load('SurveyResults.json');
    component = createComponent(SurveyResultComponent, { surveyResultData: SurveyResultData });
  });

  afterEach(() => fixture.cleanup());

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('surveyresult-component');
  });
});
