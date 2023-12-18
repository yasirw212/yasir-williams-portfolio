import ownxmind from '.././assets/ownxmind.jpg'
import jamming from '.././assets/jammin.jpg'
import openAI from '.././assets/openai.jpg'
import quizzical from '.././assets/project2.jpg'
import speedtyping from '.././assets/speedtyping.jpg'
import handySocal from '.././assets/handysocal.jpg'
import yasirwilliams from '.././assets/yasirwilliams.jpeg'

import react from '.././assets/react-48.png'
import redux from '.././assets/redux-48.png'
import materialUI from '.././assets/material-ui-48.png'
import api from '.././assets/api-48.png'
import mongodb from '.././assets/mongodb-48.png'
import nodejs from '.././assets/nodejs-48.png'
import express from '.././assets/express-48.png'
import javascript from '.././assets/javascript-48.png'
import html from '.././assets/html-48.png'
import css from '.././assets/css-48.png'
import figma from '.././assets/figma-48.png'
import github from '.././assets/github-48.png'
import git from '.././assets/git-48.png'
import vsCode from '.././assets/visual-studio-code-48.png'
import postgresql from '.././assets/postgresql-48.png'



const projectsData = [
    {
        img: handySocal,
        title: 'Quintero Construction',
        description: "This is a 27 page website created for a handyman service provider located in Southern California by the name of Quintero Construction. This is the site I have most enjoyed creating and shows my skill set very well.",
        url: 'https://quinteroconstruction.netlify.app',
        githubUrl: 'https://github.com/yasirw212/HandySoCal-frontend'
    },
    {
        img: ownxmind,
        title: "OwnxMind",
        description: "Fully functional E-commerce website for an upcoming brand 'OwnxMind' using Stripe integration to process payment and EmailJS to process and receive client contact forms.",
        url: 'https://ownxmind.netlify.app/',
        githubUrl: 'https://github.com/yasirw212/ownxmind-site'
    },
    {
        img: yasirwilliams,
        title: 'My Portfolio',
        description: "My personal portfolio site compiled with a few of my favorite projects(which you are currently viewing lol). It is not my most complex work but nice on the eyes and easy to navigate making it good for user interaction.",
        url: 'https://yasirwilliamsportfolio.netlify.app/',
        githubUrl: 'https://github.com/yasirw212/jamming' 
    },
    {
        img: jamming,
        title: 'Jamming',
        description: "Jamming Uses the spotify web developer api to allow clients to sign in to their spotify account using OAuth, search for tracks, add them into a playlist and then save that playlist to their spotify account.",
        url: 'https://jamwithspotify.netlify.app/',
        githubUrl: 'https://github.com/yasirw212/jamming' 
    },

    {
        img: speedtyping,
        title: 'Speed Typing',
        description: 'A web application allowing users to test their typing speed by seeing how many words they can type before the timer runs out.',
        url: 'https://unique-blini-1d7935.netlify.app',
        githubUrl: 'https://github.com/yasirw212/speed-typing'
    },
]

const technologyData = [
    {
        name: 'Javascript',
        icon: javascript
    },
    {
        name: 'HTML',
        icon: html
    },
    {
        name: 'CSS',
        icon: css
    },
    {
        name: 'React',
        icon: react
    },
    {
        name: 'Redux',
        icon: redux
    },
    {
        name: 'Node.js',
        icon: nodejs
    },
    {
        name: 'Express',
        icon: express
    },
    {
        name: 'Postgresql',
        icon: postgresql
    },
    {
        name: 'MongoDB',
        icon: mongodb
    },
    {
        name: 'API',
        icon: api
    },
    {
        name: 'Material UI',
        icon: materialUI
    },

    {
        name: 'GitHub',
        icon: github
    },
    {
        name: 'Git',
        icon: git
    }
]

export {projectsData, technologyData}