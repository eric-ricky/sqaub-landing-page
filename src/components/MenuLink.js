import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";

/////////////////////////////////////
const LinkStyle = styled(Link)({
  lineHeight: 1.2,
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 500,
  color: "#03314b",
  "&:hover": {
    color: "#3d1541",
  },
  "&.active": {
    color: "blue",
  },
});

const MenuLink = ({ path, label, ...props }) => (
  <LinkStyle
    to={path}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    activeClass="active"
    {...props}
  >
    {label}
  </LinkStyle>
);

export default MenuLink;
