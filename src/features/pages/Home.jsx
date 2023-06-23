import { Box, Flex, Grid, GridItem, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import HomeHeader from "../components/HomeHeader"
import { useFetchFirebase } from "../../actions/useFetchFirebase"

const Home = () => {
    const listyling = {
      paddingY:"0.5rem"
    }

    const serviceStyling = {
      flexDirection:"column", 
      backgroundColor:"brand.900" ,
      paddingX:"2rem", 
      alignItems:"center",
      height:"250px", 
      width:"250px",
      flexWrap:"wrap",
      justifyContent:"center",
      borderRadius:"1rem",
    }

    const data = useFetchFirebase('services');
    console.log(data)

  return (
    <>
        <HomeHeader/>
        <Box 
          marginX="2rem"
          marginY="4rem"
        >
          <Text variant="p" as="p" textAlign="center">
            Duma Collective is a Creative Communications Agency in the business of redefining creative communication from Africa, to the world.<br/>  ​
            We are an oasis for African Creativity to flourish and committed to delivering impactful creative solutions for our clients.​
          </Text>
        </Box>
    </>
  )
}

export default Home