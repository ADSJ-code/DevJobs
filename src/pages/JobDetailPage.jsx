import { Box, Container, Heading, Text, Button, Badge, Flex, Image, Divider } from '@chakra-ui/react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JobDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const job = location.state?.job;

  useEffect(() => {
    if (!job) {
      navigate('/vagas');
    }
  }, [job, navigate]);

  if (!job) return null;

  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Container maxW="container.md" py={10} flex="1">
        <Button onClick={() => navigate(-1)} mb={6} variant="ghost">
          &larr; Voltar
        </Button>

        <Box bg="white" p={8} borderRadius="lg" boxShadow="sm" border="1px" borderColor="gray.200">
          <Flex align="center" mb={6} gap={4} wrap="wrap">
            {job.logo && (
              <Image 
                src={job.logo} 
                alt={job.company} 
                boxSize="60px" 
                objectFit="contain" 
                fallbackSrc="https://via.placeholder.com/60"
              />
            )}
            <Box>
              <Heading as="h1" size="lg">{job.title}</Heading>
              <Text fontSize="lg" color="gray.600" fontWeight="bold">{job.company}</Text>
            </Box>
          </Flex>

          <Flex gap={2} mb={6} wrap="wrap">
            <Badge colorScheme="blue" px={2} py={1}>{job.type}</Badge>
            <Badge colorScheme="green" px={2} py={1}>{job.location}</Badge>
            <Badge colorScheme="gray" px={2} py={1}>{job.postedAt}</Badge>
          </Flex>

          <Divider my={6} />

          <Box 
            className="job-description" 
            dangerouslySetInnerHTML={{ __html: job.description }} 
            sx={{
              'p': { marginBottom: '1rem', lineHeight: '1.6' },
              'ul': { marginLeft: '1.5rem', marginBottom: '1rem' },
              'li': { marginBottom: '0.5rem' },
              'h2, h3': { fontSize: 'xl', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '1rem' }
            }}
          />

          <Divider my={8} />

          <Button 
            as="a" 
            href={job.url} 
            target="_blank" 
            colorScheme="teal" 
            size="lg" 
            width="full"
          >
            Candidatar-se Agora
          </Button>
        </Box>
      </Container>
      <Footer />
    </Flex>
  );
};

export default JobDetailPage;