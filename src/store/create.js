import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

export default (reducers = {}, middlewares = [], enhancers = []) => {
  return createStore(
    combineReducers(reducers),
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );
};
