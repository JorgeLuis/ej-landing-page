import { Box } from '@chakra-ui/layout'

export default function StyledCard({ children, hasBorder, ...props }) {
  return (
    <Box boxShadow="lg"
      border={hasBorder && `1px solid rgba(158, 158, 158, 0.1)`}
      {...props}
    >
      {children}
    </Box>
  )
}
