import { Badge, Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const formatDescription = (html) => {
    const text = html.replace(/<[^>]+>/g, '');
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  return (
    <Link 
      to={`/vaga/${job.id}`} 
      state={{ job }} 
      style={{ textDecoration: 'none', width: '100%' }}
    >
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={'white'}
        w="100%"
        _hover={{ shadow: 'lg', transform: 'translateY(-2px)', transition: '0.2s' }}
      >
        <VStack align="start" spacing={3}>
          <Heading size="md">{job.title}</Heading>
          <Text fontWeight="bold" color="teal.500">{job.company}</Text>
          
          <HStack justify="space-between" w="100%">
            <Text fontSize="sm" color="gray.500">{job.location}</Text>
            <Text fontSize="xs" color="gray.400">{job.postedAt}</Text>
          </HStack>

          <HStack spacing={2} wrap="wrap">
            <Badge colorScheme="green">{job.type}</Badge>
            {job.tags && job.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} colorScheme="blue" variant="subtle">
                {tag}
              </Badge>
            ))}
          </HStack>

          <Text fontSize="sm" noOfLines={2}>
            {formatDescription(job.description)}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default JobCard;