import React from 'react'
import { Toolbar, Box, Stack, Typography, Tabs, Tab} from '@mui/material';

function index() {

  const items = ["Public Betting", "PRO Report", "Game Odds", "Future Odds", "NFL", "NCAAF", "NBA", "PRO Projections", "NCAAB", "GOLF", "UFC", "Soccer", "MLB", "NHL"]

  return (
    <Toolbar disableGutters>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs variant='standard' sx={{marginLeft: '0.8rem'}} textColor="black" >
          {items.map((item) => {
            return (
              <Tab sx={{fontSize: '0.8rem', padding: '0.9rem', fontWeight: '600', textTransform: 'none' }} label={item}  />
            )
          })}
        </Tabs>
      </Box>
    </Toolbar>
  )
}

export default index