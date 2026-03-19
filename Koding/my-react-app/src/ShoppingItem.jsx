export default function ShoppingItem({ label, quantity }) {
  return (
    <div>
      <input type="checkbox" id={label} />
      <label htmlFor={label}>{quantity}x {label}</label>
    </div>
  )
}