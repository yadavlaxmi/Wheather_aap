import { Typography, Box } from "@mui/material";

const Information = ({ result }) => {
  return (
    result && Object.keys(result).length > 0 ? (
      <Box>
        <Typography variant="h5">{result.name}</Typography>
      </Box>
    ) : null
  );
};

export default Information;
