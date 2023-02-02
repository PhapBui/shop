import { styled } from "@mui/material/styles";
import CusContainer from "components/Custom/MuiBase/CusContainer.jsx";
import MainHeader from "./MainHeader.jsx";
import SubHeader from "./SubHeader.jsx";

const HeaderWrapper = styled("header")(({ theme }) => ({
  "width": "100%",
  "padding": "8px 0px",
  "backgroundColor": "#fff",
  "color": "rgb(128, 128, 137)",
  "& .MuiSvgIcon-root": {
    fontSize: "2.6rem",
  },
}));

const HeaderContainer = styled(CusContainer)(({ theme }) => ({}));

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <MainHeader />
        <SubHeader />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
