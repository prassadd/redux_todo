import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// export const fetchData = createAsyncThunk('fetch',async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)
//     }catch(error){

//     }
// })

export const getTodoList = async (dispatch,getState) => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data = response.data.slice(0,10)
        dispatch(getData(data))
    }catch(error){
        dispatch(getErrorState(error.message))
    }
}

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{
        getLoadingState(state,action){
            state.loading = true;
            state.error = false;
        },
        getErrorState(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        getData(state,action){
            state.loading = false;
            state.data = action.payload
        },
        addTaskToList(state,action){
            state.data = [...state.data,{id:state.data.length+1,completed:false,title:action.payload.task,userId:1}]
        },
        deleteTask(state,action){
            state.data = state.data.filter((element,index) => element.id !== action.payload)
        },
        markAsComplete(state,action){
            state.data = state.data.map((element,index) => {
                if(element.id === action.payload.id){
                    return {...element,'completed':true}
                }
                return element;
            })
        }
    }
})

export default todoSlice.reducer
export const {getData,getErrorState,getLoadingState,deleteTask,markAsComplete,addTaskToList} = todoSlice.actions;

export const todolist = (state)=>state.todo.data;
export const loadingState = (state)=>state.todo.loading;
export const errorState = (state)=>state.todo.error;