import { set } from "date-fns/esm";
import { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";


const AddTodo = ({props}) => {
    const {dispatch} = useTodosContext()
    const [work, setWork] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    // console.log(work, done);
    const handleSubmit = async (e) => {
    e.preventDefault()
    const done = false
    const todos = {work, done}
    
    const response = await fetch('/Todo', {
      method: 'POST',
      body: JSON.stringify(todos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setWork('')
      setError(null)
      dispatch({type: 'CREATE_TODO', payload: json})
    }
}
    return ( 
        <form className="addtodo" onSubmit={handleSubmit}>
            <input type="text" 
            name="work"
            value={work}
            onChange={e=>{setWork(e.target.value)}}
            className={emptyFields.includes('work') ? 'error' : ''}
            placeholder='Input...'
            />
        {error && <p className="error">{error}</p>}
        </form>
        
     );
}
 
export default AddTodo;