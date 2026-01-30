import Item from './Item'

function ItemList({ items }) {
  return (
    <div className="item-list">
  {items.map(prod => (
    <Item key={prod.id} {...prod} />
  ))}
</div>
  )
}

export default ItemList