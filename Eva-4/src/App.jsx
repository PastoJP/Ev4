import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [busqueda, setBusqueda] = useState('');

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
      setItems([...items, { id: Date.now(), value, completado: false }]);
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

  const toggleCompletado = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completado: !item.completado } : item
    ));
  };

  const deleteAll = () => {
    if (items.length === 0) return;
    const confirmar = window.confirm('¿Seguro que quieres borrar TODOS los elementos?');
    if (confirmar) {
      setItems([]);
    }
  };

  const itemsFiltrados = items.filter(item =>
    item.value.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app">
      <div className="card">
        <h1>CRUD con LocalStorage</h1>
        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
        <p className="contador">Total: {items.length}</p>

        <input
          className="input-buscador"
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <List
          items={itemsFiltrados}
          deleteItem={deleteItem}
          editItem={editItem}
          toggleCompletado={toggleCompletado}
        />

        <button className="btn-borrar-todo" onClick={deleteAll}>
          Borrar todo
        </button>
      </div>
    </div>
  );
}

export default App;