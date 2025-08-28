import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center" bg={'gray.100'}>
      <Text fontSize="sm" color="gray.600">
        © 2025 DevJobs. Criado para fins de portfólio.
      </Text>
    </Box>
  );
};

export default Footer;