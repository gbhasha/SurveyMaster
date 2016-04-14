require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react'

import SurveyListComponent from './SurveyListComponent'
import SurveyData from 'json!../data/index.json'

export default class AppComponent extends React.Component {
	
	constructor(props) {
		super(props)
	}

	

  render() {

    return (
      <div className="index">
      	 	<SurveyListComponent data={SurveyData} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
	data: {}
};

AppComponent.propTypes = {};

