import React from 'react'
import './styles/styles.css'
import Introduction from './scenes/intro'
import Projects from './scenes/projects'
import About from './scenes/about/index'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Sidebar from './components/sidebar'
import { themeContext } from './theme'
import Contact from './scenes/contact'
import Footer from './scenes/footer'

function App() {
  
  const {theme} = React.useContext(themeContext)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            <Sidebar />
            <Introduction />
        </div>
        <main>
            <About />
            <Projects />
            <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
