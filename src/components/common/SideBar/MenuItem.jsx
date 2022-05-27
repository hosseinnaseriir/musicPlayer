import React from "react";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function MenuItem({icon , children}) {
  return (
    <Box my={4} display="flex" gap={2} alignItems="center" component="li">
      {icon}{" "}
      <Typography color="white" fontSize="20px">
        {children}
      </Typography>
    </Box>
  );
}

export default MenuItem;
