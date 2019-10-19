


import reducer from './reducer'
import sortReducer from './sortReducer'


import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Reducer: reducer,
    SortReducer: sortReducer
});

export default rootReducer
