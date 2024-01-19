import React, { Component } from 'react';
import { Heading } from '../Heading';
import { IconButton } from '../Buttons/IconButton';
import { MdDelete, MdEdit, MdCheck, MdCheckCircleOutline } from "react-icons/md";
import { connect } from 'react-redux';
import { removeTodo, updateTodo } from '../../features/todo/todoSlice';
import toast from 'react-hot-toast';
import { TODO_STATUS } from '../../constants';

class TodoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      todo: {
        id: props.content.id,
        text: props.content.text,
        status: props.content.status,
      },
    };
  }

  handleRemove = () => {
    this.props.dispatch(removeTodo(this.state.todo.id));
  };

  handleUpdate = (payload) => {
    this.props.dispatch(updateTodo(payload || this.state.todo));
  };

  handleUpdateText = () => {
    const { text } = this.state.todo;

    if (!text) {
      return toast.error("Todo can't be empty !");
    }

    this.handleUpdate();
    this.setState({ isEdit: false });
  };

  handleUpdateStatus = () => {
    const payload = {
      ...this.state.todo,
      status: TODO_STATUS['COMPLETED'],
    };

    this.handleUpdate(payload);
    this.setState({ todo: payload });
  };

  render() {
    return (
      <div className='flex shadow text-2xl items-center justify-between gap-14 p-3 rounded bg-base-300 '>
        {
          this.state.isEdit ?
            (
              <input
                onChange={(e) => this.setState({ ...this.state, todo: { ...this.state.todo, text: e.target.value } })}
                value={this.state.todo.text}
                className='bg-transparent border-b-[1px] outline-none'
              />
            )
            :
            (
              <Heading
                title={this.state.todo.text}
                className={`${this.state.todo.status === TODO_STATUS['COMPLETED'] && 'line-through'}`}
              />
            )
        }
        <div className='flex gap-3'>
          {
            this.state.isEdit ?
              (
                <IconButton
                  icon={MdCheck}
                  onClick={this.handleUpdateText}
                  color={'orange'}
                />
              )
              :
              (
                (this.state.todo.status !== TODO_STATUS['COMPLETED']
                  &&
                  (
                    <IconButton
                      icon={MdEdit}
                      onClick={() => this.setState({ isEdit: true })}
                    />
                  )
                )
              )
          }

          {
            this.state.todo.status !== TODO_STATUS['COMPLETED'] && !this.state.isEdit &&
            (
              <IconButton
                onClick={this.handleUpdateStatus}
                icon={MdCheckCircleOutline}
                color={'greenyellow'}
              />
            )
          }
          
          <IconButton
            onClick={this.handleRemove}
            icon={MdDelete}
            color='pink'
          />
        </div>
      </div>
    );
  }
}

export default connect()(TodoCard);
