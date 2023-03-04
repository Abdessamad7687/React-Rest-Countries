import React from 'react'
import { useState, useEffect } from 'react'
import { Divider, Stack } from '@mui/material'
// import DataTable from './components/DataTable'
import Table from './components/Table'

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
    <Stack direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ flexWrap: 'wrap', margin: '50px' }}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}>
        <Table />
     
    </Stack>

  )
}

export default App