import {reducersCreator} from "redux-cool"

const initial_state = {
    count: 0
}

const reducer_tree = {
    COUNT: {
        INCREMENT: (state, action) => {
            state.count++
        },
        DECREMENT: (state, action) => {
            state.count--
        },
        ADD: (state, action) => {
            const [value] = action.args
            state.count += value
        },
    },
    CLEAR: (state, action) => {
        return initial_state
    }
}

const counter_1_reducer = reducersCreator(
    "COUNTER_1",
    initial_state,
    reducer_tree,
)

export default counter_1_reducer