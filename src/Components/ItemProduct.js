import { Box,Typography } from '@mui/material'
import React from 'react'

export const ItemProduct = (films) => {
  return (
    <Box><Typography variant='h1'>{films[0].name}</Typography></Box>
  )
}
