import {getTodoList,getErrorState,getLoadingState,todolist,errorState,loadingState,deleteTask,markAsComplete,addTaskToList} from '../slice/todoslice'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
const Todo = () => {
    const [task,setTask] = useState('');
    console.log(task)
    const data = useSelector(todolist)
    const loading = useSelector(loadingState)
    console.log(useSelector((state)=>state))
    const error = useSelector(errorState)
    const dispatch = useDispatch()

    const getUserTAsk = () => {
        dispatch(addTaskToList({task:task}))
        setTask('')
        
    }
    useEffect(()=>{
        dispatch(getLoadingState())
        dispatch(getErrorState())
        dispatch(getTodoList)
    },[])
   if(loading){
        return <h1>loading...please wait</h1>
   }
   if(error){
        return <h1>{error}</h1>
   }
   if(data){
        return(
            <div className=''>
                <div>
                    <input type="text" onChange={(event)=>setTask(event.target.value)} value={task}/>
                    <button onClick={getUserTAsk}>Add Task</button>
                </div>
                <ul>
                    {data.map((element,index) => {
                        return <ToDoList element={element} key={index} dispatch={dispatch}/>
                    })}
                </ul>
            </div>
        )
    }    
}

export default Todo;

const ToDoList = ({element,dispatch}) => {
    const {id,title,completed} = element;
    return (
         <li id={id}>
            <div>
                <p title={title}>{title} - {completed ? 'complete ': 'incomplete '}  
                    <span onClick={()=>dispatch(deleteTask(id))}><MdDelete/></span>
                    {completed ? ' ': <span onClick={()=>dispatch(markAsComplete({id:id}))}><IoMdCheckmarkCircle/></span>}
                </p>
            </div>
        </li>
    )
}