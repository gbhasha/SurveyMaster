require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react'

import SurveyListComponent from './SurveyListComponent'
import SurveyResultComponent from './SurveyResultComponent'

import SurveyData from 'json!../data/index.json'
import SurveyResultData1 from 'json!../data/SurveyResults_1.json'
import SurveyResultData2 from 'json!../data/SurveyResults_2.json'

export default class AppComponent extends React.Component {
	
	constructor(props) {
		super(props)
		this.handleSurveyClick = this.handleSurveyClick.bind(this)
		this.state= {
			resultData: SurveyResultData1
		}
	}

	handleSurveyClick(e) {
		console.log('A', e)
	}

  render() {
    return (
      <div className="index">
      	 	<SurveyListComponent
      	 		surveyData={SurveyData}
      	 		onSurveyClick={this.handleSurveyClick}
      	 	/>
      	 	<SurveyResultComponent surveyResultData={this.state.resultData} />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

AppComponent.propTypes = {};

