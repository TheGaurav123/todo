import { createSlice } from '@reduxjs/toolkit'
import { add, update, remove } from './todoReducers'

const initialState = {
    todo: JSON.parse(localStorage.getItem('todos')) || []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: add,
        updateTodo: update,
        removeTodo: remove
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer