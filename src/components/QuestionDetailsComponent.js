'use strict';

import React from 'react';

require('styles//QuestionDetails.scss');

export default class QuestionDetailsComponent extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		submittedResponseCount: props.submittedResponseCount
  	}
  	this.getAverageRating = this.getAverageRating.bind(this)
  }

  componentWillReceiveProps(nextProps) {
  	this.setState({
  		submittedResponseCount: nextProps.submittedResponseCount
  	})
  }

  getAverageRating(q) {
  		const surveyResponses = q.survey_responses
  		const submittedResponseCount = this.state.submittedResponseCount
  		let responseTotal = 0
  		let avg	= 0
  	
		surveyResponses.map( (response) => {
			let responseContent = response.response_content !="" ? Number.parseInt(response.response_content) : 0;
			responseTotal += responseContent
			
			avg  = (responseTotal / submittedResponseCount)
		})
		return avg.toFixed(2)
  	}

	render() {
	  	const questions = this.props.questions
	    return (
	      	<ul className="questiondetails-component">
				{
					questions.map( q => {
			    		return (
			    			<li key={q.description}>
					    		<p><strong>Q: </strong> {q.description}</p>
					    		<p><strong>Average Response Rating: </strong>{this.getAverageRating(q)}</p>

					    	</li>
		    			)
			    	})
				}
	      	</ul>
	    )
	}
}

QuestionDetailsComponent.propTypes = {
	questions: React.PropTypes.array.isRequired,
	submittedResponseCount: React.PropTypes.number.isRequired

};
QuestionDetailsComponent.defaultProps = {
	questions: []
};