import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import useFetch from "hooks/useFetch.js";
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

function Location() {
  const locationData = useFetch(
    `https://api.tiki.vn/delivery/api/v2/location-detection`
  );

  return (
    <LocationContainer>
      <LocationOnOutlinedIcon />
      <h4 className="title">Giao den: </h4>
      <div className="address">
        {
          // @ts-ignore
          locationData?.data?.address_info
        }
      </div>
    </LocationContainer>
  );
}

export default Location;
