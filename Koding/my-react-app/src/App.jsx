import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
  <p>
    <Produkt />
  </p>
  )
}



function Produkt() {
 return (
  <section>
    <Checkbox label="Yoghurt"/>
    <Checkbox label="Egg  "/>
  </section>
 )
}

function Checkbox({label}) {
  return (
    <section>
    <input type="checkbox" id={label} />
    <label htmlFor={label}>{label}</label>
    </section>
  )
}


export default App
