import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

export default function TodoList() {

// state Array which hold all TODOS
const [todos, setTodos] = useState([]);


// Add todo to list
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


// Remove todo from list
const removeTask = id => {
  let updatedTasks = [...todos].filter(task => task.id !== id)
  setTodos(updatedTasks)
}

// Task is completed
const completeTask = id => {
  let updatedTasks = todos.map(todo => {
    if (todo.id === id) {
      todo.iscomplete = true;
    }
    return todo;
  })
  setTodos(updatedTasks)
}


  return <div>
        
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>

    </div>
}

