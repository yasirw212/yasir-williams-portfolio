import { Container, Box, Typography, Link } from "@mui/material";
import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

export default function Footer(){

    return (
        <Box className=" gradient__bg" sx={{height: '15vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff'}}>
            <Typography variant="h5" className="website-rights">© Yasir Williams 2022. All Rights Reserved</Typography>
            <Box display={'flex'} marginTop={'.75rem'}>
                <Typography sx={{marginRight: '.5rem'}}><Link sx={{color: '#fff', '&:hover': {opacity: '.75'}, }} href="https://www.linkedin.com/in/yasir-williams-394b9b76/" target={"_blank"}><LinkedIn /></Link></Typography>
                <Typography sx={{marginRight: ".5rem"}}><Link sx={{color: '#fff', '&:hover': {opacity: '.75'}}} href="https://github.com/yasirw212" target={"_blank"}><GitHub /></Link></Typography>
            </Box>
        </Box>
    )
}