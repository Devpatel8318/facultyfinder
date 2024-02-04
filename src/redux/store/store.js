import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers/rootReducer';

const middleware = applyMiddleware(thunk, promiseMiddleware);

const store = createStore(reducers, {}, middleware);

export default store;
