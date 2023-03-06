import React from 'react'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import Title from './components/Title'


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
    <>
      <Title />
      <div>
        {/* <Card /> */}

        {countries.map((country, index) =>
          <Card
            key={index}
            cname={country.name.official}
            capital={country.capital}
          />
        )}
      </div>
    </>
  )
}

export default App