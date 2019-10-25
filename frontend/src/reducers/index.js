
import reducer from './reducer'
import sortReducer from './sortReducer'
import SearchReducer from './searchReducer'
import pageReducer from './pageReducer';
import filterReducer from './filterReducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    Reducer: reducer,
    SortReducer: sortReducer,
    SearchReducer: SearchReducer,
    PageReducer: pageReducer,
    FilterReducer: filterReducer
});

export default rootReducer
