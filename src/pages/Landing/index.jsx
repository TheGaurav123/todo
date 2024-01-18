import React, { useState } from 'react'
import { Heading, Input, PrimaryButton, TodoCard } from '../../components/'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../features/todo/todoSlice'
import { TODO_STATUS } from '../../constants'

const Landing = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo)
    const [input, setInput] = useState({
        text: '',
    })
    const [filter, setFilter] = useState({
        option: TODO_STATUS['ACTIVE']
    })

    const handleAddTodo = (e) => {
        e.preventDefault()
        const { text } = input

        // An extra check for blank input
        if (!text) {
            return toast.error('Please add todo !')
        }

        dispatch(addTodo(text))
        setInput({ ...input, text: '' })
    }

    const handleTabChange = (e) => {
        const tab = e.target.name
        setFilter({ option: tab })
    }

    const filteredRender = () => {
        if (filter.option === 'All') {
            return todos
        }
        const cards = todos.filter((val) => val.status === filter.option)
        return cards
    }

    return (
        <div className={`flex flex-col justify-center items-center gap-y-12 ${todos.length === 0 && 'min-h-screen'}`}>
            <Heading title="Todo" className={'text-4xl mt-4'} />

            <form className='flex flex-col gap-5'>
                <Input
                    value={input.text}
                    label='Add Task'
                    placeholder="Join meet @ 2'o Clock"
                    className={'w-96'}
                    onChange={(e) => setInput({ ...input, text: e.target.value })}
                />
                <PrimaryButton
                    onClick={handleAddTodo}
                    disabled={!input.text}
                    label="Create Task"
                />
            </form>

            {todos.length !== 0 &&
                <div className='flex flex-col gap-10 w-full lg:w-1/2 h-[700px] overflow-y-auto p-4'>
                    <div role="tablist" className="tabs tabs-bordered sticky -top-11">
                        <button name={TODO_STATUS['ACTIVE']} onClick={handleTabChange} role="tab" className={`tab cursor-pointer ${filter.option === TODO_STATUS['ACTIVE'] && 'tab-active'}`}>Active</button>
                        <button name={TODO_STATUS['COMPLETED']} onClick={handleTabChange} role="tab" className={`tab cursor-pointer ${filter.option === TODO_STATUS['COMPLETED'] && 'tab-active'}`}>Completed</button>
                        <button name='All' onClick={handleTabChange} role="tab" className={`tab cursor-pointer ${filter.option !== TODO_STATUS['ACTIVE'] && filter.option !== TODO_STATUS['COMPLETED'] && 'tab-active'}`}> All</button>
                    </div>
                    {
                        filteredRender()?.map((val) => {
                            return (
                                <TodoCard
                                    key={val.id}
                                    content={val}
                                />
                            )
                        })
                    }
                </div>
            }
        </div >
    )
}

export default Landing