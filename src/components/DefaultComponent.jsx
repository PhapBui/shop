import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const DefaultChild = styled(Box)(({ theme }) => ({
  "width": "100%",
  "padding": "8px 0px",

  "color": "rgb(128, 128, 137)",
  "& .MuiSvgIcon-root": {
    fontSize: "2.6rem",
  },
}));

function Header() {
  return <DefaultChild></DefaultChild>;
}

export default Header;
