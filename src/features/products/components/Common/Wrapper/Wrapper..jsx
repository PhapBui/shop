// @ts-nocheck
import { Box, styled } from "@mui/material";

const WrapContainer = styled(Box)(({ theme }) => ({
  marginTop: "16px",
  padding: "12px 16px",
  width: "100%",
  height: "100%",
}));
function Wrapper({ children }) {
  return <WrapContainer>{children}</WrapContainer>;
}

export default Wrapper;
