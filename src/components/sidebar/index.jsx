import React from "react"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import "react-pro-sidebar/dist/css/styles.css"
import { Typography, Box, IconButton, useTheme, useMediaQuery } from "@mui/material"
import { HomeOutlined} from "@mui/icons-material"
import { HandymanOutlined } from "@mui/icons-material"
import { MailOutlined } from "@mui/icons-material"
import { PersonOutline } from "@mui/icons-material"
import { MenuOutlined } from "@mui/icons-material"
import { Code } from "@mui/icons-material"
import { tokens } from "../../theme"



const Item = ({title, to, icon, selected, setSelected}) => {

    return (
       <MenuItem active={selected == title}
        
         onClick={()=>setSelected(prev => title)}
         icon={icon}
         >
            <a href={to}>
                <Typography>
                    {title}
                </Typography>
            </a>
       </MenuItem>
    )
}

export default function Sidebar(){
    const colors = tokens
    const [isCollapsed, setIsCollapsed] = React.useState(true)
    const [selected, setSelected] = React.useState('Home')
    const [scrollPos, setScrollPos] = React.useState(window.scrollY)
    const isNonMobile = useMediaQuery("(min-width: 900px)")
    const isMobile = useMediaQuery("(max-width: 900px)")
    window.addEventListener('scroll', function(){
        setScrollPos(prevPos => this.window.scrollY)
    })



    return (
        <Box 
          sx={{
            "& .pro-sidebar-inner": {
                background: "-moz-linear-gradient(90deg, rgba(0, 78, 146, 1) 0%, rgba(0, 62, 117, 1) 87%)",

                /* safari 5.1+,chrome 10+ */
                background: "-webkit-linear-gradient(90deg, rgba(0, 78, 146, 1) 0%, rgba(0, 62, 117, 1) 87%)",
            
                /* opera 11.10+ */
                background: "-o-linear-gradient(90deg, rgba(0, 78, 146, 1) 0%, rgba(0, 62, 117, 1) 87%)",
            
                /* ie 6-9 */
                filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#003E75', endColorstr='#004E92', GradientType=0 )",
            
                /* ie 10+ */
                background: "-ms-linear-gradient(90deg, rgba(0, 78, 146, 1) 0%, rgba(0, 62, 117, 1) 87%)",
            
                /* global 94%+ browsers support */
                background: "linear-gradient(90deg, rgba(0, 78, 146, 1) 0%, rgba(0, 62, 117, 1) 87%)",
            },
            "& .pro-icon-wrapper": {
                backgroundColor: 'transparent !important'
            },
            "& .pro-inner-item": {
                padding: "5px 35px",
            },
            "& .pro-inner-item: hover": {
                color: "#868dfb !important" 
            },
            "& .pro-menu-item-active": {
                color: "#6870fa !important"
            },
            position: window.innerWidth > 600 ? 'fixed' : 'relative',
            position: {xs: scrollPos > 350 && window.innerWidth < 900 ? 'fixed' : 'relattive', md: 'fixed'},
            height: isMobile ? '50%' : undefined,
            zIndex: 999,
            right: {xs: 0, md: isNonMobile ? 0 : '100%'},
            boxShadow: `0px 0px 5px ${colors.primary[800]}`
          }}
        >
        <ProSidebar collapsed={isCollapsed} className='gradient__bg'>
                <Menu iconShape="square">
                    <MenuItem
                    onClick={()=> setIsCollapsed(prev => !prev)}
                    icon={isCollapsed ? <MenuOutlined /> : undefined}
                    style={{
                        margin: '10px 0 20px 0',
                       
                    }}
                    >
                    {!isCollapsed && (
                        <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        ml={'15px'}
                        >
                            <Typography variant="h3" >
                                YW
                            </Typography>
                            <IconButton onClick={()=>setIsCollapsed(prev => !prev)}>
                                <MenuOutlined />
                            </IconButton>
                        </Box>
                    )}
                    </MenuItem>

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item 
                        title={"Home"}
                        to={'#'}
                        icon={<HomeOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title={"About Me"}
                        to={'#about'}
                        icon={<PersonOutline />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title={"Projects"}
                        to={'#projects'}
                        icon={<HandymanOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title={"Contact"}
                        to={'#contact'}
                        icon={<MailOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                        />
              
                    </Box>
                </Menu>
            </ProSidebar>
       
        </Box>
    )
}