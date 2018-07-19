import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This file simply renders the application.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
