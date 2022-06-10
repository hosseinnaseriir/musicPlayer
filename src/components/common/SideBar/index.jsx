import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "./../../../assets/images/Logo.png";
import { useStyles } from "./sidebar.style";
import { svgs } from "./../../../assets/svgs/index";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const SideBar = React.memo(() => {
  const classes = useStyles();
  console.log("SideBar RENDERED!");
  return (
    <Grid item xs={4} md={4} component={"sidebar"} className={classes.root}>
      <Box gap={2} display="flex" alignItems="center">
        <Box width={60} component={"img"} src={logo} alt="" />
        <Typography color="primary" fontSize="24px">
          Music Player
        </Typography>
      </Box>
      <Box component="ul">
        <MenuItem href="/" icon={svgs.songs}>
          all Songs
        </MenuItem>
        <MenuItem icon={svgs.star}>favorite Songs</MenuItem>
        <MenuItem icon={svgs.songs}>all Songs</MenuItem>
        <MenuItem href="/login" icon={svgs.songs}>
          login
        </MenuItem>
        <MenuItem href="/about" icon={svgs.songs}>
          About Us
        </MenuItem>
      </Box>

      <Typography color="white">
        copy right all reserver hossein naseri
      </Typography>
    </Grid>
  );
});

export default SideBar;
