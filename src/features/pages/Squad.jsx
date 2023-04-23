import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import SquadImage from '../../assets/squad/SquadOri/Akhona.jpg'
import SquadImage2 from '../../assets/squad/SquadOri/Sabelo.jpg'
import SquadImageHover from '../../assets/squad/SquadHover/Akhona.jpg'
import SquadImageHover2 from '../../assets/squad/SquadHover/Sabelo.jpg'

// actions
import useFetch from '../../actions/useFetchData'

const Squad = () => {
  const headingStyle = {
    fontSize:"7xl", 
    color:"brand.900", 
    textTransform:"uppercase", 
    fontStyle:"700",
    textAlign: "left",
    letterSpacing: "wide",
    lineHeight: "70px"
  }

  const subHeadingStyle = {
    fontfamily: "'Fira Sans', sans-serif",
    weight: "500",
    fontSize: "2xl",
    color:"brand.900", 
    textAlign: "left"
  }

  const preHeadingStyle = {
    fontfamily: "'Fira Sans', sans-serif",
    weight: "500",
    fontSize: "2.5rem",
    color:"brand.900", 
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "tighter",
    lineHeight: "10",
    pb: "10"
  }

  const imageCaption = {
    textAlign : "center",
    pt: "0.25rem"

  }

  const { data:squadData, error, isPending} = useFetch(' http://localhost:8000/staff');
  console.log(squadData)

  return (
    <Box>
        <Grid gridTemplateColumns="60% 40%" marginX="3rem" height="95vh" alignItems="center">
            <GridItem>
              <Stack gap={5}>
              <Flex justifyContent="center" alignItems="center" gap={5}>
               <Box>
                <Box
                    bg={`url(${SquadImage})`}
                    w="239px"
                    h="181px"
                    bgSize="cover"
                    bgPosition="center"
                    boxShadow="none"
                    transition="all  0.7s ease"
                    _hover={{
                      bg: `url(${SquadImageHover})`,
                      w:"239px",
                      h:"181px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                      bgSize:"cover",
                      bgPosition:"center"
                    }}
                  />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
               <Box>
               <Box
                  bg={`url(${SquadImage2})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.7s"
                  _hover={{
                    bg: `url(${SquadImageHover2})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
               <Box>
               <Box
                  bg={`url(${SquadImage})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.65s"
                  _hover={{
                    bg: `url(${SquadImageHover})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
              </Flex>
               <Flex justifyContent="center" alignItems="center" gap={5}>
               <Box>
                <Box
                  bg={`url(${SquadImage})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.65s"
                  _hover={{
                    bg: `url(${SquadImageHover})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
               <Box>
                <Box
                  bg={`url(${SquadImage})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.65s"
                  _hover={{
                    bg: `url(${SquadImageHover})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                  />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
               <Box>
                <Box
                  bg={`url(${SquadImage})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.65s"
                  _hover={{
                    bg: `url(${SquadImageHover})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                  />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
              </Flex>
               <Flex justifyContent="center" alignItems="center" gap={5}>
               <Box>
                <Box
                  bg={`url(${SquadImage})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.65s"
                  _hover={{
                    bg: `url(${SquadImageHover})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
               <Box>
               <Box
                  bg={`url(${SquadImage})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.65s"
                  _hover={{
                    bg: `url(${SquadImageHover})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                  />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
               <Box>
                <Box
                  bg={`url(${SquadImage})`}
                  w="239px"
                  h="181px"
                  bgSize="cover"
                  bgPosition="center"
                  transition="all  0.65s ease"
                  _hover={{
                    bg: `url(${SquadImageHover})`,
                    w:"239px",
                    h:"181px",
                    bgSize:"cover",
                    bgPosition:"center"
                  }}
                  />
                  <Text sx={imageCaption}>
                    The Influenza
                  </Text>
               </Box>
              </Flex>
              </Stack>
            </GridItem>
            <GridItem >
              <Flex flexDir="column" justifyContent="center"  paddingLeft="1.5rem">
                <Text sx={preHeadingStyle}>
                  Whatever you need, <br /> we make it happen
                </Text>
                <Heading sx={headingStyle}>
                    The Blessers
                </Heading>
                <Text sx={subHeadingStyle}>
                - Culture and Partnerships -
                </Text>
              </Flex>
            </GridItem>
        </Grid>
        
        </Box>
  )
}

export default Squad