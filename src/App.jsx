import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Header from './componets/Header'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

function App() {
  const [count, setCount] = useState(0)

  api.get('/users').then( (response) => {
    console.log(response)
  })

  return (
    <div className="">
      <Header/>
    </div>
  )
}

export default App
