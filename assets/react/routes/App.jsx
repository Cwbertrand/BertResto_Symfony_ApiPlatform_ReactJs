
import React from 'react'
import { CssBaseline } from '@mui/material'
import { Routes as Switch, Route,  } from 'react-router-dom'

import NavBar from '../components/layout/navbar/NavBar'
import Home from '../components/layout/home/Home'
import AboutUs from '../components/layout/about/AboutUs'

export default function App() {
    return (

        <>
            <CssBaseline />
            <NavBar />
            <Switch>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about_us" element={<AboutUs/>} />
            </Switch>
        </>
        
    )
}
