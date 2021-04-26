import {
  useDispatch,
  useSelector,
} from 'react-redux'

import {
  actionsCreator,
} from 'redux-cool'
 
function App() {

  const dispatch = useDispatch()

  const count_1 = useSelector(state => state.counter_1.count)
  const count_2 = useSelector(state => state.counter_2.count)

  const incrementCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.INCREMENT())
  const decrementCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.DECREMENT())
  const addCounter_1 = () => dispatch(actionsCreator.COUNTER_1.COUNT.ADD(10))

  const incrementCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.INCREMENT())
  const decrementCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.DECREMENT())
  const addCounter_2 = () => dispatch(actionsCreator.COUNTER_2.COUNT.ADD(10))

  const clearAll = () => dispatch(actionsCreator.CLEAR())
  const clearOnlyCounter_1 = () => dispatch(actionsCreator.COUNTER_1.CLEAR())
  const clearOnlyCounter_2 = () => dispatch(actionsCreator.COUNTER_2.CLEAR())

  return (
    <div>
        <h1>Redux Cool Example</h1>
        <hr/>
        <div>
          <div>
            <h3>counter1</h3>
            <h1>{count_1}</h1>
            <button onClick={incrementCounter_1}>increment</button>
            <button onClick={decrementCounter_1}>decrement</button>
            <button onClick={addCounter_1}>add 10</button>
          </div>
          <hr/>
          <div>
          <h3>counter2</h3>
            <h1>{count_2}</h1>
            <button onClick={incrementCounter_2}>increment</button>
            <button onClick={decrementCounter_2}>decrement</button>
            <button onClick={addCounter_2}>add 10</button>
          </div>
        </div>

        <hr/>
        <br/>
        <br/>
        <br/>
        <span>
          <button onClick={clearAll}>Clear All State</button>
          <hr/>
          <button onClick={clearOnlyCounter_1}>Clear Only Counter-1 State</button>
          <hr/>
          <button onClick={clearOnlyCounter_2}>Clear Only Counter-2 State</button>
          <hr/>
        </span>
    </div>
  )
}

export default App
