# LetsGrowMore Internship

# Task 1

# Live Link for Project: 

https://todo-list-eight-orcin.vercel.app/


## The below are some notes and extentions added :

## Start
create a todo-list repository on GitHub and then open on your VS code by Clone Repository, choose Github clone, search for repo name and choose todo-list.

## On Terminal
npx create-react-app .

npm start

Open Localhost300 to see React is running

(note: to stop: Ctrl + C)
(note: Don't forget the dot after npx create-react-app . because this is the name of the folder for your react application)

## App.js 
Open App.js file
Delete header element
save
check localhost again
Now you see a blank page

In App.js file,
rename "App" to "Todo-list-container"
Now Todo-list will be a component
so write then: <TodoList></TodoList>

## Create A New Folder
Then create a folder under src called "Components"
Inside folder "Components", create a file called 
"TodoList.js"

## Go back to App.js
Delete import logo from './logo.svg';
Delete logo.svg from files
Delete setupTests.js
add import TodoList from './Components/TodoList'

## create another two files under Components
Todo.js, TodoForm.js

Inside App.js; change the line <TodoList></TodoList>
into <TodoList />

## install the React snippets extension in VSCode
Inside TodoForm.js, write rfc which means "creating a functional component"
If it is not working, then install the React snippets extension in VSCode.
(Note: I found this using: 
https://stackoverflow.com/questions/68653611/rafce-react-js-shortcut-not-working-in-vscode)

## In TodoForm.js
rfc: 

import React from 'react'

export default function TodoForm() {

return <div></div>;
}


"Then we need to take the input with the help of the input element
to create a state, we need to import a state from the react

write import React, {useState} from 'react'
then declare the state inside the function by the following : "

### Download the extention: ES7+ React/Redux/React-Native snippets

Now you can write inside the function useState, pick the next opiton which is useStateSnippet

It will turn into this:

const [first, setfirst] = useState(second)

change it into: 

const [input, setInput] = useState('');

This input will update the state
If user input something in the input box, this will keep it in that state

change return <div></div>;
into return <form></form>;

Then write input


### Emmet

To see input options, do the following steps : 
(as advised by https://blog.logrocket.com/type-html-faster-react-emmet-vs-code/#html-react)

From the User Settings page, search for Emmet. Then, scroll down to Emmet: Include Languages and click on add item to include:

 item: javascript value: javascriptreact
 item: typescript value: typescriptreact

This way when you type input in VScode, it will give you options to choose input:text

<input type="text" name="" id="" />

change it into: 

<input type="text" placeholder='Add a todo' value={input} name="" id="" />

write comment //state above const line

right click and choose formate document to look better

edit input

name="text"
delete id as we have one input element

add button and choose from dropdown button submit

<button type="submit"></button>

edit it to be:

<button type="submit" onClick={handleSubmit} className='todo-btn'>ADD TODO</button>

Then add the function handleSubmit below const input:


    const handleSubmit = (e) => {

        e.proventDefault();
    }

note: (e) means event

## How arrows were drawn: 
### Install Fira Code
This is was advised by:
https://stackoverflow.com/questions/59617766/what-is-the-vscode-extension-theme-symbolset-used-to-display-formatted-actually

https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions

https://www.dhairyashah.dev/posts/how-to-install-fira-code-font-in-visual-studio-code/

https://chsamii.medium.com/fira-code-monospaced-font-with-programming-ligatures-1cfcc829d692

https://stackoverflow.com/questions/59329034/operator-in-javascript-code-change-to-three-horizontal-lines

### Steps to install Fira Code from above links:

1. Install the fonts

Go to https://github.com/tonsky/FiraCode and download the fonts, after you’ve downloaded, In the ttf folder, double-click each font file, click “Install font”; to install all at once, select all files, right-click, and choose “Install”

2. Configuring Visual studio code

Go to VS Code
Click Ctrl + ,
This will open settings in VS Code

To enable FiraCode in the settings editor, under “Commonly Used”, expand the “Text Editor” settings and then click on “Font”. In the “Font Family” input box type Fira Code, replacing any content.

Then go to settings.json: (the icon is in the top right of settings file)
add these two lines:
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,


### You need to restart VS Code after installing Fira Code
Close all open files and tabs in VSCode. Click on the menu options at the top of the window: File > Exit. Wait for the VSCode window to close completely. Once the window is fully closed, you can reopen VSCode by clicking on the VSCode icon on your desktop or by searching for it in your 


## In TodoList.js File 

Go to TodoList.js to declare something:

type rfc and choose the second rfc to get this: 

import React from 'react'

export default function TodoList() {
  return (
    <div>TodoList</div>
  )
}

then declare state array which hold all TODOS

write useState and turn it into:

const [todos, setTodos] = useState([])


Then it will look like this:

import React from 'react'
import { useState } from 'react'

export default function TodoList() {

// state Array which hold all TODOS

const [todos, setTodos] = useState([])


  return (
    <div>TodoList</div>
  )
}


note: 
const [todos, setTodos] = useState([])

This will be holding all our tasks

This will be an array which will be holding all our tasks 

And now here we need one add task function 

because we are getting data from form and we need to add in this array

so here we will create our add task function and in that this will be a data coming from the form

we will get we will get one text we will get one id and we will also get one thing which is the is the task completed or not so we will get three values but the mandatory value will be tasked so if there is no task then we can't hire anything so we will write this so this will check if the coming data consists of task or not and if the task is not coming then it will not add it 

const addTask = task => {
    if (!task.text) {
        return
    }
}

Now what we need to do we need to add new to we can add like this like we are getting the data which is in form of task and when we are just destructing the to-do's array here like this

How does it look in a fold pattern :
first take the data which will be polled tasks and we will take the all data from the to-do's and now we will do tools dot push and in that we will push our task and then set our 

this single line is equal to these two lines 

//const newTodos = [task,...todos];

    const oldTask = todos;
    todos.push(task);

so we delete these two lines and put the single line instead (uncomment)

so we will use the new method to use to do and now what we will do we will set to do as new todos:

const newTodos = [task,...todos];
setTodos(newTodos);

so this will update our state

Final look:

// state Array which hold all TODOS
const [todos, setTodos] = useState([]);

const addTask = task => {
    if (!task.text) {
        return
    }
    const newTodos = [task,...todos];
    setTodos(newTodos);
}


Now, we will pass this function so we will just add the element here

so we will get the do form because we need the add to do method in the do form :

  return (
    <div>

        <TodoForm></TodoForm>

    </div>
  )

We need to import the todo form from todoform :

import TodoForm from './TodoForm' 

And in this to-do form we need to pass the task method as a props :

  return (
    <div>

        <TodoForm addTask={addTask}></TodoForm>

    </div>
  )

Now we will be getting this method here in the task form (Go back to Todoform.js)

we need to call that method first we need to take the props from :

export default function TodoForm(props) {

and here props dot add a task : 

    const handleSubmit = (e) => {

        e.proventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        })
        setInput('')
    }

We called this method and this method took an id 
the id can be okay and we did a random function that can be math dot slower and this is just
generating a random number because id must be unique

so we need to pass one text that will be our task which will be be getting from input

and we need to also pass one boolean operator that will be east as complete or not

we need to give it as false question

and then we need to set our input back to empty string



and one more thing we need to do we need to handle the change also and see if someone is typing constantly in the input that changes should be reflected here or just the first letter or the first word should get updated we are doing same thing this we are updating the state 


and this handle change event will be on change of input

<input type="text" placeholder='Add a todo' onChange={handleChange}  value={input} name="text" />


we will add the class name to the input also what we can do we can use 

okay that is good enough to go
this is our to-do form now let's see how our application is looking like

 <input type="text" placeholder='Add a todo' onChange={handleChange} className="todo-input" value={input} name="text" />


when running npm start i had two errors:
error 1 Components is different from components, right click on folder name and change to Components and click yes on the pop up message

error 2 Module not found: Error: Package path ./cjs/react.development is not exported from package C:\Users\maya8\todo-list\todo-list\node_modules\react (see exports field in C:\Users\maya8\todo-list\todo-list\node_modules\react\package.json)
ERROR in ./src/Components/TodoList.js 6:0-55

i tried: 

npm install --save-dev @babel/plugin-proposal-private-property-in-object

then : run `npm audit fix` to fix them, or `npm audit` for details

npm audit fix

the above didn't solve the issue

And i tried:
npm install --save-dev @babel/plugin-proposal-private-property-in-object--save-dev

npm audit fix --force

still didn't work

The problem was solved by very simple way as below: 

I just had to make sure that the below was written correctly:
import { useState } from 'react'

Now i can see todo in localhost
write any word in todo list, no error, but it doesn't store yet because there are still steps to complete 


Now we need to create a to-do list component in this single to-do we need to render this

we will create a to-do component

Go to todo.js file

write rfc and choose second one, this will show:

import React from 'react'

export default function Todo() {
  return (
    <div>Todo</div>
  )
}

First, go back again to TodoList.js to add some functions

//Add todo to List
// Remove todo from List
// Task is completed


Under Remove todo from List

note to write not equal to 
use: !== 


// Add todo to list
const addTask = task => {
    if (!task.text) {
        return
    }
    const newTodos = [task,...todos];
    setTodos(newTodos);
}

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


  return (
    <div>
        
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>

    </div>
  )

## React Icons

Go back to todo.js

"let's start with our icon part so we need two icons one for the complete and one for the it's complete in the sense tick mark and the cross mark so we will import the marks from here, you can get these names;  close circle line from react icons and we need from react icons

we need these two icons and we will be using them.

this is one icon and the other one was our

when anyone clicks on this icon: 
we need to run one function on click
that function will call our complete task function
we need to provide the completeTask todo.id here
when anyone calls this function on click
we need to call one arrow function and in this function we need to call remove task function here also we need to provide id

now we will do the to do task is completed and in this view we need to add the class name

so our class name will be dynamic means if true todo is complete is true 
then we will add one extra class that will be complete and the normal class will be task view or if it is not complete means if to do dot is complete is false then we will just add the class which is task 
now we need to pass a key value because in a in map every element should have an unique key value that's why we are passing index here and here we we also need to pass the key as task dot id because if someone is clicking this we need to get the id from there"



To find react icons, go to React icons.github.io/react-icons/

write in Vs code:

npm i react-icons

Error: moderate severity vulnerabilities
To address all issues, run npm audit fix --force
Run 'npm audit' for details

ignore this error

go to todo.js file:

write below lines:

import { RiCloseCircleLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'

  export default function Todo({todos, completeTask, removeTask }) {
  return todos.map ((todo, index) => (
    <div className= {todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
       <div className="todo-text">{todo.text}</div> 
       <div className="icons" key={todo.id}>
        <TiTick className= {todo.isComplete ? 'hide' : 'tick'} onClick={() => {completeTask(todo.id)}}></TiTick>
        <RiCloseCircleLine className='cross' onClick={() =>{ removeTask(todo.id) }}></RiCloseCircleLine>
       </div>
    </div>

  ))
}


run npt start:

errors:

go to edit Todo.js

  Line 47:10:  'Todo' is not defined  react/jsx-no-undef

Search for the keywords to learn more about each error.

webpack compiled with 1 error


I correctly edited this line: <Todo></Todo> in the TodoList.js


run npm start
webpack compiled successfully
but no change to the todo list

in the video he had two errors so he hand to change two lines in the todo.js: 
import { RiCloseCircleLine } from 'react'
import { TiTick } from 'react-icons'

into 

import { RiCloseCircleLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti' 


Then he changed the curly brackets into below lines to rounded brackets:

  return todos.map((todo,index)=> (
    <div className= {todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
       <div className="todo-text">{todo.text}</div> 
       <div className="icons" key={todo.id}>
        <TiTick onClick={() => {completeTask(todo.id)}}></TiTick>
        <RiCloseCircleLine onClick={() =>{ removeTask(todo.id) }}></RiCloseCircleLine>
       </div>
    </div>

  ))


when he run npm start, he was able to see task 1 but I didin't 

<Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>

I made sure about below lines:
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'

run npm start

it worked !

I can add a task inside todo list and see the task and the icon  

and also tried remove task; click on x icon, the task is deleted. 

Now, back to todo.js file

let's add a class:
we added two class tick and cross below :

<TiTick className='tick' onClick={() => {completeTask(todo.id)}}></TiTick>
        <RiCloseCircleLine className='cross' onClick={() =>{ removeTask(todo.id) }}></RiCloseCircleLine>

Now, go to TodoForm.js
Add class todo-form as below: 

return (
    
    <form className="todo-form">

        <input type="text" placeholder='Add a todo' onChange={handleChange} className="todo-input" value={input} name="text" />

        <button type="submit" onClick={handleSubmit} className='todo-btn'>ADD TODO</button>

    </form>
    );

Notice: I didn't have brackets after return so i fixed it and added them now.


He mentioned that in App.js file, we already have the className Todo-list-container

## CSS Styling
Now, go to App.css and delete all old :

Delete all this: 

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

Start updating now: 
(note: now React part is over and we are just adding some styling)

start from class Todo-list-container then todo-form

.Todo-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  border: 1px solid black;
}

.todo-form {
  border: 1px solid black;
}

Now we add in the body so go to index.css

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

go back to App.css

.Todo-list-container {
  margin: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80rem;
  border: 1px solid black;
  min-height: 50rem;
  background-color: skyblue;
  border-radius: 1rem;
}

.todo-form {
  display: flex;
  width: 100%;
  margin-top: 3rem;
  font-size: 2rem;
  gap: 2rem;
}

.todo-form input {
  border: 1px solid black;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
}

.todo-form button {
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem; 
  cursor: pointer;
  font-weight: 600;
  font-size: 2.5rem;
}

.todo-form button:hover{
  background-color: black;
  color: white;
  font-weight: 600;
}

.task-div {
  background-color: aliceblue;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  box-shadow: 0.5rem 0.5rem 1rem hsla(0, 0%, 0%, 0.26);
  border-radius: 1rem;
}

.task-text{
  font-size: 2.5rem;
}

.icons{
  display: flex;
  gap: 3rem;
  font-size: 2.5rem;
  cursor: pointer;
}

## */ class complete is not working with me */
.complete {
  text-decoration: line-through;
  opacity:0.5;
  background-color: greenyellow;
}

.hide {
  display: none;
}


go to Todo.js and edit TiTick to the following:
<TiTick className= {todo.isComplete ? 'hide' : 'tick'} onClick={() => {completeTask(todo.id)}}></TiTick>

## Note: the complete button is not working with me so consequently the complete and hide classes are not showing

## index.html 

Then go to index.html and change title from :
<title>React App</title>
to :
<title>TODO LIST</title>

and edit <meta
      name="description"
      content="Web site created using create-react-app"
    />

to <meta
      name="description"
      content="Web site created for todo list"
    />

## Terminal 
Then go to terminal

npm run build

This is the result: 

> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  48.03 kB  build\static\js\main.01bbbf11.js
  1.78 kB   build\static\js\453.81f383cb.chunk.js
  505 B     build\static\css\main.3d1faa75.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

## Commit changes
Go to github and make sure changes are commited

## Deployment to Vercel or Netlify
Then go vercel.com (A platmform to deploy your react application)

If it is your first time, just login with your github profile 
(note you need to signUp first on vercel by just entering your name)

click on install Github to link to import from

In vercel.com after login :
click on create new project 

Choose todo-list and click "Import"
And then click "Deploy"

It todo-list already exists
change name to todo-list-lgm

when successfully deployed, click on Go to Dashboard
And then click visit

one deployement problem:

In the overview, click on Domain
click inspect
choose console
error: u.useState is not a function
TodoList.js

error was not solved

then switched to netlify.com

click signUp (for first time)

after login, click on Add new Site

import an existing project

takes time till github connecterd to netlify

then search todolist project
click deploy
it will give a link for our site



# The below Description is added automatically by React App

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
