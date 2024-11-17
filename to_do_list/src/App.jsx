import store from './store'
import {useSelector} from 'react-redux'
import {Provider} from 'react-redux'
// import Test from './Test.jsx'
import Todo from './components/Todo.jsx'
function App() {
  return (
    <Provider store={store}>
      {/* <Test /> */}
      <Todo />
      </Provider>
  )
}

export default App
