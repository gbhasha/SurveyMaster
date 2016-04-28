/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import QuestionDetailsComponent from 'components//QuestionDetailsComponent';

describe('QuestionDetailsComponent', () => {
  let component;
  let reactComponent;
  let exampleQuestions = [];
  const submittedResponseCount = 5;
  before(() => {
    exampleQuestions = [
      {
        description: 'I like the kind of work I do.',
        question_type: 'ratingquestion',
        survey_responses: [
          {
            id: 1,
            question_id: 1,
            respondent_id: 1,
            response_content: '5',
          },
          {
            id: 6,
            question_id: 1,
            respondent_id: 2,
            response_content: '4',
          },
          {
            id: 11,
            question_id: 1,
            respondent_id: 3,
            response_content: '5',
          },
          {
            id: 16,
            question_id: 1,
            respondent_id: 4,
            response_content: '5',
          },
          {
            id: 21,
            question_id: 1,
            respondent_id: 5,
            response_content: '4',
          },
          {
            id: 26,
            question_id: 1,
            respondent_id: 6,
            response_content: '',
          },
        ],
      },
    ];
  });

  beforeEach(() => {
    reactComponent = TestUtils.renderIntoDocument(
      <QuestionDetailsComponent
        questions={exampleQuestions}
        submittedResponseCount={submittedResponseCount}
      />);
  });

  it('should have its component name as default className', () => {
    const comp = TestUtils.findRenderedDOMComponentWithClass(reactComponent, 'questiondetails-component');
    const isDOMComponent = TestUtils.isDOMComponent(comp);
    expect(isDOMComponent).to.be.true;
  });

  it('should have one question rendrered into the table', () => {
    const tbody = TestUtils.scryRenderedDOMComponentsWithTag(reactComponent, 'tbody');
    expect(tbody.length).to.eq(1);
  });

  it('should display average rating of the first question as 4.60 ', () => {
    const td = TestUtils.scryRenderedDOMComponentsWithTag(reactComponent, 'td');
    const avgRating = td[1].textContent;
    expect(avgRating).to.equal('4.60');
  });
});
