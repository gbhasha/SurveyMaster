/* eslint  react/jsx-first-prop-new-line:0 */
import baseConfig from './base';

const config = {
  appEnv: 'test',  // don't remove the appEnv property here
};

export default Object.freeze(Object.assign(baseConfig, config));
