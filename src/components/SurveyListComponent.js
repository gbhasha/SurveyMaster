'use strict';

import React from 'react';

require('styles//SurveyList.scss');

export default class SurveyListComponent extends React.Component {
	// constructor(props) {
 //        super(props)
 //    }
  render() {
  	const listItems = this.props.data.survey_results.map((item) => {
  		return (
	  		<li key={item.name}>
	  			<h3>{item.name}</h3>
	  			<p><strong>Response rate: </strong> {item.response_rate} </p>
	  		</li>
  		)
  	})

    return (
      <div className="surveylist-component">
        This is SurveyListComponent
        <ul>
        	{listItems}
        </ul>
      </div>
    );
  }
}

SurveyListComponent.displayName = 'SurveyListComponent';

SurveyListComponent.propTypes = {
	data: React.PropTypes.object
};
SurveyListComponent.defaultProps = {};



