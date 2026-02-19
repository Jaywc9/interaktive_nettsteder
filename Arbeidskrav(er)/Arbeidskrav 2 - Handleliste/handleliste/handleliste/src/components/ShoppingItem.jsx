function ShoppingItem({ item, onToggleBought, onChangeQuantity }) {
  const handleQuantityChange = (e) => {
    const val = Number(e.target.value)
    if (val >= 1) {
      onChangeQuantity(item.id, val)
    }
  }

  return (
    <li className={`shopping-item${item.bought ? ' shopping-item--bought' : ''}`}>
      <label className="shopping-item__check-label">
        <input
          type="checkbox"
          className="shopping-item__checkbox"
          checked={item.bought}
          onChange={() => onToggleBought(item.id)}
          aria-label={`Marker ${item.name} som kjøpt`}
        />
        <span className="shopping-item__name">{item.name}</span>
      </label>

      <input
        id={`qty-${item.id}`}
        className="shopping-item__qty"
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
        aria-label={`Antall ${item.name}`}
      />
    </li>
  )
}

export default ShoppingItem
