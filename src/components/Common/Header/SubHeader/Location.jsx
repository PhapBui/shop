import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
function Location() {
  const LocationContainer = styled(Stack)(({ theme }) => ({
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center",
    "alignContent": "center",
    "cursor": "pointer",
    "fontSize": "1.4rem",
    "&>*": {
      whiteSpace: "nowrap",
    },
    "&>div.address": {
      paddingLeft: "4px",
      textDecoration: "underline",
    },
  }));
  return (
    <LocationContainer>
      <LocationOnOutlinedIcon />
      <h4 className="title">Giao den: </h4>
      <div className="address">Q.1, P.Ben Nghe, Tp.HCM</div>
    </LocationContainer>
  );
}

export default Location;
