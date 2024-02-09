import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
   
    <Auth0Provider
      domain="dev-unex8iol05hgod3v.au.auth0.com"
      clientId="OF4fUHmSdH9BGYC6S8NYXFV3hmIEizzR"
      authorizationParams={{redirect_uri: window.location.origin}}
    >
      <App />
    </Auth0Provider>
    
  //</React.StrictMode>
);


reportWebVitals();
