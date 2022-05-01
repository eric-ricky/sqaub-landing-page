import { Box, Grid, Typography } from "@mui/material";

//////////////////////////////////////////

// --------------------------------------

const styles = {
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    p: 4,
  },
  title: {
    color: "#03314b",
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.25,
  },
  text: {
    fontSize: "1.25rem",
    fontWeight: 400,
    lineHeight: 1.4,
    color: "#3a4649",
  },
};

// ---------------------------------------

const Feature = ({ item }) => (
  <Grid item sm={12} md={6} lg={4} sx={styles.grid}>
    <Box>
      <img src={item.imgSrc} alt={item.title} />
    </Box>

    <Box>
      <Typography variant="h3" sx={styles.title} gutterBottom>
        {item.title}
      </Typography>
      <Typography variant="p" sx={styles.text}>
        {item.text}
      </Typography>
    </Box>
  </Grid>
);

export default Feature;
