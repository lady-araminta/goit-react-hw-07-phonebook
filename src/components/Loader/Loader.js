const { Box } = require('@chakra-ui/react');
const { BallTriangle } = require('react-loader-spinner');

export const Loader = () => {
  return (
    <Box mr="auto" ml="auto" maxW="120px">
      <BallTriangle />
    </Box>
  );
};
