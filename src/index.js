import React from 'react';
import ReactDOM from 'react-dom';
import mixpanel from 'mixpanel-browser';

import './index.scss';

import App from './App';

mixpanel.init('c4cc21bf5d9a0b60ab5fa4dcef19e808', { 
    api_host: "https://api-eu.mixpanel.com",
    disable_persistence: true
});
mixpanel.track('Visit');

ReactDOM.render(<App />, document.getElementById('root'));

