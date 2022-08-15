import AddTodo from '../components/AddTodo'
import {useState} from 'react'
import { useTodosContext } from '../hooks/useTodosContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const Todos = ({Todo}) => {
    const [checked, setChecked] = useState(false);
    const {dispatch} = useTodosContext()
    const handleCheck = ()=>{
    setChecked(prevcheck => (!prevcheck));

}
    const handleClick = async ()=>{
        const response = await fetch('/Todo/'+Todo._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'DELETE_TODOS', payload: json})
        }
    }

    // console.log(checked);
    return (
        <div className="todosbody">    
            <div className="todo">
                <h2 className={checked ? 'done' : ''}> 
                    <span className='checkbox'><input type="checkbox" className= 'checkbox' name='checked' value={checked} onChange={handleCheck}/></span>
                    {Todo.work}
                    <span className='trash'> <span className="material-symbols-outlined" onClick={handleClick}>delete</span></span>
                </h2>
                <p>Changes made {formatDistanceToNow(new Date(Todo.createdAt), {addSuffix: true})}</p>
            </div>
        </div>

     );
}
 
export default Todos;