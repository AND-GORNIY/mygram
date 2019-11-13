import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {loginReducer} from '../reducers/loginReducer';

const rootReducer = combineReducers({
  userData: loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
