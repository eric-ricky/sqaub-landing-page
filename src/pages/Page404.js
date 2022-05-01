import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

/////////////////////////////////////

const RootStyle = styled("div")({
  display: "grid",
  placeItems: "center",
  minHeight: "100vh",
});

const Page404 = () => {
  return (
    <RootStyle>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          404 Page Not Found
        </Typography>
      </Container>
    </RootStyle>
  );
};

export default Page404;
