import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";

import useFetch from "hooks/useFetch.js";

const LocationContainer = styled(Stack)(({ theme }) => ({
  "flexDirection": "row",
  "justifyContent": "flex-start",
  "alignItems": "center",
  "alignContent": "center",
  "cursor": "pointer",
  "fontSize": "1.4rem",
  "columnGap": 6,
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
  "&>.handle-location": {
    border: "unset",
    color: "rgb(11, 116, 229)",
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    fontWeight: "600",
    flexShrink: "0",
  },
}));

function Location({ pretext, aftertext = false }) {
  const locationData = useFetch(
    `https://api.tiki.vn/delivery/api/v2/location-detection`
  );
  const handleChangeLocation = () => {
    console.log("change location");
  };
  return (
    <LocationContainer>
      <h4 className="title">{pretext} </h4>
      <LocationOnOutlinedIcon className="location-icon" />
      <div className="address">
        {
          // @ts-ignore
          locationData?.data?.address_info
        }
      </div>
      {aftertext && (
        <span
          className="handle-location"
          onClick={handleChangeLocation}
        >
          Đổi địa chỉ
        </span>
      )}
    </LocationContainer>
  );
}
Location.propTypes = {
  pretext: PropTypes.string,
  aftertext: PropTypes.bool,
};
export default Location;
