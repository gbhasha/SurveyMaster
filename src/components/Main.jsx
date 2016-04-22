import React from 'react';

import SurveyListComponent from './SurveyListComponent';
import SurveyResultComponent from './SurveyResultComponent';

import SurveyData from '../data/index.json';
import SurveyResultData1 from '../data/SurveyResults_1.json';
import SurveyResultData2 from '../data/SurveyResults_2.json';

import 'normalize.css/normalize.css';
import 'styles/App.css';

export default class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleSurveyClick = this.handleSurveyClick.bind(this);
    this.state = {
      resultData: SurveyResultData1,
    };
  }

  handleSurveyClick(item) {
    if (item.name === 'Simple Survey') {
      this.setState({ resultData: SurveyResultData1 });
    } else {
      this.setState({ resultData: SurveyResultData2 });
    }
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

