import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const a  = store => next => action => {
    console.log('Dispatching action:', action);
    return next(action);
}

// const f = async () => {
//     try{
//         const data = await axios.get('https://jsonplaceholder.typicode.com/users');
       
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// f()


// export const fetchData = createAsyncThunk('fetch',async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)
//     }catch(error){

//     }
// })
export const fetchData = async (dispatch) => {
    console.log(dispatch)
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // const data = await response.json()
        console.log(response)
        dispatch(getData(data))
    }catch(error){

    }
}
const testSlice = createSlice({
    name:'test',
    initialState:{
        data:[],
        loading:false
    },
    reducers:{
        getData(state,action){
            state.data = action.payload
            console.log(action)
        }
    }
})

export default testSlice.reducer
export const {getData} = testSlice.actions;