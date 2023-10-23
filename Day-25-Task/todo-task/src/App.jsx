import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Todo from './Todo.jsx'

function App() {


  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [description, setDescription] = useState('');  
  const [status, setStatus] = useState('Not Completed');
  const [filter, setFilter] = useState('All');
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todoName.trim() === '' || description.trim() === '') {
      return;
    }

    if (edit) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editId) {
          return { ...todo, todoName, description, status };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setEdit(false);
      setEditId(null);
    } else {
      const newTodo = {
        id: todos.length + 1,
        todoName,
        description,
        status: 'Not Completed',
      };
      setTodos([...todos, newTodo]);
    }

    setTodoName('');
    setDescription('');
    setStatus('Not Completed');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTodoName(todoToEdit.todoName);
      setDescription(todoToEdit.description);
      setStatus(todoToEdit.status);
      setEdit(true);
      setEditId(id);
    }
  };

  const filterTodos = () => {
    switch (filter) {
      case 'Completed':
        return todos.filter((todo) => todo.status === 'Completed');
      case 'Not Completed':
        return todos.filter((todo) => todo.status === 'Not Completed');
      default:
        return todos;
    }
  };
  

  return (
    <>
      <h3 style={{color:'#4CAF50'}}>My Todo</h3>
      <div className='todoDiv'> 
          <input type="text" 
              name="todoName" 
              id="todoName" 
              placeholder='Todo Name'
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
              required/>

          <input type="text" 
          name="todoDesc" 
          id="todoDesc" 
          placeholder='Todo Description' 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required/>

          {/* Add button */}
          <button style={{color: 'white'}}  onClick={addTodo}>Add Todo</button>
      </div>
<br />
<div className='mytodos'>
        <h3 className='m-3'>
          <b>My Todos</b>
        </h3>
        <div className='mb-3'>
          <label htmlFor='filter'>
            <b>Status Filter : </b>
          </label>
          <select
            value={filter}
            name='filter'
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value='All' className='all bg-light'>
              All
            </option>
            <option
              value='Completed'
              className='complete bg-success text-white'
            >
              Completed
            </option>
            <option value='Not Completed' className='bg-danger text-white'>
              Not Completed
            </option>
          </select>
        </div>
      </div>

      
      <div className='container d-grid'>
        {filterTodos().map((todo) => (
          <div className='' key={todo.id}>
            <Todo
              todo={todo}
              updateStatus={updateStatus}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        ))}
      </div>
     
    </>
  )
}

export default App
