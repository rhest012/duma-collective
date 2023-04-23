import { Box, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import GrindHeader from '../components/GrindHeader'
import NbaAfricaLogo from '../../../assets/theGrind/Nba_Africa/NBA_Africa_Logo.svg'
import MultichoiceLogo from '../../../assets/theGrind/Multichoice/Multichoice_Logo.svg'
import JffLogo from '../../../assets/theGrind/jff/JFF_Logo.svg'
import { Link, Link as ReachLink} from 'react-router-dom'
import ClientLogo1 from '../../../assets/theGrind/clientLogos/Coca_Cola.svg'

const TheGrind = () => {
  return (
    <>
      <GrindHeader/>
      <Grid marginX="4rem" marginY="6rem" gridTemplateColumns="30% 70%">
        <GridItem>
          <Flex height="100%" justifyContent="center" alignItems="center">
            <Heading varinat="h3" as="h3" textAlign="center">
              Shoutout To <br/>
              Our Clients
            </Heading>
          </Flex>
        </GridItem>
        <GridItem width="100%">
            <Grid gridTemplateColumns="repeat(4, 1fr)" gap="2rem" marginY="2rem">
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
            </Grid>  
            <Grid gridTemplateColumns="repeat(4, 1fr)" gap="2rem" marginY="2rem">
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
            </Grid>  
            <Grid gridTemplateColumns="repeat(4, 1fr)" gap="2rem" marginY="2rem">
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
            </Grid>  
            <Grid gridTemplateColumns="repeat(4, 1fr)" gap="2rem" marginY="2rem">
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
                <GridItem width="100%" border="2px solid #2C245B" padding="2rem">
                  <Image
                    src={ClientLogo1}
                    width="500px"
                  />
                </GridItem>
            </Grid>  
        </GridItem>
      </Grid>
      <Box
        marginY="6rem"
        marginX="2rem"
      > 
        <Heading 
          variant="h3" 
          as="h3"
          textAlign="center"
          paddingBottom="2rem">
          Case Studies
        </Heading>
        <Grid gridTemplateColumns="repeat(3, 1fr)">
          <GridItem>
            <Flex justifyContent="center" alignItems="center">
              <Link>
                <Image
                  src={NbaAfricaLogo}
                  width="400px"
                  height="155px"
                />  
              </Link>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex justifyContent="center" alignItems="center">
              <Link>
                <Image
                  src={MultichoiceLogo}
                  width="400px"
                  height="155px"
                />  
              </Link>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex justifyContent="center" alignItems="center">
              <Link 
                as={ReachLink} 
                to="/grind/jff"
              >
                <Image
                  src={JffLogo}
                  width="400px"
                  height="155px"
                />  
              </Link>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default TheGrind