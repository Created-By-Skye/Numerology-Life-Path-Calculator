import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-5bhbqagn.us.auth0.com"
    clientId="FHx2il355okf67HDJ3fIVW9XGX2fUaKW"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);
