import { Grid, Stack, Typography, Box } from "@mui/material";

////////////////////////////////////////

// --------------------------------------

const styles = {
  grid: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
    alignItems: { sm: "center", xs: "center", md: "flex-start" },
    textAlign: { sm: "center", xs: "center", md: "start" },
  },
  number: {
    background: "#fff",
    borderRadius: "30px",
    fontSize: "30px",
    p: 1.6,
    mb: 1.6,
  },
  title: {
    pr: { md: 5, lg: 0 },
    display: "block",
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.25,
  },
  text: {
    paddingRight: { md: 5, lg: 4 },
    fontSize: "1.25rem",
    fontWeight: 400,
    lineHeight: 1.4,
    color: "#ddd",
  },
};

// -------------------------------------

const Step = ({ item }) => {
  return (
    <Grid item xs={12} md={6} lg={3} sx={styles.grid}>
      <Stack direction="row">
        <Typography sx={styles.number}>0{item.id}</Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
      <Box>
        <Typography variant="h5" sx={styles.title} gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="div" sx={styles.text}>
          {item.text}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Step;
