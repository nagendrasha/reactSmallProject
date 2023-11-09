import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Aqi = () => {
  return (
    <>
   <Box
      sx={{
        display: 'flex',
        textAlign:'center',
        justifyContent:'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper elevation={3} sx={{mt:'50'}}>
        <Typography variant='h4'>Aqi Level</Typography>
        </Paper>
    </Box>

    </>
  )
}

export default Aqi
