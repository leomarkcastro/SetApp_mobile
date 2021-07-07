import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

/* 
    Each Reducer would serve different kinds of data sphere for storage
    The planned divisions would be:
        - Favorite verse list
        - Session 
            -- For the last read
        - Notes list *maybe
        - Account data *maybe

*/

import parts_reducer from './parts_reducer.js'
import saveparts_reducer from './saveparts_reducer.js';
//import settings_reducer from './settings_reducer.js';


const rootReducer = combineReducers({
    parts : parts_reducer,
    save : saveparts_reducer,
    //settings: settings_reducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store