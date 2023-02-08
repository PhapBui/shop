import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";

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
  "&>.address": {
    textDecoration: "underline",
    fontWeight: "500",
    fontSize: "1.4rem",
    lineHeight: "1.5rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "rgb(39, 39, 42)",
  },
}));

function Location({ pretext }) {
  const locationData = useFetch(
    `https://api.tiki.vn/delivery/api/v2/location-detection`
  );

  return (
    <LocationContainer>
      <LocationOnOutlinedIcon className="location-icon" />
      <h4 className="title">{pretext}</h4>
      <div className="address">
        {
          // @ts-ignore
          locationData?.data?.address_info
        }
      </div>
    </LocationContainer>
  );
}
Location.propTypes = {
  pretext: PropTypes.string,
};
export default Location;
