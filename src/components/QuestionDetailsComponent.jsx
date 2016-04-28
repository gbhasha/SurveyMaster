import React from 'react';

import 'styles//QuestionDetails.scss';

export default class QuestionDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedResponseCount: props.submittedResponseCount,
    };
    this.getAverageRating = this.getAverageRating.bind(this);
  }

  getAverageRating(q) {
    const surveyResponses = q.survey_responses;
    const submittedResponseCount = this.state.submittedResponseCount;
    let responseTotal = 0;
    surveyResponses.map(r => {
      const responseContent = r.response_content !== '' ? parseInt(r.response_content, 10) : 0;
      responseTotal += responseContent;
      return responseTotal;
    });
    return (responseTotal / submittedResponseCount).toFixed(2);
  }

  render() {
    const questions = this.props.questions;
    return (
      <div className="questiondetails-component">
        <table className="questiondetails-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Rating Average</th>
            </tr>
          </thead>
          <tbody>
            {
              questions.map(q => (
                <tr key={q.description}>
                  <td>{q.description}</td>
                  <td>{this.getAverageRating(q)}</td>
                </tr>)
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

QuestionDetailsComponent.propTypes = {
  questions: React.PropTypes.array.isRequired,
  submittedResponseCount: React.PropTypes.number.isRequired,

};

QuestionDetailsComponent.defaultProps = {
  questions: [],
  submittedResponseCount: 0,
};
