import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import { ReactComponent as HTML5Icon } from '../../assets/icons/icons8-html-5.svg'
import { ReactComponent as CSS3Icon } from '../../assets/icons/icons8-css3.svg'
import { ReactComponent as JavascriptIcon } from '../../assets/icons/icons8-javascript.svg'
import { ReactComponent as BootstrapIcon } from '../../assets/icons/icons8-bootstrap.svg'
import { ReactComponent as ReactIcon } from '../../assets/icons/icons8-react-native.svg'
import { ReactComponent as GitIcon } from '../../assets/icons/icons8-git.svg'
import StyledCard from '../StyledCard'

/* TODO: Usar un map para la lista de tecnologias */
export default function TecnologiasSection() {
  return (
    <Box as="section" id="Habilidades">
      <Center>
        <Heading>Tecnologías</Heading>
      </Center>

      <Center marginTop={8}>
        <SimpleGrid as="section" columns={3} spacingX={64} spacingY={10} paddingX={32}>
          {/* TODO: Implementar icon card component */}
          <StyledCard width="80%" borderRadius="5%">
            <HTML5Icon alt="HTML5 Icon" />
          </StyledCard>

          <StyledCard width="80%" borderRadius="5%">
            <JavascriptIcon alt="Javascript icon" />
          </StyledCard>

          <StyledCard width="80%" borderRadius="5%">
            <CSS3Icon alt="CSS3 icon" />
          </StyledCard>

          <StyledCard width="80%" borderRadius="5%">
            <BootstrapIcon alt="Bootstrap icon" />
          </StyledCard>

          <StyledCard width="80%" borderRadius="5%">
            <ReactIcon alt="React icon" />
          </StyledCard>

          <StyledCard width="80%" borderRadius="5%">
            <GitIcon alt="Git icon" />
          </StyledCard>
        </SimpleGrid >
      </Center >
    </Box>
  )
}
