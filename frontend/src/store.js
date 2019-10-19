
import { createStore } from 'redux';
import Reducer from './reducers';


export default function configureStore(initialState) {
    return createStore(
        Reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}


