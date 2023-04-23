import { Flex, Heading } from '@chakra-ui/react'
import WhatWeDoHeaderBg from '../../assets/headers/What-We-Do-header.jpg'
import React from 'react'

const WhatWeDoHeader = () => {
  return (
    <Flex 
        height="90vh" 
        width="100wh" 
        backgroundImage={WhatWeDoHeaderBg}
        backgroundSize="cover"
        flexDir="column"
        padding="2rem"
        gap="6rem"
        flexWrap="wrap"
        alignContent="flex-end"
        justifyContent="flex-end"
      >
          <Heading 
            variant="h1"
            color="brand.900"
            width="40%"
            textAlign="right"
        >
            What we do at Duma Collective
        </Heading>
        <Heading
            width="40%"
            variant="h6"
            color="brand.900"
            textAlign="right"
        >
            We bring campaigns to life through branding and creative strategy, PR, Social Media, Influencer Marketing, Events, Production, and Talent Procurement.
        </Heading>
      </Flex>
  )
}

export default WhatWeDoHeader