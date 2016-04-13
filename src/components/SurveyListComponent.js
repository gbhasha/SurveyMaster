'use strict';

import React from 'react';

require('styles//SurveyList.scss');

class SurveyListComponent extends React.Component {
  render() {
    return (
      <div className="surveylist-component">
        This is SurveyListComponent
      </div>
    );
  }
}

SurveyListComponent.displayName = 'SurveyListComponent';

// Uncomment properties you need
// SurveyListComponent.propTypes = {};
// SurveyListComponent.defaultProps = {};

export default SurveyListComponent;
