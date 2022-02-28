import React from "react";
import "./comment.css";
import {motion, AnimatePresence } from 'framer-motion';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const Comment = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [name, setName] = React.useState("");

  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      text2:name,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
    setName("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (


    <motion.div
   
     
     
    className='task'
    initial={{ x: '-100%', margin: 0}}
    animate={{ x: 0, marginTop: 25 }}
    exit={{
      x: '-100%',
      height: 0,
      marginTop: 0,
      padding: 0,
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.3,
      },
    }}
    transition={{
      type: 'spring',
      stiffness: 80,
      damping: 10,
    }}
  >


    <div id="todo-list" className="task__content">  
      <form onSubmit={handleSubmit}>
     
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Comment</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text " >
          <span>
    <img src={faker.image.avatar()} alt='img'  style={{ width:'5%',height:'5%',borderRadius:'50%',marginTop:'20px' }} />
<label> {faker.name.firstName()} </label>
    </span>
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>


    </motion.div>
  );
};

export default Comment;