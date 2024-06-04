import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import UserList from './componets/UserList'
import LoginPage from './componets/LoginPage'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

useEffect(() => {
  api.get('/users').then( (response) => {
    setUsers(response.data.users)
  }).catch(error => {
    console.error("deu um problema", error)
  })
}, [])

return (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <LoginPage />
    {/* <UserList users={users} /> */}
  </div>
);
}

export default App
