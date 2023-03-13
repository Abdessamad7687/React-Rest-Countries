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
      <div className="container bg-dark text-white">
        <Title />
        <h6 className='text-center my-3'>
        <strong>Total Countries displayed:</strong> {countries.length}
        </h6>
        <div className="row mx-auto gap-1">
          {countries.map((country, index) =>
            <Card
              key={index}
              cname={country.name.official}
              capital={country.capital}
              image={country.flags.png}
              region={country.region}
              population={country.population}
            />
          )}
        </div>

      </div>
    </>
  )
}

export default App
