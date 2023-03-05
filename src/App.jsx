import React from 'react'
import { useState, useEffect } from 'react'
  
const App = () => {
  const [countries, setCountries] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setCountries(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <div>Hello APP.jsx</div>

  )
}

export default App