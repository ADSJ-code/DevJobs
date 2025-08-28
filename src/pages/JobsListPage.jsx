import { useMemo } from 'react';
import { Box, Container, Flex, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import { jobs } from '../data/mockJobs';

const JobsListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = location.state?.searchTerm || '';

  const filteredJobs = useMemo(() => {
    if (!searchTerm) {
      return jobs;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return jobs.filter(job =>
      job.title.toLowerCase().includes(lowercasedTerm) ||
      job.company.toLowerCase().includes(lowercasedTerm) ||
      job.description.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  return (
    <Flex direction="column" minHeight="100vh" bg={'gray.50'}>
      <Header />
      <Container as="main" maxW="container.md" py={10} flex="1">
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl">
              Vagas Encontradas
            </Heading>
            <Text mt={2}>{`${filteredJobs.length} vaga(s) encontrada(s).`}</Text>
          </Box>

          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <Text>Nenhuma vaga encontrada para sua busca.</Text>
          )}

          <Button onClick={() => navigate('/')} colorScheme="teal" variant="outline" maxW="200px">
            Nova Busca
          </Button>
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default JobsListPage;