import { createStore,combineReducers } from 'redux';
import categoryState from './category';
import expenseState from './expense';
const appReducer = combineReducers({categoryState,expenseState});

export default createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());