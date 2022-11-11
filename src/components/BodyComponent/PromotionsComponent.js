import React from 'react'
import {Grid, Paper, Typography, FormControl, InputLabel, Select, Link, List, ListItem, ListItemText} from '@mui/material';

function index() {

    const teams = ['Cincinnati Bengals', 'Los Angeles Rams', 'San Francisco 49ers', 'Kansas City Chiefs']

  return (
    <Grid container xs={12} margin= '0 0.4rem'>
        <Grid xs={12} marginBottom="1rem" sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Paper variant="outlined" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>
                <Typography sx={{fontSize: '1.5rem', fontWeight: '900'}}>Promotions</Typography>
                <FormControl sx={{minWidth: 150}}>
                    <InputLabel sx={{fontWeight: '600', color: 'black'}}>Alabama</InputLabel>
                    <Select
                    label="Alabama"
                    >
                    </Select>
                </FormControl>
            </Paper>
            <Paper variant="outlined">
                <Typography sx={{fontSize: '1rem', fontWeight: '900', padding: '1.5rem', textAlign: 'center'}}>No promotions available. Try selecting a different location.</Typography>
            </Paper>
        </Grid>

        <Grid xs={12}>
            <Paper variant="outlined" sx={{borderRadius: '20px'}}>
                <Grid xs={12} direction='row' display= 'flex' justifyContent='space-between' alignItems='center' padding="1.3rem">
                    <Typography sx={{fontSize: '1.5rem', fontWeight: '900'}}>NFL Teams</Typography>
                    <Link underline='none' sx={{color: '#3577CD', fontWeight: '900', fontSize: '1rem', cursor: 'pointer'}}>All Teams</Link>
                </Grid>

                <List>
                    {teams.map((team) => (
                        <ListItem>
                            <ListItemText primary={<Typography variant="h6" sx={{ fontWeight: '900', fontSize: '1rem', paddingLeft: '2rem'}}>{team}</Typography>}/>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            
        </Grid>
    </Grid>
  )
}

export default index