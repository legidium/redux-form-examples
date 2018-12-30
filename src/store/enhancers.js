const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__({maxAge: 20})
  : f => f;

export default [reduxDevTools];
