import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Navigation from "./Navigation";

const MainLayout = () => {
  return (
    <Box component="div" sx={{ overflowX: "hidden" }}>
      <Navigation />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
