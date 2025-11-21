import { useState, useEffect, useMemo } from 'react';
import { Box, Container, Flex, Heading, Text, VStack, Button, Spinner, Center } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import { fetchJobs } from '../services/api';

const JobsListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = location.state?.searchTerm || '';
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      const data = await fetchJobs();
      setJobs(data);
      setLoading(false);
    };
    loadJobs();
  }, []);

  const normalizeText = (text) => {
    return text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
  };

  const filteredJobs = useMemo(() => {
    if (!searchTerm) return jobs;
    
    const normalizedTerm = normalizeText(searchTerm);

    return jobs.filter(job =>
      normalizeText(job.title).includes(normalizedTerm) ||
      normalizeText(job.company).includes(normalizedTerm) ||
      normalizeText(job.description).includes(normalizedTerm)
    );
  }, [searchTerm, jobs]);

  return (
    <Flex direction="column" minHeight="100vh" bg={'gray.50'}>
      <Header />
      <Container as="main" maxW="container.md" py={10} flex="1">
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={2}>
              {searchTerm ? `Resultados para: "${searchTerm}"` : 'Vagas Recentes (Remoto)'}
            </Heading>
            {!loading && (
              <Text color="gray.600">
                {filteredJobs.length} vaga(s) encontrada(s).
              </Text>
            )}
          </Box>

          {loading ? (
            <Center py={10}>
              <Spinner size="xl" color="teal.500" thickness="4px" />
            </Center>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" mb={4}>
                Nenhuma vaga encontrada para "{searchTerm}".
              </Text>
              <Button onClick={() => navigate('/')} colorScheme="teal" variant="link">
                Limpar Filtros
              </Button>
            </Box>
          )}

          <Button 
            onClick={() => navigate('/')} 
            colorScheme="teal" 
            variant="outline" 
            alignSelf="flex-start"
          >
            Nova Busca
          </Button>
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default JobsListPage;