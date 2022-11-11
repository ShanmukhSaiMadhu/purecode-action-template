import React from 'react'
import PromotionsComponent from './PromotionsComponent'
import TableComponent from './TableComponent'
import Grid from '@mui/material/Grid';

function index() {
  return (
    <Grid container spacing={1} >
        <Grid container xs={8.8} >
            <TableComponent />
        </Grid>

        <Grid container xs={3.2} sx={{padding: '0 0.3rem'}}>
            <PromotionsComponent />
        </Grid>
    </Grid>
  )
}

export default index