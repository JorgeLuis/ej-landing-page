import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Center, Heading, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import StyledCard from '../StyledCard'

const ProyectoCard = ({ title, content, img }) => (
  <StyledCard padding={8} hasBorder>
    <Center>
      <Heading size="sm">{title}</Heading>
    </Center>

    <Image marginTop={2} src={img.src} alt={img.atl} loading="lazy" />
    <Text class="project-details">

      {content}
    </Text>
    <Center>
      <Button variant="ghost">¡Click!</Button>
    </Center>
  </StyledCard>
)

export default function ProyectosSection() {

  const proyectos = [
    {
      title: "Adidas Sports",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas\nratione vel inventore labore commodi modi quos culpa aut saepe!\nAlias!",
      img: {
        src: "images/adidas.JPG",
        alt: "Adidas sports"
      }
    },
    {
      title: "Nike Experience",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas\nratione vel inventore labore commodi modi quos culpa aut saepe!\nAlias!",
      img: {
        src: "images/nike.JPG",
        alt: "Nike experience"
      }
    },
    {
      title: "Puma Runners",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas\nratione vel inventore labore commodi modi quos culpa aut saepe!\nAlias!",
      img: {
        src: "images/puma.JPG",
        alt: "Puma runners"
      }

    },
  ]

  return (
    <Box as="section" id="Proyectos">
      <Center>
        <Heading>Proyectos Implementados</Heading>
      </Center>

      <HStack marginTop={4} spacing={8}>
        {proyectos.map((proyecto) => <ProyectoCard
          title={proyecto.title}
          img={proyecto.img}
          content={proyecto.content}
        />)}
      </HStack>
    </Box>
  )
}
