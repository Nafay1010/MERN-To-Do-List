import { createContext, useReducer } from "react";

export const ToDosContext = createContext()

export const TodoReducer = (state, action) =>{
    switch(action.type)
    {
        case 'SET_TODOS':
            return { 
                Todos: action.payload 
            }
        case 'CREATE_TODO':
            return { 
                Todos: [action.payload, ...state.Todos] 
            }
        case 'DELETE_TODOS':
            return { 
                Todos: state.Todos.filter(t => t._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const ToDosContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(TodoReducer, {
        Todos: null
    })

    return (
        <ToDosContext.Provider value={{...state, dispatch}}>
            {children}
        </ToDosContext.Provider>
    )
}