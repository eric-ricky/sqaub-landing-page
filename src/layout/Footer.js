import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Typography } from "@mui/material";

//////////////////////////////////////
const RootStyle = styled("div")({
  background: "#eef",
});

const Footer = () => {
  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            padding: "1.25rem 1rem",
          }}
        >
          <Typography>
            All rights reserved &copy; {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </RootStyle>
  );
};

export default Footer;
