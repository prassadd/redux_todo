import { useSelector,useDispatch } from "react-redux"
import {getData} from './slice/test'
import {fetchData} from './slice/test'
console.log(getData())
const Test = () => {
    const data = useSelector((state) => state)
    const dispatch = useDispatch()
    dispatch(fetchData)
    console.log(data)
    return(
        <h1 onClick={()=>dispatch(fetchData)}>Test</h1>
    )
}

export default Test