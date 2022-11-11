import * as React from 'react';
import {AppBar, Link, Box, Toolbar, IconButton, Container, Typography, Button, Stack, Tabs, Tab} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

function index() {

  const pages = ["Sports", "Odds", "Picks", "Legal Betting", "Sportsbooks", "Education", "Resources"]

  return (
    <AppBar position="static" sx={{backgroundColor: 'white', color: 'black'}} elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Stack direction="row" alignItems="center" >
                <Link variant="h5" underline='none' sx={{color: 'black', cursor: 'pointer'}} fontSize={25} fontWeight={900}>ACTION</Link>
                <CheckCircleIcon sx={{color: '#0dc65a'}} />
            </Stack>
          
            <Box sx={{ flexGrow: 1, marginLeft: '1rem', paddingTop: '0.2rem', display: 'flex'}}>
              {pages.map((page) => (
                <Button key={page} sx={{fontWeight: '900', color: 'black', fontSize: '0.9rem', padding: '0.6rem', textTransform: 'none'}}>
                  {page}
                </Button>
              ))}
            </Box>

          <Box sx={{ flexGrow: 0, padding: '0.2rem', marginLeft: '3rem' }}>
            <Tabs>
              <Tab sx={{fontWeight: '900', color: 'black', fontSize: '0.8rem', padding: '0.6rem'}} label="Login"  />
              <Tab  sx={{fontWeight: '900', backgroundColor: '#0079f0', padding: '1rem', color: 'white', fontSize: '0.8rem', borderRadius: '5px'}} label="TRY FOR FREE" />
              <Tab icon={<TextSnippetOutlinedIcon fontSize='large'/>} sx={{fontWeight: '700', color: 'black', fontSize: '1rem', padding: '0.3rem'}} />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default index;