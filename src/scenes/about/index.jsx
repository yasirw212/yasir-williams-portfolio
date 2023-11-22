import React from "react";
import { Typography, Box, Grid, List, ListItem, ListItemText, Container, useMediaQuery } from "@mui/material";
import texasImg from '../../assets/texas-48.png'
import { tokens } from "../../theme";
import { Code, Person } from "@mui/icons-material";
import materialUI from '../../assets/material-ui-48.png'
import { technologyData } from "../../data/data";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About(){
    const colors = tokens
    const isMobile = useMediaQuery("(max-width: 480px)")
    const isMini = useMediaQuery("(max-width: 361px)")

    React.useEffect(function(){
        AOS.init({duration: 1000})
    },[])

    return (
        <Container sx={{marginBottom: {lg: '5em'}}} maxWidth='md' className='section__padding' id="about">
            <Box data-aos='fade-up'>
                <Box sx={{textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: {xs: 'flex-start', sm: 'center'}, marginLeft: {xs: '1.5rem', sm: 0}}}>
                    <Box sx={{padding: '.75rem 4rem .5rem 0rem', display: 'flex', }} className="gradient__bg">
                        <Typography variant="h2" sx={{fontSize: '2rem', marginRight: '2rem'}}>
                            <Person sx={{fontSize: '2rem', color: '#fff', marginLeft: '1rem'}} />
                        </Typography>
                        <Typography  variant={isMini ? 'h4' : 'h3'}  sx={{fontWeight: '400', color: '#fff', textShadow: '0px 0px 5px #131313',}}>
                            Who Am I ?
                        </Typography>
                    </Box>
                    <Box sx={{marginTop: {xs: '2rem'}, width: {xs: '80%'}}}>
                        <Typography xs={4} sx={{lineHeight: '30px', fontWeight: 400, color: colors.secondary[700] , textShadow: '0px 0px 5px #fff', fontSize: {xs: '14px', sm: '16px'}}}>
                            I am a frontend developer based out of Fort Worth, Texas. I am currently pursuing my associates degree in Computer Science(CS) and aspire to obtain a Bachelor of Arts(BA) in CS, afterwards. I began my coding journey in 2021 and I've been in love since. I know in this field there is no finish line and their is always more for you to learn/do and that's what I intend to do! The sense of satisfaction I receive from completing projects is what keeps me driven. As of right now I specialize in frontend web development but I do plan on expanding into software and mobile applications!
                        </Typography>
                    </Box>
                </Box>
                <Box >
                    <Box sx={{marginTop: {xs: '7.5rem', lg: '11rem'}, textAlign: 'right', width: {xs: '100%'}, display: 'flex', flexDirection: 'column', alignItems: {xs: 'center', sm: 'center'}}}>
                        <Box data-aos='fade-up' sx={{background: colors.primary[100], padding: '.75rem 2rem 0rem 0rem', boxShadow: '0px 0px 7px #131313', display: 'flex', }}>
                            <Typography variant="h2" sx={{fontSize: '2rem', marginRight: '2rem'}}>
                                <Code sx={{fontSize: '2rem', color: colors.secondary[700], marginLeft: '1rem'}} />
                            </Typography>
                            <Typography variant={isMini ? 'h4' : 'h3'} sx={{color: colors.secondary[700], }}>
                                Well Versed in:
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent:  {xs: 'center', sm: 'center'}}}>
                        <Grid container spacing={3.5} sx={{marginTop: '2rem', display: 'flex', justifyContent: 'center', width: {xs: isMobile ? '100%' : '90%', md: '85%', lg: '100%'}}}>
                            {
                                technologyData.map(tech => (
                                <Grid data-aos='fade-up' item xs={isMini ? 6 : 4} sm={3}>
                                    <Box sx={{background: colors.primary[100], padding: {xs: '1rem', sm: '1rem', md: '1.25rem'}, paddingTop: {xs: '1.25rem', sm: '1.5rem', md: '1.25rem', lg: '1.75rem'}, paddingBottom: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem'}, borderRadius: '15px', boxShadow: '0px 0px 10px #131313', textAlign: 'center'}}>
                                        <img width={isMobile ? '30' : '35'} src={tech.icon} alt="" />
                                        <Typography variant='h6' sx={{color: colors.secondary[700], fontSize: {xs: '11px', sm: '14px'}}}>
                                            {tech.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}