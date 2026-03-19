export default function ShoppingItem({label, quantity, defaultChecked}) {
  return (
    <section>
      <input type="checkbox" id={label} defaultChecked={defaultChecked} />
      <label htmlFor={label}>{quantity}x {label}</label>
    </section>
  )
}