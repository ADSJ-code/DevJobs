import { Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box as="main" flex="1">
      </Box>
      <Footer />
    </Flex>
  )
}

export default App