import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Container)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1440px",
  },
}));

function CusContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default CusContainer;
