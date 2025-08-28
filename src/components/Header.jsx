import { Box, Flex, Heading, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" bg={'gray.100'} px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" letterSpacing="tighter" color="gray.700">
          DevJobs
        </Heading>
        <Link href="/" fontWeight="bold" color="teal.500">
          Ver Vagas
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;