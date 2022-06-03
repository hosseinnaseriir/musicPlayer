import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function MenuItem({ icon, children, href }) {
  return (
    <NavLink
      className={(linkStatus) => (linkStatus.isActive ? "active" : "")}
      style={{ textDecoration: "none" }}
      to={href || "/"}
    >
      <Box my={4} display="flex" gap={2} alignItems="center" component="li">
        {icon}{" "}
        <Typography color="white" fontSize="20px">
          {children}
        </Typography>
      </Box>
    </NavLink>
  );
}

export default MenuItem;
