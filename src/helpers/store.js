import {createStore, combineReducers} from 'redux';
import repoListReducer from '../reducers/repoListReducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({repoList: repoListReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
