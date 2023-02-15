import { styled } from "@mui/material";
import { Images } from "assets/images/index.js";
import Image from "components/Custom/Etc/image.jsx";
import { Link } from "react-router-dom";
const Linkk = styled(Link)(({ theme }) => ({
  display: "flex",
  position: "relative",
  height: "40px",
  marginRight: "48px",
}));
function Logo(props) {
  return (
    <Linkk to={"/"}>
      <Image
        // @ts-ignore
        src={`/${Images.logo512}`}
        alt="logo"
      />
    </Linkk>
  );
}

Logo.propTypes = {};

export default Logo;
