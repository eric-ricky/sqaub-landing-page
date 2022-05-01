import { styled } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import Step from "../components/Step";

import { motion } from "framer-motion";
import useCustomAnimation from "../hooks/useCustomAnimation";

///////////////////////////////////////
const data = [
  {
    id: 1,
    title: "Set disbursement Instructions",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    title: "Assembly retrieves your account",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

const RootStyle = styled("section")({
  minHeight: "50vh",
  paddingTop: "5rem",
  paddingBottom: "5rem",
  background: "url('/static/patternBG.png'), #1F3E76",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const HowItWorks = () => {
  const { ref, fadeUp } = useCustomAnimation(0.2);

  return (
    <RootStyle id="workflow">
      <Container ref={ref}>
        <SectionHeader isDark={true} title="Here's how it works" />

        <Grid
          container
          sx={{ gridGap: "35px 0" }}
          animate={fadeUp}
          component={motion.div}
        >
          {data?.map((item) => (
            <Step key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default HowItWorks;
