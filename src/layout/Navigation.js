import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Logo from "../components/Logo";
import MenuLink from "../components/MenuLink";

///////////////////////////////////////

const menuItems = [
  { path: "home", name: "Home" },
  { path: "features", name: "Features" },
  { path: "workflow", name: "Workflow" },
  { path: "cta", name: "Get Started" },
];

// ------------------------------------

const RootStyle = styled(AppBar)({
  boxShadow: "none",
  backgroundColor: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
});

const ButtonStyle = styled(Button)({
  backgroundColor: "transparent",
  border: "1px solid #3d1541",
  boxShadow: "none",
  fontSize: "1rem",
  color: "#3d1541",
  lineHeight: 1,
  padding: "0.6875rem 2.5rem",
  borderRadius: "0.25rem",
  textTransform: "capitalize",

  "&:hover, &:focus": {
    background: "#3d1541",
    color: "#fff",
  },
});

// -------------------------------------

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <RootStyle position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            color: "#000",
            py: 1,
            pt: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />

          {/* Menu Items */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              mx: "auto",
            }}
          >
            {menuItems.map((item, i) => (
              <MenuLink
                key={i}
                label={item.name}
                path={item.path}
                style={{ marginRight: "48px" }}
              />
            ))}
          </Box>

          {/* navbar button */}
          <Box
            sx={{
              justifyContent: "flex-end",
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <ButtonStyle variant="contained">Learn More</ButtonStyle>
          </Box>

          {/* mobile menu button */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenSidebar}
              color="inherit"
              style={{ fontWeight: "900", fontSize: "2.5rem" }}
            >
              <Icon icon="eva:menu-2-fill" />
            </IconButton>
          </Box>

          {/* mobile drawer */}
          <Drawer
            open={sidebarOpen}
            onClose={handleCloseSidebar}
            PaperProps={{
              sx: { width: 280, padding: "2rem" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Logo />
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleCloseSidebar}
                color="inherit"
              >
                <Icon icon="mdi:close" />
              </IconButton>
            </Box>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {menuItems.map((item, i) => (
                <MenuLink
                  key={i}
                  path={item.path}
                  onClick={handleCloseSidebar}
                  style={{
                    marginBottom: "1.25rem",
                  }}
                  label={item.name}
                />
              ))}

              <ButtonStyle
                variant="contained"
                sx={{
                  mt: 5,
                }}
              >
                Learn More
              </ButtonStyle>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </RootStyle>
  );
};

export default Navigation;
