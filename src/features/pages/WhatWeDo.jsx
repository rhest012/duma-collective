import React from 'react'
import WhatWeDoHeader from '../components/WhatWeDoHeader'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

const WhatWeDo = () => {
  return (
    <>
        <WhatWeDoHeader/>
        <Box 
          marginX="2rem"
          marginY="6rem"
        >
          <Text variant="p" as="p" textAlign="center">
            At Duma Collective we thrive on building brands, driven by creative ideation and insights. ​
            Servicing an array of clients, from FMCG, Energy and Sustainability, Technology and  Enterprise Development, Financial Services to government departments. We drive business growth for our clients through collaborative thinking and the implementation of our service offerings with excellence!​<br/>  ​
            We are an oasis for African Creativity to flourish and committed to delivering impactful creative solutions for our clients.​
          </Text>
        </Box>
        <Box
          marginX="4rem"
          marginY="6rem"
        >
          <Grid gridTemplateColumns="repeat(3, 1fr)" gap="3rem" marginY="4rem">
              <GridItem padding="1rem" border="2px solid #2C245B">
                  <Box marginBottom="-5">
                    <Heading variant="h3" as="h3" textAlign="center">
                      Brand Strategy
                    </Heading>
                    <Text background="#fff" textAlign="center" display="block">
                      & Creative Design
                    </Text>
                  </Box>
              </GridItem>
              <GridItem padding="1rem" border="2px solid #2C245B">
                  <Box marginBottom="-5">
                    <Heading variant="h3" as="h3" textAlign="center">
                      Public
                    </Heading>
                    <Text background="#fff" textAlign="center" display="block">
                      Relations
                    </Text>
                  </Box>
              </GridItem>
              <GridItem padding="1rem" border="2px solid #2C245B">
                  <Box marginBottom="-5">
                    <Heading variant="h3" as="h3" textAlign="center">
                      Social
                    </Heading>
                    <Text background="#fff" textAlign="center" display="block">
                      Media
                    </Text>
                  </Box>
              </GridItem>
          </Grid>
          <Grid gridTemplateColumns="repeat(3, 1fr)" gap="3rem" marginY="4rem">
              <GridItem padding="1rem" border="2px solid #2C245B">
                  <Box marginBottom="-5">
                    <Heading variant="h3" as="h3" textAlign="center">
                      Brand Strategy
                    </Heading>
                    <Text background="#fff" textAlign="center" display="block">
                      & Creative Design
                    </Text>
                  </Box>
              </GridItem>
              <GridItem padding="1rem" border="2px solid #2C245B">
                  <Box marginBottom="-5">
                    <Heading variant="h3" as="h3" textAlign="center">
                      Public
                    </Heading>
                    <Text background="#fff" textAlign="center" display="block">
                      Relations
                    </Text>
                  </Box>
              </GridItem>
              <GridItem padding="1rem" border="2px solid #2C245B">
                  <Box marginBottom="-5">
                    <Heading variant="h3" as="h3" textAlign="center">
                      Social
                    </Heading>
                    <Text background="#fff" textAlign="center" display="block">
                      Media
                    </Text>
                  </Box>
              </GridItem>
          </Grid>
        </Box>
    </>
  )
}

export default WhatWeDo