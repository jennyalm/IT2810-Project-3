
import reducer from './reducer'
import sortReducer from './sortReducer'
import SearchReducer from './searchReducer'
import pageReducer from './pageReducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    Reducer: reducer,
    SortReducer: sortReducer,
    SearchReducer: SearchReducer,
    PageReducer: pageReducer
});

export default rootReducer
