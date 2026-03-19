import { useState } from 'react'
import AddForm from './AddForm'
import ShoppingList from './ShoppingList'

function App() {
  const [items, setItems] = useState([])

  function addItem(newItem) {
    setItems([newItem, ...items])
  }

  return (
    <main>
      <h1>Handleliste ({items.length} varer)</h1>
      <AddForm onAdd={addItem} />
      <ShoppingList items={items} />
    </main>
  )
}

export default App