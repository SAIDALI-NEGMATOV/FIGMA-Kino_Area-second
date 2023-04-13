import { Box,Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemProduct = ({films}) => {
  let {filmId}=useParams()
  console.log(filmId);
  return (
    <Box><Typography variant='h1'>{films[filmId-1].name}</Typography></Box>
  )
}
