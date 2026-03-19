import './App.css'
import ShoppingList from './ShoppingList'
import AddForm from './AddForm'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
  {name: 'Yoghurt', quantity: 1, defaultChecked: false},
  {name: 'Egg', quantity: 1, defaultChecked: true},
  ])
  function addItem(newItem) {
    setItems([newItem, ...items])
  }


  return (
    <main>
      <h1>Handleliste ({items.length} varer)</h1>
      <AddForm onAdd={addItem}/>
      <ShoppingList items={items}/>
    </main>
  )
}



export default App