/* eslint react/prop-types:0, react/prefer-stateless-function:0 */

import React from 'react';

import QuestionDetailsComponent from './QuestionDetailsComponent';

import 'styles//SurveyResult.scss';

export default class SurveyResultComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const surveyResultDetail = this.props.surveyResultData.survey_result_detail;
    const submittedResponseCount = surveyResultDetail.submitted_response_count;
    const surveyResults = surveyResultDetail.themes.map(theme => {
      return (
        <li key={theme.name}>
          <h3>Theme: {theme.name}</h3>
          <QuestionDetailsComponent
            questions={theme.questions}
            submittedResponseCount={submittedResponseCount}
          />
        </li>
      );
    });

    return (
      <div className="surveyresult-component">
        <h2>{surveyResultDetail.name}</h2>
        <ul className="surveyresult-themes">
            {surveyResults}
        </ul>
      </div>
    );
  }
}

SurveyResultComponent.displayName = 'SurveyResultComponent';

// Uncomment properties you need
SurveyResultComponent.propTypes = {
  SurveyResultData: React.PropTypes.object.isRequired,
};

SurveyResultComponent.defaultProps = {
  SurveyResultData: {},
};

