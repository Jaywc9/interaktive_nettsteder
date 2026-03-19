import ShoppingItem from './ShoppingItem'

export default function ShoppingList({items}) {
  return (
    <section>
      {items.map((item, index) => (<ShoppingItem key={index} label={item.name} quantity={item.quantity}/>))}
    </section>
  )
}