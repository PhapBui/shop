import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "./MainHeader/Logo.jsx";
import Search from "./MainHeader/Search/Search.jsx";
import UserShortcut from "./MainHeader/UserShortcut.jsx";

const MainHeaderContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

function MainHeader() {
  return (
    <MainHeaderContainer height="100%">
      <Logo />
      <Search />
      <UserShortcut />
    </MainHeaderContainer>
  );
}

export default MainHeader;
