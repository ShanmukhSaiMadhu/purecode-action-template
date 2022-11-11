import React from 'react'
import Grid from '@mui/material/Grid';
import {Box, Select, Typography, FormControl, InputLabel, IconButton} from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';

function index() {
  return (
    <Box sx={{margin: '2.5rem 2.5rem 1.3rem 2.5rem'}}> 
        <Grid container spacing={2}>
            <Grid xs={8}>
                <Typography variant="h5" fontWeight={600}>Sports Betting Odds</Typography>
                <Grid container spacing={0} sx={{padding: '1rem 0rem'}}>
                    <Grid xs={6}>
                        <FormControl sx={{ width: 430 }}>
                            <InputLabel id="demo-multiple-name-label" sx={{fontWeight: '600', color: 'black'}}>NCAAF</InputLabel>
                            <Select label="NCAAF" />
                        </FormControl>
                    </Grid>
                    
                    <Grid xs={6}>
                        <FormControl sx={{ width: 430 }}>
                            <InputLabel id="demo-multiple-name-label" sx={{fontWeight: '600', color: 'black'}}>Spread</InputLabel>
                            <Select label="Spread" />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl sx={{ width: 550 }}>
                    <InputLabel id="demo-multiple-name-label" sx={{fontWeight: '600', color: 'black'}}>Week 8</InputLabel>
                    <Select label="Week 8" />
                </FormControl>
            </Grid>
            <Grid container xs={4} justifyContent="flex-end" alignItems="flex-end">
                <IconButton sx={{borderRadius: '5px', color: 'black', border: '1px solid #BDBDBD', padding: '0.8rem 1.8rem'}}>
                    <TuneIcon sx={{paddingRight: '0.6rem'}} />
                    <Typography fontWeight={600} >Odds Settings</Typography>
                </IconButton>
            </Grid>
        </Grid>
    </Box>
    
  )
}

export default index