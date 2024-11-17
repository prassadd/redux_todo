// import {midd} from './slice/test'
import {configureStore} from '@reduxjs/toolkit'
import testReducer from './slice/test'
import todoReducer from './slice/todoslice'
export const midd = ({dispatch,getState}) => (next) => (action) => {
    console.log(typeof action)
    if(typeof action=='function'){
        action(dispatch,getState);
    }else{
        next(action)
    }
}
const store = configureStore({
    reducer:{
        test:testReducer,
        todo:todoReducer,
    },
    // middleware: () => [midd],
})

export default store