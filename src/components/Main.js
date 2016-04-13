require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SurveyListComponent from './SurveyListComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      <SurveyListComponent>

      </SurveyListComponent>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
