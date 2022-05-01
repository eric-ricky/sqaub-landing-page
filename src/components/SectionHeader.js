import { Typography, Box } from "@mui/material";

/////////////////////////////////////////

const SectionHeader = ({ title, isDark }) => {
  return (
    <Box sx={{ textAlign: "center", pb: 5 }}>
      <Typography
        sx={{
          color: `${isDark ? "#fff" : "#03314b"}`,
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
