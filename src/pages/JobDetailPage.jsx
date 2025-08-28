import { Box, Container, Flex, Heading, Text, VStack, Button, Divider, Badge, HStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { jobs } from '../data/mockJobs';

const JobDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === parseInt(id));

  const levelColor = { 'Júnior': 'green', 'Pleno': 'blue', 'Sênior': 'purple' };

  if (!job) {
    return (
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Flex flex="1" align="center" justify="center">
          <VStack>
            <Heading>Vaga não encontrada</Heading>
            <Button onClick={() => navigate('/')} colorScheme="teal">Voltar para a Home</Button>
          </VStack>
        </Flex>
        <Footer />
      </Flex>
    );
  }

  return (
    <Flex direction="column" minHeight="100vh" bg={'gray.50'}>
      <Header />
      <Container as="main" maxW="container.md" py={10} flex="1">
        <VStack spacing={5} align="stretch">
          <Button onClick={() => navigate(-1)} maxW="150px">
            ← Voltar para a lista
          </Button>
          <Box p={8} shadow="md" borderWidth="1px" borderRadius="lg" bg={'white'}>
            <VStack align="start" spacing={4}>
              <Heading size="lg">{job.title}</Heading>
              <Heading size="md" color="teal.500">{job.company}</Heading>
              <Text fontWeight="bold" color="gray.500">{job.location}</Text>
              <HStack spacing={3}>
                <Badge fontSize="md" p={2} borderRadius="md" colorScheme="gray">{job.type}</Badge>
                <Badge fontSize="md" p={2} borderRadius="md" colorScheme={levelColor[job.level] || 'gray'}>{job.level}</Badge>
              </HStack>
              <Divider my={4} />
              <Heading size="sm" textTransform="uppercase">Descrição da Vaga</Heading>
              <Text>
                {job.description}
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default JobDetailPage;