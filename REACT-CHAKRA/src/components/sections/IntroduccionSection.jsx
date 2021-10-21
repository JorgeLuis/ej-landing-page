import { Image } from '@chakra-ui/image'
import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import StyledCard from '../StyledCard'

export default function IntroduccionSection() {
  return (
    <HStack spacing={8} as="section">
      <StyledCard boxShadow="lg">
        <Image src="images/sal.jpg" alt="jane-doe" loading="lazy" objectFit="cover" />
      </StyledCard>

      <StyledCard
        width="60%"
        paddingX={6}
        paddingY={8}
        hasBorder
      >
        <Heading>¡Hay Equipo!</Heading>
        <Text marginTop={4}>
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi
          porta
          gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur
          ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
        </Text>
      </StyledCard>
    </HStack>
  )
}
