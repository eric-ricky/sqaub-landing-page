import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

//////////////////////////////////////////

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        fontWeight: "700",
        lineHeight: 1.4,
        letterSpacing: "0.2rem",
        fontSize: "2rem",
        textDecoration: "none",
        color: "#394649",
      }}
    >
      squa
      <Box component="span" sx={{ color: "blue", fontWeight: "900" }}>
        b
      </Box>
    </Typography>
  );
};

export default Logo;
