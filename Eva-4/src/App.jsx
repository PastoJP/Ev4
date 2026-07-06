import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  const deleteItem = (id) => {
    const confirmar = window.confirm('¿Seguro que quieres eliminar este elemento?');
    if (confirmar) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>CRUD con LocalStorage</h1>
        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
        <p className="contador">Total: {items.length}</p>
        <List items={items} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </div>
  );
}

export default App;