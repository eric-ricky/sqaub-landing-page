import React from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionHeader from "../components/SectionHeader";
import Feature from "../components/Feature";

import { motion } from "framer-motion";
import useCustomAnimation from "../hooks/useCustomAnimation";

///////////////////////////////////////
const Performance = "/static/features/performance.svg";
const Partnership = "/static/features/partnership.svg";
const Subscription = "/static/features/subscription.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  //   {
  //     id: 4,
  //     imgSrc: Support,
  //     altText: "Customer Support",
  //     title: "Customer Support",
  //     text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  //   },
];

const RootStyle = styled("section")({
  minHeight: "50vh",
  paddingTop: "10rem",
  paddingBottom: "10rem",
});

const Features = () => {
  const { ref, fadeUp } = useCustomAnimation(0.2);
  return (
    <RootStyle id="features">
      <Container ref={ref}>
        <SectionHeader title="Here's is why you might need it" />

        <Grid container sx={{ mt: 2 }} animate={fadeUp} component={motion.div}>
          {data?.map((item) => (
            <Feature key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default Features;
