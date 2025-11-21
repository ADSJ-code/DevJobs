import { useState, useEffect, useMemo } from 'react';
import { Box, Container, Flex, Heading, Text, VStack, Button, Spinner, Center, Select, HStack } from '@chakra-ui/react';
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
  
  // Novos Estados para Filtros
  const [filterRegion, setFilterRegion] = useState('');
  const [filterType, setFilterType] = useState('');

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

  const getSearchTerms = (term) => {
    const normalized = normalizeText(term);
    const terms = [normalized];
    const synonymMap = {
      'desenvolvedor': 'developer', 'programador': 'developer', 'engenheiro': 'engineer',
      'pleno': 'mid', 'sênior': 'senior', 'senior': 'senior',
      'arquitetura': 'architecture', 'dados': 'data', 'projeto': 'product',
      'remoto': 'remote', 'estagio': 'intern', 'estagiario': 'intern'
    };
    Object.keys(synonymMap).forEach(key => {
      if (normalized.includes(key)) terms.push(synonymMap[key]);
    });
    return terms;
  };

  const filteredJobs = useMemo(() => {
    let result = jobs;

    // 1. Filtro de Busca (Texto)
    if (searchTerm) {
      const searchTerms = getSearchTerms(searchTerm);
      result = result.filter(job => {
        const jobText = normalizeText(job.title + " " + job.company + " " + job.description);
        return searchTerms.some(term => jobText.includes(term));
      });
    }

    // 2. Filtro de Região
    if (filterRegion) {
      result = result.filter(job => 
        normalizeText(job.location).includes(normalizeText(filterRegion))
      );
    }

    // 3. Filtro de Tipo de Contrato
    if (filterType) {
      // A API retorna "full_time", "contract", etc.
      result = result.filter(job => 
        job.type.toLowerCase().includes(filterType.toLowerCase())
      );
    }

    return result;
  }, [searchTerm, jobs, filterRegion, filterType]);

  // Limpar todos os filtros
  const clearAllFilters = () => {
    setFilterRegion('');
    setFilterType('');
    navigate('/vagas', { state: { searchTerm: '' } }); // Limpa a busca também
  };

  return (
    <Flex direction="column" minHeight="100vh" bg={'gray.50'}>
      <Header />
      <Container as="main" maxW="container.md" py={10} flex="1">
        <VStack spacing={6} align="stretch">
          
          {/* Cabeçalho da Página */}
          <Box>
            <Heading as="h2" size="xl" mb={2}>
              {searchTerm ? `Resultados para: "${searchTerm}"` : 'Vagas Recentes'}
            </Heading>
            {!loading && (
              <Text color="gray.600">
                {filteredJobs.length} vaga(s) encontrada(s).
              </Text>
            )}
          </Box>

          {/* BARRA DE FILTROS */}
          <Box bg="white" p={4} borderRadius="md" shadow="sm">
            <Text fontSize="sm" fontWeight="bold" mb={2} color="gray.600">Filtrar por:</Text>
            <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
              <Select 
                placeholder="Qualquer Região" 
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                size="sm"
              >
                <option value="worldwide">Mundial (Worldwide)</option>
                <option value="usa">Estados Unidos</option>
                <option value="europe">Europa</option>
                <option value="latam">América Latina</option>
                <option value="brazil">Brasil</option>
              </Select>

              <Select 
                placeholder="Qualquer Contrato" 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                size="sm"
              >
                <option value="full_time">Tempo Integral (Full Time)</option>
                <option value="contract">Contrato (PJ)</option>
                <option value="part_time">Meio Período</option>
                <option value="freelance">Freelance</option>
              </Select>

              {(filterRegion || filterType || searchTerm) && (
                <Button 
                  size="sm" 
                  colorScheme="red" 
                  variant="ghost" 
                  onClick={clearAllFilters}
                >
                  Limpar
                </Button>
              )}
            </Flex>
          </Box>

          {/* LISTAGEM */}
          {loading ? (
            <Center py={10}>
              <Spinner size="xl" color="teal.500" thickness="4px" />
            </Center>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" mb={4}>
                Nenhum resultado com esses filtros.
              </Text>
              <Button onClick={clearAllFilters} colorScheme="teal" variant="link">
                Limpar Filtros
              </Button>
            </Box>
          )}
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default JobsListPage;