import React from "react";
import Project from "../../components/project";
import { projectsData } from "../../data/data";
import { Typography, Box, Grid } from "@mui/material";
import { tokens } from "../../theme";

export default function Projects(){
    const colors = tokens
    
    return (
        <Box className='section__margin gradient__bg' id='projects' sx={{textAlign: 'center', color: '#fff', padding: '6rem 3rem'}}>
            <Typography variant="h1" sx={{fontWeight: 600, textShadow: '0px 0px 5px #131313'}}>
                Projects
            </Typography>
            <Typography variant="h5" sx={{marginTop: '1rem'}}>
                A few projects I've completed throughout my journey
            </Typography>
            <Box sx={{marginTop: {xs: '5rem'}, display: 'flex', justifyContent: 'center'}}>
                <Grid container spacing={4} maxWidth={'lg'} sx={{display: 'flex', justifyContent: 'center'}}>
                    {projectsData.map(project => <Project img={project.img} githubUrl={project.githubUrl} title={project.title} icons={project.icons} description={project.description} url={project.url} />)}
                </Grid>
            </Box>
        </Box>
    )
}