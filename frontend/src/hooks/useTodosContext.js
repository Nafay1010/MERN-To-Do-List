import {ToDosContext} from '../context/TodosContext'
import {useContext} from 'react'

export const useTodosContext = () => {
  const context = useContext(ToDosContext)

  if(!context) {
    throw Error('useTodosContext must be used inside a TodosContextProvider')
  }

  return context
}