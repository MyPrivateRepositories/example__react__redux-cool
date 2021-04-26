import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'


// import reducers
import counter_1_reducer from './counter_1_reducer'
import counter_2_reducer from './counter_2_reducer'

const rootReducer = combineReducers({
    counter_1: counter_1_reducer,
    counter_2: counter_2_reducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store