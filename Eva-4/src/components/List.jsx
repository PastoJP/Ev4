import Item from './Item';

function List({ items, deleteItem, editItem, toggleCompletado }) {
  return (
    <ul className="lista-elementos">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
          toggleCompletado={toggleCompletado}
        />
      ))}
    </ul>
  );
}

export default List;