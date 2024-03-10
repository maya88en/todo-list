import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {

// state Array which hold all TODOS
const [todos, setTodos] = useState([]);

const addTask = task => {
    if (!task.text) {
        return
    }
    const newTodos = [task,...todos];
    setTodos(newTodos);
}

//The single line (const newTodos = [task, ...todos]) is instead of these two below lines
//const oldTask = todos;
//todos.push(task);

  return (
    <div>

        <TodoForm addTask={addTask}></TodoForm>

    </div>
  )
}

