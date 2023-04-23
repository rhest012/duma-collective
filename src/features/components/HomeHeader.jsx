import { Flex, Heading } from '@chakra-ui/react'
import HomeHeaderBackground from '../../assets/headers/home-header.jpg'

const HomeHeader = () => {
  return (
    <Flex 
      height="90vh" 
      width="100wh" 
      backgroundImage={HomeHeaderBackground}
      backgroundSize="cover"
      flexDir="column"
      padding="2rem"
      gap="4rem"
      flexWrap="wrap"
      justifyContent="center"
    >
        <Heading 
            variant="h1"
            color="#fff"
            width="40%"
        >
            Looking for a 360 Campaign? <br/>Let's Talk.
        </Heading>
    </Flex>
  )
}

export default HomeHeader