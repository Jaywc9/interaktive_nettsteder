import { useState } from 'react'

function AddForm({ onAddItem }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedName = name.trim()
    const parsedQty = Number(quantity)

    if (!trimmedName && (!quantity || parsedQty < 1)) {
      setError('Du må fylle inn både navn og antall.')
      return
    }
    if (!trimmedName) {
      setError('Du må fylle inn navn på varen.')
      return
    }
    if (!quantity || parsedQty < 1) {
      setError('Du må fylle inn et gyldig antall (minst 1).')
      return
    }

    onAddItem(trimmedName, parsedQty)
    setName('')
    setQuantity('')
    setError('')
  }

  return (
    <section className="add-form">
      <form onSubmit={handleSubmit} noValidate>
        <fieldset className="add-form__fields">
          <legend className="visually-hidden">Legg til vare</legend>

          <label className="add-form__label" htmlFor="item-name">
            Vare
          </label>
          <input
            id="item-name"
            className="add-form__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="add-form__label" htmlFor="item-qty">
            Antall
          </label>
          <input
            id="item-qty"
            className="add-form__input"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button className="add-form__btn" type="submit">
            Legg til vare
          </button>
        </fieldset>
      </form>

      {error && (
        <p className="add-form__error" role="alert">
          {error}
        </p>
      )}
    </section>
  )
}

export default AddForm
