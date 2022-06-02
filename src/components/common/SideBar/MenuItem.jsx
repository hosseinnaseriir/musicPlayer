import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MenuItem({ icon, children, href }) {
  return (
    <Link style={{ textDecoration: "none" }} to={href || "/test"}>
      <Box my={4} display="flex" gap={2} alignItems="center" component="li">
        {icon}{" "}
        <Typography color="white" fontSize="20px">
          {children}
        </Typography>
      </Box>
    </Link>
  );
}

export default MenuItem;
