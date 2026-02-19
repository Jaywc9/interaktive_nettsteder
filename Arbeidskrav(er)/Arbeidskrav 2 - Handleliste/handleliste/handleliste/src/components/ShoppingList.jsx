import ShoppingItem from './ShoppingItem.jsx'

function ShoppingList({ items, onToggleBought, onChangeQuantity }) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="shopping-list">
      <ul className="shopping-list__list">
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggleBought={onToggleBought}
            onChangeQuantity={onChangeQuantity}
          />
        ))}
      </ul>
    </section>
  )
}

export default ShoppingList
