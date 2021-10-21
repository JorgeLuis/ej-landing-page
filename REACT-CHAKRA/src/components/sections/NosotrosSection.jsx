import { Box, Center, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import StyledCard from '../StyledCard'

export default function NosotrosSection() {
  return (
    <Box as="section" id="Nosotros">
      <StyledCard
        paddingX={6}
        paddingY={8}
        hasBorder
      >
        <Center>
          <Heading>Nosotros</Heading>
        </Center>

        <Text textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
          autem deleniti cupiditate molestias quis unde quae totam porro dicta
          iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus
        </Text>

        <Text textAlign="center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          nostrum dolor minus, libero delectus praesentium perferendis
        </Text>

        <Text textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          consequuntur labore? Ea totam voluptas amet!
        </Text>
      </StyledCard>
    </Box>
  )
}
