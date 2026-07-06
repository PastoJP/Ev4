import { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
    } else {
      setInputValue('');
    }
    setError('');
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError('El campo no puede estar vacío o contener solo espacios.');
      return;
    }

    setError('');
    addOrUpdateItem(inputValue.trim());
    setInputValue('');
  };

  return (
    <form className="form-elemento-wrap" onSubmit={handleSubmit}>
      <div className="form-elemento">
        <input
          className="input-titulo"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn-guardar" type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
      </div>
      {error && <p className="mensaje-error">{error}</p>}
    </form>
  );
}

export default Form;