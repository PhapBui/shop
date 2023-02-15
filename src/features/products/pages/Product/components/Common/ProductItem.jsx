import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const Product = styled("div")(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  position: "relative",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  borderRadius: "4px",
  background: "rgb(255, 255, 255)",
  overflow: "hidden",
}));

const Item = styled(Link)(({ theme }) => ({
  listStyleType: "none",
  textDecoration: "none",
  color: "rgb(128, 128, 137)",
  width: "100%",

  fontSize: "1.2rem",
}));

const Thumbnail = styled("div")(({ theme }) => ({
  "width": "100%",
  "height": "auto",
  " & >img": {
    position: "absolute",
  },
  "&>.thumnail-wrapper ": {
    position: "relative",
    paddingTop: "100%",
  },
}));

const Info = styled("div")(({ theme }) => ({
  "padding": " 8px 0px",
  "borderBottom": "1px solid rgb(235, 235, 240)",
  "margin": "0px 12px",
  "&>.name": {
    "overflow": "hidden",
    "minHeight": "36px",
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2,
    "&>h3": {
      color: "rgb(39, 39, 42)",
      fontSize: "1.2rem",
      fontWeight: 400,
    },
  },
  "&>.review": {
    "display": "flex",
    "&>.rating": {
      display: "flex",
      justifyItems: "center",
    },
    "&>.quantity-sold": {
      display: "flex",
    },
  },
  "&>.badge-under-price": {
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "150%",
    minHeight: "30px",
  },
}));

const Price = styled("div")(({ theme }) => ({
  "textAlign": "left",
  "fontSize": "16px",
  "lineHeight": "24px",
  "marginTop": "6px",
  "color": "rgb(56, 56, 61)",
  "display": "flex",
  "WebkitBoxAlign": "center",
  "alignItems": "center",
  "fontWeight": 700,
  "&.has-discount": {
    color: "red",
  },
  "&>.discount": {
    marginLeft: "5px",
    fontSize: "1.2rem",
  },
}));

function ProductItem({ data }) {
  const meta = data?.badges_new?.reduce((meta, badge) => {
    meta[badge.code] = badge;
    return meta;
  }, {});
  return (
    <Product onClick={() => console.log(data)}>
      <Item to={`/san-pham/${data.url_path}`}>
        <div>
          <Thumbnail className="thumbnail">
            {meta && meta.official_store?.icon && (
              <img
                src={meta.official_store?.icon}
                alt={meta.official_store?.code}
                height={meta.official_store?.icon_height}
                width={meta.official_store?.icon_width}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
            )}
            <div className="thumnail-wrapper">
              <picture className="webping-container">
                <source srcSet={data?.thumbnail_url} />
                <img
                  src={data?.thumbnail_url}
                  alt={data?.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    objectFit: "cover",
                    top: 0,
                    left: 0,
                  }}
                />
              </picture>
            </div>
          </Thumbnail>
          <Info>
            <Price
              className={`price-discount ${
                data?.discount_rate > 0 ? "has-discount" : ""
              }`}
            >
              <div className="price">
                {data?.price?.toLocaleString("de-DE")} đ
              </div>
              {data?.discount_rate > 0 && (
                <div className="discount">-{data?.discount_rate}%</div>
              )}
            </Price>
            <div className="name">
              <h3>{data?.name}</h3>
            </div>
            <div className="review">
              <div className="rating">
                <div>{data?.rating_average}</div>

                <StarIcon style={{ color: "rgb(253, 216, 54)" }} />
              </div>
              |<div className="quantity-sold">{data?.quantity_sold?.text}</div>
            </div>
          </Info>
        </div>
      </Item>
    </Product>
  );
}

ProductItem.propTypes = {};

export default ProductItem;
