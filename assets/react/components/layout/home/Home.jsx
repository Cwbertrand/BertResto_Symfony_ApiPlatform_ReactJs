import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, ImageListItemBar, List, ListItem, Typography } from '@mui/material'
import React from 'react'

import heroImage from '../../../../img/bg-hero.jpg';
import spinnerHero from '../../../../img/hero.png';
import { overlayStyle, sxStyle } from './style';
import { cardData } from './cardInfo';
import '../../../../styles/fonts.css'

export default function Home() {
    return (
        <>

            <Box style={{ backgroundImage: `url(${heroImage})`}} sx={sxStyle}>
                <Box style={overlayStyle}>
                    <Container>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                            <Grid item xs={6} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'start', marginTop: '9em'}}>
                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '50px', fontWeight: 'bold', fontFamily: "Lucy Said Ok", color:'white'}}>
                                    Enjoy your meal
                                </Typography>
                                <Typography align='left' variant='h6' style={ {color:'white'} }>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit.
                                </Typography>
                                <Button sx={{ marginTop:"10px"}} variant='contained' >Make a reservation</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Box align='right' sx={{ overflow: 'hidden' }}>
                                    <img src={spinnerHero} alt='the spinner image' className='spin-image' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            
            <Container sx={{ marginBottom: '2em', marginTop: '5em'}}>
                <Grid style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {cardData.map((card) => (
                        <Card sx={{width: '250px', marginX: '5px',
                            transition: 'background-color 0.3s', // Add a smooth transition effect
                            '&:hover': {
                            backgroundColor: '#f44336',
                            color: '#ffebee'
                        }}}>
                            <CardActionArea>
                                <Box height={100}>
                                    <img src={card.icon} height={60} alt={card.subtitle} 
                                        style={{ padding: '20px 0px 0px 20px'}}
                                    />
                                </Box>
                                <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ fontSize: '30px', fontFamily: "Lucy Said Ok" }} component="div">
                                    {card.subtitle}
                                </Typography>
                                <Typography variant="body2" align='justify'>
                                    {card.text}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Grid>
            </Container>

            <Box style={{ background: '#071033'}}>
                <Container>
                    <Grid container spacing={2} color='white'>
                        <Grid item xs={4} >
                            <Box>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: 'Lucy Said Ok'}} component='div'>Enterprise</Typography>
                                <List>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={4} >
                            <Box>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: 'Lucy Said Ok'}} component='div'>Openning Hours</Typography>
                                <List>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={4} >
                            <Box>
                                <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: 'Lucy Said Ok'}} component='div'>Contact</Typography>
                                <List>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                    <ListItem>About us</ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}
