import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const addUser = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setNewUser({ name: '', email: '', phone: '' });
        setSuccessMessage('User added successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        setSuccessMessage('User deleted successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const editUser = (user) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email, phone: user.phone });
  };

  const updateUser = () => {
    if (editingUser) {
      const updatedUsers = users.map(user => {
        if (user.id === editingUser.id) {
          return editingUser;
        }
        return user;
      });
      setUsers(updatedUsers);
      setEditingUser(null);
      setNewUser({ name: '', email: '', phone: '' });
      setSuccessMessage('User updated successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      <div className="add-user">
        <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={editingUser ? editingUser.name : newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={editingUser ? editingUser.email : newUser.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={editingUser ? editingUser.phone : newUser.phone}
          onChange={handleInputChange}
        />
        <button onClick={editingUser ? updateUser : addUser}>
          {editingUser ? 'Update User' : 'Add User'}
        </button>
      </div>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <hr />
      
      <h2>User List</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                  <button onClick={() => editUser(user)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
