import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import {
  memo,
  // useMemo
} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Product = styled("div")(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  position: "relative",
  cursor: "pointer",
  width: "192px",
  height: "302px",
  borderRadius: "4px",
  background: "rgb(255, 255, 255)",
  overflow: "hidden",
  padding: "16px",
  flexDirection: "column",
}));

const ProductReview = styled(Link)(({ theme }) => ({
  "listStyleType": "none",
  "textDecoration": "none",
  "display": "block",
  "position": "relative",
  "cursor": "pointer",
  "color": "unset",
  "&>img": {
    display: "block",
    width: "160px",
    height: "160px",
  },
  "&>.name": {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "13px",
    lineHeight: "1.54",
    marginTop: "12px",
  },
  "&>.discount-badge": {
    position: "absolute",
    top: "0px",
    left: "0px",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    border: "1px solid rgb(255, 66, 78)",
    borderRadius: "2px",
    backgroundColor: "rgb(255, 240, 241)",
    color: "rgb(255, 66, 78)",
    padding: "0px 2px",
  },
}));

const Option = styled("div")(({ theme }) => ({
  "display": "grid",
  "gridTemplateColumns": "24px minmax(0px, 1fr)",
  "columnGap": "8px",
  "alignItems": "center",
  "margin": "8px 0px",

  "&>.checkbox": {
    "cursor": "pointer",
    "&>img": {
      display: "block",
      maxWidth: "100%",
    },
  },
  "&>.change-option-box": {
    "position": "relative",
    "maxWidth": "100%",

    "&>.option": {
      "position": "relative",
      "display": "flex",
      "minWidth": "128px",
      "maxWidth": "100%",
      "padding": "2px 12px 2px 6px",
      "borderRadius": "2px",
      "border": "1px solid rgb(199, 199, 199)",
      "fontFamily": "Roboto",
      "fontSize": "11px",
      "lineHeight": "1.45",
      "color": "rgb(36, 36, 36)",
      "cursor": "pointer",

      "&>.title": {
        color: "rgb(120, 120, 120)",
        lineHeight: "1.45",
      },
      "&>.value": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      "&>.icon": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "2px",
      },
    },
  },
}));

const Price = styled("div")(({ theme }) => ({
  "display": "flex",
  "alignItems": "center",
  "lineHeight": "1.54",
  "fontSize": "14px",
  "fontWeight": "600",
  "color": "rgb(56, 56, 61)",
  "&>*": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  "&>.origin-price": {
    textDecoration: "line-through",
  },
  "&>.promo-price": {
    color: "rgb(255, 66, 78)",
    padding: "1px",
    marginLeft: "8px",
  },
}));

function Item({ data }) {
  // console.log(data);

  // const options = useMemo(() => {
  //   const opt = data?.configurable_options?.reduce((op, curr) => {
  //     op[curr.code] = curr;
  //     return op;
  //   }, {});
  //   return opt;
  // }, [data]);
  // // console.log(options);
  // const products = data?.configurable_products;
  // console.log(options);
  ////onClick={() => console.log(data)}
  return (
    data && (
      <Product>
        <ProductReview to={`/san-pham/${data.url_path}`}>
          <img
            src={data.thumbnail_url}
            alt="thumbnail_url"
            className="thumbnail"
          />
          {data.discount_rate && (
            <div className="discount-badge">-{data.discount_rate}%</div>
          )}
          <div className="name">{data.name}</div>
        </ProductReview>
        <Option>
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/checked.svg"
            alt=""
            className="checkbox"
          />
          <div className="change-option-box">
            <div className="option">
              <div className="title">Màu:</div>
              <div className="value">Trắng</div>
              <KeyboardArrowDownIcon className="icon" />
            </div>
          </div>
        </Option>
        <Price>
          <div className="origin-price">{data.list_price} đ</div>
          <div className="promo-price">{data.price} đ</div>
        </Price>
      </Product>
    )
  );
}

Item.propTypes = {};

export default memo(Item);
