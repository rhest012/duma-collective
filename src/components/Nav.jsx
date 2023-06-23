import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import Logo from "../assets/Duma-Collective-Logo.svg"
import React from 'react'
import { Links } from '../styles/Navbar.style'
import { Link, NavLink, Link as ReachLink, useLocation} from 'react-router-dom'

const Nav = () => {
    const menuItems = [
        {
            name: "Home",
            url : "/",
        },
        {
            name: "What We Do",
            url : "/what-we-do",
        },
        {
            name: "The Grind",
            url : "/the-grind",
        },
        {
            name: "The Squad",
            url : "/the-squad",
        },
        {
            name: "The Buzz",
            url : "/the-buzz",
        },
        {
            name: "Get In Touch",
            url : "/get-in-touch",
        },
    ]

  return (
    <Flex 
        height="80px"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="1rem"
    >  
        <Box marginLeft="2rem">
            <Image
                src={Logo}
                height="60px"
            />
        </Box>
        <Box display="flex" justifyContent="flex-end" paddingRight="2rem" gap="4rem">
        {/* {menuItems.map((menuItem, index) => { */}
            <NavLink to="/">
                <Heading variant="h6" fontSize="1rem">
                    Home
                </Heading>
            </NavLink>
            <NavLink to="/what-we-do">
                <Heading variant="h6" fontSize="1rem">
                    What We Do
                </Heading>
            </NavLink>
            <NavLink to="/the-grind">
                <Heading variant="h6" fontSize="1rem">
                    The Grind
                </Heading>
            </NavLink>
            <NavLink to="/the-squad">
                <Heading variant="h6" fontSize="1rem">
                    The Squad
                </Heading>
            </NavLink>
            <NavLink to="/the-buzz">
                <Heading variant="h6" fontSize="1rem">
                    The Buzz
                </Heading>
            </NavLink>
            <NavLink to="/get-in-touch">
                <Heading variant="h6" fontSize="1rem">
                    Get In Touch
                </Heading>
            </NavLink>
        {/* })} */}
        </Box>


    </Flex>
  )
}

export default Nav