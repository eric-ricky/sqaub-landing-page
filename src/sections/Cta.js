import { Container, Stack, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionHeader from "../components/SectionHeader";

import { motion } from "framer-motion";
import useCustomAnimation from "../hooks/useCustomAnimation";

////////////////////////////////////////////
const RootStyle = styled("section")({
  minHeight: "50vh",
  paddingTop: "5rem",
  paddingBottom: "6rem",
});

const Cta = () => {
  const { ref, fadeUp } = useCustomAnimation(0.2);

  return (
    <RootStyle id="cta">
      <Container ref={ref}>
        <SectionHeader slogan="Get Started" title="Download today" />

        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1 }}
          animate={fadeUp}
          component={motion.div}
        >
          <Box
            width="180px"
            component="img"
            src="/static/google_play.png"
            sx={{ cursor: "pointer" }}
          />
          <Box
            width="180px"
            component="img"
            src="/static/apple_store.png"
            sx={{ cursor: "pointer" }}
          />
        </Stack>
      </Container>
    </RootStyle>
  );
};

export default Cta;
