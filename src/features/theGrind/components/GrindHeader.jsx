import { Flex, Heading, Text } from '@chakra-ui/react'
import HeaderBackground from '../../../assets/headers/grind-header.jpg'

const GrindHeader = () => {
  return (
    <Flex 
      height="90vh" 
      width="100wh" 
      backgroundImage={HeaderBackground}
      backgroundSize="cover"
      flexDir="column"
      padding="2rem"
      gap="4rem"
      flexWrap="wrap"
      justifyContent="flex-end"
    >
        <Heading 
            variant="h1"
            color="#fff"
            width="40%"
        >
            Our Expertise and Creative Approach
        </Heading>
        <Heading
            width="40%"
            variant="h6"
            color="#fff"
        >
            Duma Collective in action from branding, and creative strategy to PR, Social Media, Influencer Marketing, Events, Production, and Talent Procurement.
        </Heading>
    </Flex>
  )
}

export default GrindHeader