import reducers from './reducers';
import middlewares from './middlewares';
import enhancers from './enhancers.js';
import create from './create';

export default () => create(reducers, middlewares, enhancers);
