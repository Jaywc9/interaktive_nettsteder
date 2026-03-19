import { useState } from 'react'

export default function AddForm({ onAdd }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name && !quantity) {
      setError('Du må fylle inn både navn og antall!')
      return
    }
    if (!name) {
      setError('Du må fylle inn et navn!')
      return
    }
    if (!quantity) {
      setError('Du må fylle inn et antall!')
      return
    }

    onAdd({ name, quantity })
    setName('')
    setQuantity('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Varenavn"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Antall"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button type="submit">Legg til</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}