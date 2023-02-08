import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbWrapper = styled("div")({
  "display": "flex",
  "alignItems": "center",
  "& >a": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
    color: "rgb(128, 128, 137)",
    fontSize: "1.4rem",
    lineHeight: "2rem",
    fontWeight: "300",
    whiteSpace: "nowrap",
  },
  "& >span.icon.icon-next": {
    marginLeft: "5.5px",
    marginRight: "8.5px",
  },
  "& >.breadcrumb-item": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
    color: "rgb(128, 128, 137)",
    fontSize: "1.4rem",
    lineHeight: "2rem",
    fontWeight: "300",
    whiteSpace: "nowrap",
  },
});

function BreadCrumb() {
  return (
    <BreadCrumbWrapper className="breadcrumb">
      <Link
        className="breadcrumb-item"
        dataview-id="product_list_top_categories_item"
        dataview-index="0"
        dataview-content='{"click_data":{"trace_id":"2DN0QecwTGB5W0WX"}}'
        to="/"
      >
        Trang chủ
      </Link>
      <span className="icon icon-next">
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#808089"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
          ></path>
        </svg>
      </span>
      <Link
        to={"#"}
        className="breadcrumb-item"
        data-view-id="product_list_top_categories_item"
        data-view-index="1"
        data-view-content='{"click_data":{"trace_id":"2DN0QecwTGB5W0WX"}}'
      >
        <span
          className="breadcrumb-item"
          title="muôn kiếp nhân sinh"
        >
          muôn kiếp nhân sinh
        </span>
      </Link>
    </BreadCrumbWrapper>
  );
}

export default BreadCrumb;
