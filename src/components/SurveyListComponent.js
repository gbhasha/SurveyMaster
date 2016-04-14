'use strict';

import React from 'react';

require('styles//SurveyList.scss');

export default class SurveyListComponent extends React.Component {
	constructor(props) {
        super(props)
        this.handleSurveyClick =this.handleSurveyClick.bind(this)
    }
    handleSurveyClick() {
    	this.props.onSurveyClick()
    }
  render() {
  	const listItems = this.props.surveyData.survey_results.map((item) => {
  		return (
	  		<li key={item.name} onClick={this.handleSurveyClick}>
	  			<h3>{item.name}</h3>
	  			<p><strong>Response rate: </strong> {item.response_rate.toFixed(2)} </p>
	  		</li>
  		)
  	})

    return (
      <div className="surveylist-component">
        <ul>
        	{listItems}
        </ul>
      </div>
    );
  }
}

SurveyListComponent.displayName = 'SurveyListComponent'

SurveyListComponent.propTypes = {
	surveyData: React.PropTypes.object.isRequired,
	onSurveyClick: React.PropTypes.func.isRequired

};
SurveyListComponent.defaultProps = {
	surveyData: {}
};



