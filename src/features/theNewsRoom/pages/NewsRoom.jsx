import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import SibuMabena from '../../../assets/newsroom/SibuMabena.jpg'
import NewsRoomHeader from '../components/NewsRoomHeader'

const NewsRoom = () => {
  const buttonStyle = {
    color:"#fff", 
    background:"#1E174B",
    border: "1px solid #1E174B",
    paddingY:"1.25rem",
    borderRadius:"2rem",
    width:"125px",

    _hover: {
      background:"transparent",
      border: "1px solid #1E174B",
      color: "#1E174B"
    }

  }

  return (
    <Box> 
      <NewsRoomHeader/>
      <Grid gridTemplateColumns="30% 70%" marginX="2.5rem" marginTop="3rem" gap="2rem" paddingY="2.5rem" borderTop="1.5px solid #1E174B" borderBottom="1.5px solid #1E174B">
          <GridItem>
            <Image src={SibuMabena}/>
          </GridItem>
          <GridItem >
            <Flex height="100%" flexDirection="column" flexWrap="wrap" justifyContent="space-between">
              <Stack>
                <Heading as="h3">
                  Sibu Mabena wins big award!
                </Heading>
                <Text fontFamily="Fira Sans Condensed" fontSize="1.25rem" textTransform="uppercase">19 February 2023</Text>
              </Stack>
              <Text maxWidth="600px">
                The Founder and Chief Creative Officer of Duma Collective 
                walked away with the headlining award for the Prestigious 
                Inverroche Future is Female, making her the first recipient 
                in Africa…​
              </Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
            </Flex>
          </GridItem>
      </Grid>
      <Grid gridTemplateColumns="30% 70%" marginX="2.5rem" gap="2rem" paddingY="2.5rem" borderBottom="1.5px solid #1E174B">
          <GridItem>
            <Image src={SibuMabena}/>
          </GridItem>
          <GridItem >
            <Flex height="100%" flexDirection="column" flexWrap="wrap" justifyContent="space-between">
              <Stack>
                <Heading as="h3">
                  Sibu Mabena wins big award!
                </Heading>
                <Text fontFamily="Fira Sans Condensed" fontSize="1.25rem" textTransform="uppercase">19 February 2023</Text>
              </Stack>
              <Text maxWidth="600px">
                The Founder and Chief Creative Officer of Duma Collective 
                walked away with the headlining award for the Prestigious 
                Inverroche Future is Female, making her the first recipient 
                in Africa…​
              </Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
            </Flex>
          </GridItem>
      </Grid>
      <Grid gridTemplateColumns="30% 70%" marginX="2.5rem" gap="2rem" paddingY="2.5rem" borderBottom="1.5px solid #1E174B">
          <GridItem>
            <Image src={SibuMabena}/>
          </GridItem>
          <GridItem >
            <Flex height="100%" flexDirection="column" flexWrap="wrap" justifyContent="space-between">
              <Stack>
                <Heading as="h3">
                  Sibu Mabena wins big award!
                </Heading>
                <Text fontFamily="Fira Sans Condensed" fontSize="1.25rem" textTransform="uppercase">19 February 2023</Text>
              </Stack>
              <Text maxWidth="600px">
                The Founder and Chief Creative Officer of Duma Collective 
                walked away with the headlining award for the Prestigious 
                Inverroche Future is Female, making her the first recipient 
                in Africa…​
              </Text>
              <Button sx={buttonStyle}>
                Read Article
              </Button>
            </Flex>
          </GridItem>
      </Grid>
    </Box>
  )
}

export default NewsRoom