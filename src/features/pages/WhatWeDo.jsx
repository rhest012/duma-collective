import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import SecondaryHeader from '../components/SecondaryHeader'
import ServiceList from '../components/ServiceList'
import LandscapeImageOne from '../../assets/bodyImages/DumaImage01.jpg'
import PortraitImageOne from '../../assets/bodyImages/DumaImage02.jpg'
import { useLocation } from 'react-router-dom'
import PageIntro from '../theGrind/components/pageIntro'

const WhatWeDo = () => {
  const location = useLocation();
  const pageLocation = location.pathname

  return (
    <Box>
      <SecondaryHeader pageLocation={pageLocation}/>
      <PageIntro pageLocation={pageLocation}/>
      <ServiceList/>
      <Flex justifyContent="space-between" marginY="4rem" marginX="2rem">
        <Image src={LandscapeImageOne} height="270px" width="auto"/>
        <Image src={PortraitImageOne} height="270px" width="auto"/>
        <Image src={LandscapeImageOne} height="270px" width="auto"/>
        <Image src={PortraitImageOne} height="270px" width="auto"/>
      </Flex>
      </Box>
  )
}

export default WhatWeDo