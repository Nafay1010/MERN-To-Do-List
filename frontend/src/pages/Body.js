import { useEffect } from 'react'
import {useTodosContext} from '../hooks/useTodosContext'
import TodoComponent from '../components/Todos'
import AddTodo from '../components/AddTodo'
import NoTodo from '../components/NoTodo'

const Body = () => {

    const {Todos, dispatch} = useTodosContext()

    useEffect(()=>{
        const fetchWorkouts = async () => {
        const response = await fetch('/Todo')
        const json = await response.json()
      
        if (response.ok) {
            dispatch({type: 'SET_TODOS', payload: json})
        }
    }
        fetchWorkouts()
    }, [dispatch])

    // console.log(Todos);

  return (
    <div className="home">
        <div className="todos">
            {Todos && Todos.length > 0 ? Todos.map(Todo=>(
                <TodoComponent Todo = {Todo} key={Todo._id}/>
            )): <NoTodo/>}
        </div>
        <AddTodo/>
    </div> 
  )
}

export default Body