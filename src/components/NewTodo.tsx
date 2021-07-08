import React, { useRef } from 'react';

import './NewTodo.css';

type NewToDoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo List</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
