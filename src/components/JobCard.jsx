import { Badge, Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const levelColor = { 'Júnior': 'green', 'Pleno': 'blue', 'Sênior': 'purple' };
  return (
    <Link to={`/vaga/${job.id}`} style={{ textDecoration: 'none', width: '100%' }}>
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
          <Text fontSize="sm" color="gray.500">{job.location}</Text>
          <HStack spacing={2}>
            <Badge colorScheme="gray">{job.type}</Badge>
            <Badge colorScheme={levelColor[job.level] || 'gray'}>{job.level}</Badge>
          </HStack>
          <Text fontSize="sm" noOfLines={2}>
            {job.description}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default JobCard;