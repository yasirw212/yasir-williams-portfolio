import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import img from '../../assets/ownxmind.jpg'
import { tokens } from "../../theme";
import { LanguageOutlined } from "@mui/icons-material";
import { Code } from "@mui/icons-material";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Project({title, img, description, icons, url, githubUrl}){
    const classes = useStyles()
    const colors = tokens

    React.useEffect(function(){
        AOS.init({duration: 1000})
    },[])

    return (
        <Grid data-aos='fade-up'  xs={12} sm={6} md={4} item>
            <Card  className="fade-in-bottom" sx={{boxShadow: '0px 0px 15px #131313', textAlign: 'left', color: '#fff', background: colors.secondary[600]}}>
                <CardMedia sx={{maxHeight: { sm: '140px', md: '160px', lg: '200px'}, minHeight: { sm: '140px', md: '160px', lg: '200px'}, overflow: 'hidden', background: colors.secondary[600]}}>
                    <img width='100%' src={img} alt="" />
                </CardMedia>
                <CardContent sx={{background: colors.secondary[600], height: '200px', border: colors.secondary[600]}}>
                    <Typography variant={'h4'} sx={{fontWeight: '700'}}>
                        {title}
                    </Typography>
                    <Typography sx={{marginTop: '1rem'}}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{background: colors.secondary[600], color: '#fff'}}>
                    <Button sx={{color: '#fff', '&:hover': {opacity: '.7'}}}>
                        <a href={url} style={{textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center'}} target='_blank'>Live Site <LanguageOutlined sx={{marginLeft: '.5rem'}} /></a>
                    </Button>
                    <Button sx={{color: '#fff', '&:hover': {opacity: '.7'}}}>
                        <a href={githubUrl} style={{textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center'}} target='_blank'>Code <Code sx={{marginLeft: '.5rem'}} /></a>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}