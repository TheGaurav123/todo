import { nanoid } from '@reduxjs/toolkit'
import { TODO_STATUS } from '../../constants'

// Inboundary function
const addPayloadToLocalStorage = (state) => {
    localStorage.setItem('todos', JSON.stringify(state.todo))
}

const add = (state, action) => {
    const payload = { id: nanoid(), text: action.payload, status: TODO_STATUS['ACTIVE'] }
    state.todo.push(payload)
    addPayloadToLocalStorage(state)
}

const remove = (state, action) => {
    const filteredTodo = state.todo.filter(val => val?.id !== action.payload)
    state.todo = filteredTodo
    addPayloadToLocalStorage(state)
}

const update = (state, action) => {
    const todos = state.todo.filter(val => val.id !== action.payload.id)
    const updatedTodo = [...todos, action.payload]
    state.todo = updatedTodo
    addPayloadToLocalStorage(state)
}

export {
    add,
    remove,
    update
}