import {
  Container,
  Stack,
  useMediaQuery,
  Typography,
  Box,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

///////////////////////////////
const RootStyle = styled("section")(({ theme }) => ({
  minHeight: "70vh",
  display: "grid",
  placeItems: "center",
  backgroundImage: "url(/static/patternBG.png)",
  paddingTop: "10rem",
  [theme.breakpoints.down("md")]: {
    paddingTop: "5rem",
  },
}));

const ImgContainer = styled(Box)(({ theme }) => ({
  margitop: 0,
  [theme.breakpoints.up("lg")]: {
    marginLeft: "-10px",
    marginRight: "-220px",
    marginTop: "-240px",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexShrink: 0,
  [theme.breakpoints.up("md")]: {
    width: "55%",
    paddingBottom: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "4rem 1rem",
    marginBottom: "-110px",
  },
}));

const ImgStyle = styled("img")({
  minWidth: 0,
  maxWidth: "100%",
  height: "auto",
});

const Hero = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  // animation easing
  let easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <RootStyle id="home">
      <Container>
        <Box
          sx={{
            mb: 5,
            display: { md: "flex" },
            alignItems: "center",
          }}
        >
          <TextContainer transition={{ staggerChildren: 0.25 }}>
            <Typography
              initial={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.6, ease: easing }}
              animate={{ y: 0, opacity: 1 }}
              variant="h1"
              component={motion.h1}
              sx={{
                fontSize: { md: "3.5rem", xs: "2rem" },
                fontWeight: "700",
                lineHeight: 1.25,
              }}
              gutterBottom
            >
              Be More Productive at Work with Less Effort
            </Typography>
            <Typography
              initial={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.6, ease: easing, delay: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              variant="p"
              component={motion.p}
              style={{
                fontSize: "19px",
                paddingRight: `${mdUp ? "200px" : 0}`,
                lineHeight: 1.4,
                fontWeight: 400,
                color: "#394649",
                paddingTop: 15,
              }}
              gutterBottom
            >
              Get your blood tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </Typography>

            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ mt: 1 }}
              initial={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.6, ease: easing, delay: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              component={motion.div}
            >
              <Box
                width="150px"
                component="img"
                src="/static/google_play.png"
                sx={{ cursor: "pointer" }}
              />
              <Box
                width="150px"
                component="img"
                src="/static/apple_store.png"
                sx={{ cursor: "pointer" }}
              />
            </Stack>
          </TextContainer>
          <ImgContainer
            initial={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            animate={{ x: 0, opacity: 1 }}
            component={motion.div}
          >
            <ImgStyle src="/static/hero.png" alt="hero thumb" />
          </ImgContainer>
        </Box>
      </Container>
    </RootStyle>
  );
};

export default Hero;
