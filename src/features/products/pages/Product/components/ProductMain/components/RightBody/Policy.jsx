import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Wrapper = styled("div")({
  "fontSize": "1.3rem",
  "lineHeight": "20px",
  "padding": "8px 0px",
  "borderTop": "1px solid rgb(242, 242, 242)",
  "&>.warranty-item": {
    "display": "flex",
    "justifyContent": "space-between",
    "padding": "12px 0px 0px",
    "flexWrap": "no-wrap",
    "&>.itemLeft": {
      color: "rgb(120, 120, 120)",
      flexShrink: 0,
      marginRight: "8px",
    },
  },
});

const Policy = ({ data }) => {
  return (
    <Wrapper>
      {data &&
        data.length > 0 &&
        data.map((item, idx) => (
          <div
            className="warranty-item"
            key={idx}
          >
            <span className="itemLeft">{item.name}</span>
            {!item.url ? (
              <span className="itemRight">{item.value}</span>
            ) : (
              <Link
                className="itemRight"
                to={item.url}
              >
                {item.value}
              </Link>
            )}
          </div>
        ))}
    </Wrapper>
  );
};

export default Policy;
