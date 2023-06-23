import { Flex, Heading, Text } from '@chakra-ui/react'
import HomeHeaderBackground from '../../assets/headers/home-header.jpg'

const HomeHeader = () => {
  return (
    <Flex 
    height="90vh" 
    width="100wh" 
    flexDir="column"
    paddingY="2rem"
    paddingX="4rem"
    flexWrap="wrap"
    justifyContent="flex-end"
    borderBottom="1px solid #1a202c"
    >
        <Heading 
          variant="h1"
          width="70%"
          marginBottom="3rem"
        >
            Redefining creative communications from Africa to the world 
        </Heading>
        <Text
          textAlign="right"
          paddingLeft="60%"
          variant="p"
        >
         Duma Collective in action from branding, and creative strategy to PR, Social Media, Influencer Marketing, Events, Production, and Talent Procurement.
        </Text>
    </Flex>
  )
}

export default HomeHeader