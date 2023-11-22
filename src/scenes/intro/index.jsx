import React from "react";
import { Box, Typography } from "@mui/material";
import selfPortrait from '../../assets/35.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Introduction(){
    React.useEffect(function(){
      AOS.init({duration: 1000})
    },[])

    return (
        <Box data-aos='fade-in' className='section__padding intro-section slide-in-bottom' sx={{color: '#fff', textShadow: '0px 0px 5px #131313', marginBottom: {xs: '6rem', md: '10rem'}}}>
              <Typography variant="h2" className='intro-title'>
                Hi, I am <strong style={{display: 'block'}}>Yasir Williams</strong>
              </Typography>
              <Box>
                
                <Typography variant={'h3'} className='text-light intro-subtitle gradient__bg' sx={{color: '#fff'}}>
                  FRONT-END DEV
                </Typography>
              </Box>
              <img className='portrait' src={selfPortrait} alt="" />
        </Box>
    )
}