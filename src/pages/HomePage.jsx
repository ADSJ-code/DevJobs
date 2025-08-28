import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Flex, Heading, Input, Button, Text, HStack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/vagas', { state: { searchTerm: searchTerm } });
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box as="main" flex="1" display="flex" alignItems="center">
        <Container maxW="container.md" textAlign="center" py={10}>
          <Heading as="h2" size="2xl" mb={4}>
            Encontre sua próxima vaga Dev.
          </Heading>
          <Text fontSize="lg" color="gray.500" mb={8}>
            Oportunidades de tecnologia a uma busca de distância.
          </Text>
          <HStack as="form" spacing={3} onSubmit={handleSearch}>
            <Input
              variant="filled"
              placeholder="Cargo, tecnologia ou empresa..."
              size="lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              colorScheme="teal"
              size="lg"
              px={8}
              leftIcon={<SearchIcon />}
              type="submit"
            >
              Buscar
            </Button>
          </HStack>
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
};

export default HomePage;