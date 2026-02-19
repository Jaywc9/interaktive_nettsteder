import { useState } from 'react'
import AddForm from './components/AddForm.jsx'
import ShoppingList from './components/ShoppingList.jsx'
import './App.css'

const initialItems = [
  { id: 1, name: 'Melk', quantity: 2, bought: false },
  { id: 2, name: 'Egg', quantity: 1, bought: true },
]

function App() {
  const [items, setItems] = useState(initialItems)

  const handleAddItem = (name, quantity) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      bought: false,
    }
    setItems((prev) => [newItem, ...prev])
  }

  const handleToggleBought = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    )
  }

  const handleChangeQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return (
    <main className="app">
      <h1 className="app__title">Handleliste</h1>

      <AddForm onAddItem={handleAddItem} />

      <ShoppingList
        items={items}
        onToggleBought={handleToggleBought}
        onChangeQuantity={handleChangeQuantity}
      />
    </main>
  )
}

export default App
