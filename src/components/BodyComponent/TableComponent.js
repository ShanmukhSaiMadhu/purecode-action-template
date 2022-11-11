import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Grid} from '@mui/material'
import pointsbet from '../../assets/pointsbet.png'
import betmgm from '../../assets/betmgm.png'
import caesars from '../../assets/caesars.png'
import FanDuel from '../../assets/FanDuel.png'
import DraftKings from '../../assets/DraftKings.png'
import BetRivers from '../../assets/BetRivers.png'
import BookmarkIcon from '@mui/icons-material/Bookmark';

function createData(scheduled, open, best, pointsbet, betmgm, caesars, fanduel, draftkings, betrivers) {
  return { scheduled, open, best, pointsbet, betmgm, caesars, fanduel, draftkings, betrivers };
}

const tag = <BookmarkIcon sx={{color: 'orange', fontSize: 'medium', padding: '0', margin: '0'}} />


const rows = [
  createData(
    [['Ravens    27', '101'], ['Buccaneers 22', '102']],
    [['+3.5', '-110'], ['-3.5', '-110']], 
    [['+2.5', '-107'], ['-1.5', '-110']], 
    [[tag, '+2.5','-107'], ['-2.5', '-107']], 
    [['+2.5', '-115'], ['-2.5', '-105']], 
    [['+2', '-110'], ['-2', '-110']], 
    [['+2.5', '-114'], ['-2.5', '-106']], 
    [['+1.5', '-110'], ['-1.5', '-110']], 
    [['+2', '-110'], ['-2', '-113']]
  ),
  createData(
    [['Broncos    21', '251'], ['Jaguars 17', '252']],
    [['-7', '-109'], ['+7', '-112']], 
    [['-6.5', '+410'], ['-1', '-107']], 
    [['+1','-107'], [tag, '-1', '-107']], 
    [['+1', '-110'], ['-1', '-110']], 
    [['+1', '-110'], ['-1', '-110']], 
    [['+1.5', '-118'], ['-1.5', '-104']], 
    [['+1', '-110'], ['-1', '-110']], 
    [['+1', '-110'], ['-1', '-113']]
  ),
  createData(
    [['Steelers    13', '259'], ['Eagles 35', '260']],
    [['+3.5', '+100'], ['-3.5', '-120']], 
    [['+11.5', '-107'], ['-11.5', '-107']], 
    [[tag, '+11.5','-107'], [tag, '-11.5', '-107']], 
    [['+11.5', '-110'], ['-11.5', '-110']], 
    [['+2', '-110'], ['-2', '-110']], 
    [['+2.5', '-114'], ['-2.5', '-106']], 
    [['+1.5', '-110'], ['-1.5', '-110']], 
    [['+2', '-110'], ['-2', '-113']]
  ),
  createData(
    [['Ravens    27', '101'], ['Buccaneers 22', '102']],
    [['+3.5', '-110'], ['-3.5', '-110']], 
    [['+2.5', '-107'], ['-1.5', '-110']], 
    [['+2.5','-107'], ['-2.5', '-107']], 
    [['+2.5', '-115'], ['-2.5', '-105']], 
    [['+2', '-110'], ['-2', '-110']], 
    [['+2.5', '-114'], ['-2.5', '-106']], 
    [['+1.5', '-110'], [tag, '-1.5', '-110']], 
    [['+2', '-110'], ['-2', '-113']]
  ),
  createData(
    [['Steelers    13', '259'], ['Eagles 35', '260']],
    [['+3.5', '+100'], ['-3.5', '-120']], 
    [['+11.5', '-107'], ['-11.5', '-107']], 
    [['+11.5','-107'], ['-11.5', '-107']], 
    [['+11.5', '-110'], [tag, '-11.5', '-110']], 
    [['+2', '-110'], ['-2', '-110']], 
    [[tag, '+2.5', '-114'], ['-2.5', '-106']], 
    [['+1.5', '-110'], ['-1.5', '-110']], 
    [['+2', '-110'], ['-2', '-113']]
  ),
  createData(
    [['Ravens    27', '101'], ['Buccaneers 22', '102']],
    [['+3.5', '-110'], ['-3.5', '-110']], 
    [['+2.5', '-107'], ['-1.5', '-110']], 
    [[tag, '+2.5','-107'], ['-2.5', '-107']], 
    [['+2.5', '-115'], ['-2.5', '-105']], 
    [['+2', '-110'], ['-2', '-110']], 
    [['+2.5', '-114'], ['-2.5', '-106']], 
    [['+1.5', '-110'], ['-1.5', '-110']], 
    [['+2', '-110'], ['-2', '-113']]
  ),
];

export default function index() {
  return (
    <TableContainer component={Paper} elevation={3} sx={{maxHeight: 500}}>
      <Table sx={{ width: "max-content" }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell sx={{fontWeight: '600', width: '10rem'}} >SCHEDULED</TableCell>
            <TableCell sx={{fontWeight: '600'}}>OPEN</TableCell>
            <TableCell sx={{fontWeight: '600'}}>BEST ODDS</TableCell>
            <TableCell >
                <img src={pointsbet} borderRadius="30px" height="25" width="80" />
            </TableCell>
            <TableCell >
                <img src={betmgm} borderRadius="30px" height="25" width="80" />
            </TableCell>
            <TableCell >
                <img src={caesars} borderRadius="30px" height="25" width="80" />
            </TableCell>
            <TableCell >
                <img src={FanDuel} borderRadius="30px" height="25" width="80" />
            </TableCell>
            <TableCell >
                <img src={DraftKings} borderRadius="30px" height="25" width="80" />
            </TableCell>
            <TableCell >
                <img src={BetRivers} borderRadius="30px" height="25" width="80" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{border: '0'}}>
          {rows.map((row, index) => (
            index % 2 === 1 ? 
            <TableRow>
              <TableCell sx={{borderBottom: 'none', padding: '0 1.2rem', }}>
                Final
              </TableCell>
            </TableRow>
            :
            <TableRow
              key={row.scheduled[0][0]}
            >
              <TableCell align='center' sx={{borderBottom: 'none', paddingLeft: '1rem'}} scope="row">
                <Paper elevation={0} sx={{marginBottom: '0.5rem'}}>
                  <Typography fontWeight= '900' align='left' sx={{paddingLeft: '1.5rem'}}>{row.scheduled[0][0]}</Typography>
                  
                  <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '900', padding: '0', marginLeft: '1.5rem'}}>{row.scheduled[0][1]}</Typography>
                </Paper>
                

                <Paper elevation={0} sx={{marginBottom: '0.5rem'}}>
                   <Typography fontWeight= '900' align='left' sx={{paddingLeft: '1.5rem'}}>{row.scheduled[1][0]}</Typography>
                  <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '900', padding: '0', marginLeft: '1.5rem'}}>{row.scheduled[1][1]}</Typography>
                </Paper>
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '0.5rem'}}>
              <Paper elevation={0} sx={{marginBottom: '0.5rem', fontWeight: '600', color: 'gray',}}>
                {row.open[0][0]} 
                <Typography sx={{fontSize: '0.7rem'}}>{row.open[0][1]}</Typography>
              </Paper>

                <Paper elevation={0} sx={{marginBottom: '0.5rem', fontWeight: '600', color: 'gray',}}>
                  {row.open[1][0]} 
                  <Typography sx={{fontSize: '0.7rem'}}>{row.open[1][1]}</Typography>
                </Paper>
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none', fontWeight: '600', paddingTop: '0.7rem'}}>
                <Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    {row.best[0][0]}
                    <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.best[0][1]}</Typography>
                </Paper>

                <Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                  {row.best[1][0]}
                      <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.best[1][1]}</Typography>
                  </Paper>
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none', fontWeight: '600', paddingTop: '0.7rem'}}>
                {row.pointsbet[0].length === 3 ?
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    <Grid container xs={12} >
                      <Grid xs={4} align=''>
                        {row.pointsbet[0][0]}
                      </Grid>
                      
                      <Grid xs={8} align='left' sx={{paddingTop: '0.3rem'}}>
                        {row.pointsbet[0][1]}
                        <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.pointsbet[0][2]}</Typography>
                      </Grid>
                    </Grid> 
                  </Paper>) 
                  :
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    {row.pointsbet[0][0]}
                      <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.pointsbet[0][1]}</Typography>
                  </Paper>)
                  }

                  {row.pointsbet[1].length === 3 ?
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      <Grid container xs={12} >
                        <Grid xs={4} align=''>
                          {row.pointsbet[1][0]}
                        </Grid>
                        
                        <Grid xs={8} align='left'>
                          {row.pointsbet[1][1]}
                          <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.pointsbet[1][2]}</Typography>
                        </Grid>
                      </Grid> 
                    </Paper>) 
                    :
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      {row.pointsbet[1][0]}
                        <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.pointsbet[1][1]}</Typography>
                    </Paper>)
                  }
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none', fontWeight: '600', paddingTop: '0.7rem'}}>
                {row.betmgm[0].length === 3 ?
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    <Grid container xs={12} >
                      <Grid xs={4} align=''>
                        {row.betmgm[0][0]}
                      </Grid>
                      
                      <Grid xs={8} align='left' sx={{paddingTop: '0.3rem'}}>
                        {row.betmgm[0][1]}
                        <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.betmgm[0][2]}</Typography>
                      </Grid>
                    </Grid> 
                  </Paper>) 
                  :
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    {row.betmgm[0][0]}
                      <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.betmgm[0][1]}</Typography>
                  </Paper>)
                  }

                  {row.betmgm[1].length === 3 ?
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      <Grid container xs={12} >
                        <Grid xs={4} align=''>
                          {row.betmgm[1][0]}
                        </Grid>
                        
                        <Grid xs={8} align='left'>
                          {row.betmgm[1][1]}
                          <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.betmgm[1][2]}</Typography>
                        </Grid>
                      </Grid> 
                    </Paper>) 
                    :
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      {row.betmgm[1][0]}
                        <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.betmgm[1][1]}</Typography>
                    </Paper>)
                  }
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none', fontWeight: '600', paddingTop: '0.7rem'}}>
                {row.caesars[0].length === 3 ?
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    <Grid container xs={12} >
                      <Grid xs={4} align=''>
                        {row.caesars[0][0]}
                      </Grid>
                      
                      <Grid xs={8} align='left' sx={{paddingTop: '0.3rem'}}>
                        {row.caesars[0][1]}
                        <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.caesars[0][2]}</Typography>
                      </Grid>
                    </Grid> 
                  </Paper>) 
                  :
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    {row.caesars[0][0]}
                      <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.caesars[0][1]}</Typography>
                  </Paper>)
                  }

                  {row.caesars[1].length === 3 ?
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      <Grid container xs={12} >
                        <Grid xs={4} align=''>
                          {row.caesars[1][0]}
                        </Grid>
                        
                        <Grid xs={8} align='left'>
                          {row.caesars[1][1]}
                          <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.caesars[1][2]}</Typography>
                        </Grid>
                      </Grid> 
                    </Paper>) 
                    :
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      {row.caesars[1][0]}
                        <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.caesars[1][1]}</Typography>
                    </Paper>)
                  }
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none', fontWeight: '600', paddingTop: '0.7rem'}}>
                {row.fanduel[0].length === 3 ?
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    <Grid container xs={12} >
                      <Grid xs={4} align=''>
                        {row.fanduel[0][0]}
                      </Grid>
                      
                      <Grid xs={8} align='left' sx={{paddingTop: '0.3rem'}}>
                        {row.fanduel[0][1]}
                        <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.fanduel[0][2]}</Typography>
                      </Grid>
                    </Grid> 
                  </Paper>) 
                  :
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    {row.fanduel[0][0]}
                      <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.fanduel[0][1]}</Typography>
                  </Paper>)
                  }

                  {row.fanduel[1].length === 3 ?
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      <Grid container xs={12} >
                        <Grid xs={4} align=''>
                          {row.fanduel[1][0]}
                        </Grid>
                        
                        <Grid xs={8} align='left'>
                          {row.fanduel[1][1]}
                          <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.fanduel[1][2]}</Typography>
                        </Grid>
                      </Grid> 
                    </Paper>) 
                    :
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      {row.fanduel[1][0]}
                        <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.fanduel[1][1]}</Typography>
                    </Paper>)
                  }
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none', fontWeight: '600', paddingTop: '0.7rem'}}>
                {row.draftkings[0].length === 3 ?
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    <Grid container xs={12} >
                      <Grid xs={4} align=''>
                        {row.draftkings[0][0]}
                      </Grid>
                      
                      <Grid xs={8} align='left' sx={{paddingTop: '0.3rem'}}>
                        {row.draftkings[0][1]}
                        <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.draftkings[0][2]}</Typography>
                      </Grid>
                    </Grid> 
                  </Paper>) 
                  :
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    {row.draftkings[0][0]}
                      <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.draftkings[0][1]}</Typography>
                  </Paper>)
                  }

                  {row.draftkings[1].length === 3 ?
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      <Grid container xs={12} >
                        <Grid xs={4} align=''>
                          {row.draftkings[1][0]}
                        </Grid>
                        
                        <Grid xs={8} align='left'>
                          {row.draftkings[1][1]}
                          <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.draftkings[1][2]}</Typography>
                        </Grid>
                      </Grid> 
                    </Paper>) 
                    :
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      {row.draftkings[1][0]}
                        <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.draftkings[1][1]}</Typography>
                    </Paper>)
                  }
              </TableCell>

              <TableCell align='center' sx={{borderBottom: 'none', fontWeight: '600', paddingTop: '0.7rem'}}>
                {row.betrivers[0].length === 3 ?
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    <Grid container xs={12} >
                      <Grid xs={4} align=''>
                        {row.betrivers[0][0]}
                      </Grid>
                      
                      <Grid xs={8} align='left' sx={{paddingTop: '0.3rem'}}>
                        {row.betrivers[0][1]}
                        <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.betrivers[0][2]}</Typography>
                      </Grid>
                    </Grid> 
                  </Paper>) 
                  :
                  (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                    {row.betrivers[0][0]}
                      <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.betrivers[0][1]}</Typography>
                  </Paper>)
                  }

                  {row.betrivers[1].length === 3 ?
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      <Grid container xs={12} >
                        <Grid xs={4} align=''>
                          {row.betrivers[1][0]}
                        </Grid>
                        
                        <Grid xs={8} align='left'>
                          {row.betrivers[1][1]}
                          <Typography align='left' sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600', paddingLeft: '0.2rem'}}>{row.betrivers[1][2]}</Typography>
                        </Grid>
                      </Grid> 
                    </Paper>) 
                    :
                    (<Paper elevation={3} sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '0.5rem'}}>
                      {row.betrivers[1][0]}
                        <Typography sx={{fontSize: '0.7rem', color: 'gray', fontWeight: '600'}}>{row.betrivers[1][1]}</Typography>
                    </Paper>)
                  }
              </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}