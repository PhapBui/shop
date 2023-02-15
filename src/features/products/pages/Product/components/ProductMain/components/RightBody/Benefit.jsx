import { styled } from "@mui/material";
import React from "react";

const Wrapper = styled("div")({
  "display": "flex",
  "borderTop": "1px solid rgb(242, 242, 242)",
  "&>.benefit-item": {
    "background": "white",
    "display": "flex",
    "flexDirection": "column",
    "flex": "1 0 30%",
    "alignItems": "center",
    "&>.item-icon": {
      height: 32,
      width: 32,
    },
    "&>.item-text": {
      textAlign: "center",
      fontSize: "1.2rem",
      lineHeight: "2rem",
      marginTop: "8px",
    },
  },
});

const Benefit = ({ data }) => {
  return (
    <Wrapper>
      {data &&
        data.length > 0 &&
        data.map((item, idx) => (
          <div
            className="benefit-item"
            key={idx}
          >
            <img
              className="item-icon"
              src={item.icon}
              alt={item.text}
            />
            <span
              className="item-text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></span>
          </div>
        ))}
    </Wrapper>
  );
};

export default Benefit;
