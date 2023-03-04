import React from 'react'
import { useState, useEffect } from 'react'
import { Divider, Stack } from '@mui/material'
import RecipeReviewCard from './components/RecipeReviewCard'

const App = () => {
  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <Stack direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{flexWrap: 'wrap', margin: '50px'}}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}>
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </Stack>

  )
}

export default App