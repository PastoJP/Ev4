function Item({ item, deleteItem, editItem, toggleCompletado }) {
  return (
    <li className="elemento">
      <input
        type="checkbox"
        checked={item.completado || false}
        onChange={() => toggleCompletado(item.id)}
      />
      <span className={`elemento-titulo ${item.completado ? 'completado' : ''}`}>
        {item.value}
      </span>
      <button className="btn-editar" onClick={() => editItem(item)}>Editar</button>
      <button className="btn-eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
}

export default Item;