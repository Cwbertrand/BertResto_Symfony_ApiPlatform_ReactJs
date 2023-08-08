import { AccountCircle, Menu as MenuIcon, LightModeIcon  } from '@mui/icons-material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { AppBar, Box, Button, Container, IconButton, List, ListItem, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { navBgColor } from './style'

export default function NavBar() {
    // mobile customisation
    const isMobile = useMediaQuery('(max-width: 360px)');
    const [burgerBarOpen, setBurgerBarOpen] = useState(false);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);


    //show the dropdown menu
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                sx={ navBgColor} 
                position="static"
            >
                <Container fixed>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {isMobile && (
                            <IconButton
                                size='large'
                                color="inherit"
                                edge='start'
                                sx={{
                                    display: {sm: 'none'},
                                    marginLeft: theme.spacing(2),
                                }}
                                onClick={() => setBurgerBarOpen((prevMobileOpen) => !prevMobileOpen)}
                                >
                                <MenuIcon  sx={{ fontSize: 40 }} />
                            </IconButton>
                        )}
                        <List>
                            <Button color="inherit"  as={Link} to='/' 
                            sx={{ 
                                textDecoration: 'none',
                                fontSize: '30px',
                                fontWeight: '900', 
                                fontFamily: 'Lucy Said Ok',
                                letterSpacing: '7px',
                                textTransform: 'capitalize'
                            }}>
                                <span style={{ fontSize: '50px', fontFamily: 'Lucy Said Ok'}}>H</span>ome
                            </Button>
                        </List>
                        <List style={{  width: '50%'}}>
                            <ListItem style={{ display: 'flex', justifyContent: 'space-around'}}>
                                <Link to='menu' style={{ textDecoration: 'none'}}>
                                    <Typography sx={{color: 'white', fontWeight: 'bold', fontSize: '15px'}} >
                                        Menu
                                    </Typography>
                                </Link> 
                                <Link to='galary' style={{ textDecoration: 'none'}}>
                                    <Typography variant='subtitle' sx={{color: 'white', fontWeight: 'bold', fontSize: '15px'}} >
                                        Galary
                                    </Typography>
                                </Link> 
                                <Link to='reservation' style={{ textDecoration: 'none'}}>
                                    <Typography variant='subtitle' sx={{color: 'white', fontWeight: 'bold', fontSize: '15px'}} >
                                        Reservation
                                    </Typography>
                                </Link> 
                                <Link to='about_us' style={{ textDecoration: 'none'}}>
                                    <Typography variant='subtitle' sx={{color: 'white', fontWeight: 'bold', fontSize: '15px'}} >
                                        About us 
                                    </Typography>
                                </Link> 
                                <Link to='contact_us' style={{ textDecoration: 'none'}}>
                                    <Typography variant='subtitle' sx={{color: 'white', fontWeight: 'bold', fontSize: '15px'}} >
                                        Contact us 
                                    </Typography>
                                </Link> 
                            </ListItem>
                            
                        </List>
                        <List>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={handleMenu}
                            >
                                <AccountCircle sx={{ fontSize: 30 }} />
                            </IconButton>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={() => {}}
                            >
                                <NightlightRoundIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                        </List>
                        
                    </Toolbar>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                </Container>
            </AppBar>
        </Box>
    )
}