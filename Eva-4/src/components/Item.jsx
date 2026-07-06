function Item({ item, deleteItem, editItem }) {
  return (
    <li className="elemento">
      <span className="elemento-titulo">{item.value}</span>
      <button className="btn-editar" onClick={() => editItem(item)}>Editar</button>
      <button className="btn-eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
}

export default Item;