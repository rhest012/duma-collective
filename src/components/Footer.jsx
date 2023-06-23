import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'
// Icons
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {

    let menu = ["Home", "What We Do", "The Grind", "The Buzz", "Get In Touch"];
    let socialIcons = ["AiOutlineInstagram", "AiOutlineTwitter", "FaFacebookF", "AiOutlineInstagram"]

  return (
   <Box bottom="0" width="100vw" marginTop="4rem">
        <Box borderTop="1px solid #1E174B"/>
            <Box display="flex" justifyContent="space-between" width="100vw" paddingX="2rem" paddingY="1rem">
                {menu.map((item, index) => (
                    <Heading variant="h6" key={index}>
                        {item}
                    </Heading>
                ))}
            </Box>
            <Box borderTop="1px solid #1E174B"/>
            <Flex justifyContent="space-between" paddingX="2rem" paddingY="2rem">
                <Box width="40%">
                    <Text>
                        Duma Collective is a pioneering Creative Communications Agency that is reshaping the landscape of creative communication, both within Africa and beyond. Serving as an oasis for African Creativity to thrive, we are dedicated to providing our clients with transformative and influential creative solutions. 
                    </Text>
                </Box>
                <Box display="inline-block">
                    <Heading variant="h6" fontSize="1rem" textAlign="right">
                        Contact Us
                    </Heading>
                    <Text textAlign="right">
                        51 Glenhove, Melrose Estate Johannesburg, 2196<br/>
                        info@dumacollective.com<br/>
                        0104435854​<br/>
                    </Text>
                    <Flex justifyContent="space-between" marginY="0.5rem">
                        <AiOutlineInstagram
                            color="#1E174B"
                            fontSize="1.5rem"
                        />
                        <AiOutlineTwitter
                            color="#1E174B"
                            fontSize="1.5rem"
                        />
                        <FaFacebookF
                            color="#1E174B"
                            fontSize="1.5rem"
                        />
                        <AiOutlineInstagram
                            color="#1E174B"
                            fontSize="1.5rem"
                        />
                    </Flex>
                </Box>
            </Flex>
                
        <Box borderTop="1px solid #1E174B"/>
            <Box>
                <Text variant="p" textAlign="center" width="100%" paddingY="1rem"> 
                    &copy; {new Date().getFullYear()} Duma Collective. All rights reserved. A RHEST design
                </Text>
            </Box>
   </Box>
  )
}

export default Footer