import { Box, Flex, Grid, GridItem, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import HomeHeader from "../components/HomeHeader"
import StockImage from "../../assets/placeholder.jpg"


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
        <Box
          marginX="2rem"
          marginTop="4rem"
        >
            <Heading 
              textAlign="center"
              paddingBottom="2rem"
            >
              Services
            </Heading>
        </Box>
        <Grid
          marginBottom="4rem"
          gridTemplateColumns="repeat(3, 1fr)"
      
        >
          <GridItem  
            height="250px" 
            width="220px"
            paddingLeft="350px"
            zIndex="2"
            marginY="3rem"
          >
            <Flex sx={serviceStyling}>
                <UnorderedList>
                  <ListItem sx={listyling}>
                    <Heading variant="h6" color="#fff">
                      Brand Strategy & Creative Strategy
                    </Heading>
                  </ListItem>
                  <ListItem sx={listyling}>
                    <Heading variant="h6" color="#fff">
                      Talent Procurement
                    </Heading>
                  </ListItem>
                  <ListItem sx={listyling}>
                    <Heading variant="h6" color="#fff">
                      Events & Production
                    </Heading>
                  </ListItem>
                </UnorderedList>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex justifyContent="center">
              <Image
                zIndex="-100"
                position="absolute"
                src={StockImage}
                height="600px"
                width="400px"
                right="465"
              />
            </Flex>
          </GridItem>
          <GridItem
            marginTop="19rem"
            height="250px" 
            width="220px"
            paddingRight="500px"
            zIndex="0"
            position="relative"
          
          >
            <Flex sx={serviceStyling}>
              <UnorderedList>
                <ListItem sx={listyling}>
                  <Heading variant="h6" color="#fff">
                    Influencer Marketing
                  </Heading>
                </ListItem>
                <ListItem sx={listyling}>
                  <Heading variant="h6" color="#fff">
                    Public Relations
                  </Heading>
                </ListItem>
                <ListItem sx={listyling}>
                  <Heading variant="h6" color="#fff">
                    Social Media
                  </Heading>
                </ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>
    </>
  )
}

export default Home