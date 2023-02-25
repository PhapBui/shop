// @ts-nocheck
import { Rating, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import {
  selectClientImage,
  selectReviewList,
} from "features/products/productsSlice.js";
import { memo, useEffect, useState } from "react";

const Wrapper = styled("div")({
  display: "flex",
  padding: "0px 48px",
});

const Rate = styled("div")({
  "flexBasis": "335px",
  "flexShrink": "0",
  "margin": "0px 0px 32px",
  "& .summary": {
    "display": "flex",
    "alignItems": "center",
    "&>.rating-point": {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: "700",
      whiteSpace: "nowrap",
      margin: "0px 16px 0px 0px",
    },
    "& .rating-count": {
      lineHeight: "20px",
      marginTop: "1px",
      fontSize: "13px",
      fontWeight: "400",
      color: "rgb(128, 128, 137)",
    },
  },
  "& .detail": {
    "margin": "12px 0px 0px",
    "&>.review-level": {
      "display": "flex",
      "margin": "4px 0px",
      "alignItems": "center",

      "&>.progress-bar": {
        "width": "138px",
        "height": "6px",
        "backgroundColor": "rgb(245, 245, 250)",
        "position": "relative",
        "zIndex": "1",
        "margin": "0px 8px",
        "borderRadius": "99em",
        "&>div": {
          position: "absolute",
          left: "0px",
          top: "0px",
          bottom: "0px",
          backgroundColor: "rgb(128, 128, 137)",
          borderRadius: "99em",
        },
      },
    },
  },
});
const Detail = styled("div")({
  display: "flex  ",
  justifyContent: "space-between",
});

const Statistic = styled("div")({
  "& .title": {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
    color: "rgb(39, 39, 42)",
    marginBottom: "12px",
  },
  "&>.customers-feelback": {
    "display": "flex",
    "maxWidth": "360px",
    "flexWrap": "wrap",
    "&>.item": {
      "maxWidth": "81px",
      "width": "auto",
      "textAlign": "center",
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "center",
      "marginBottom": "8px",
      "marginRight": "6px",
      "&>.label:first-letter": {
        textTransform: "uppercase",
      },
    },
  },
});

const Circle = styled("div")(({ number }) => {
  const v = (18 / 5) * number - 90;

  return {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    padding: "3px",
    background: `linear-gradient(#fff,#fff) content-box, linear-gradient(${v}deg,#EBEBF0 50%,transparent 0) 0/min(100%,(50 - ${number})*100%), linear-gradient(${v}deg,transparent 50%,#00AB56 0) 0/min(100%,(${number} - 50)*100%), linear-gradient(to right,#EBEBF0 50%,#00AB56 0)`,
    color: " rgb(0, 171, 86)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
  };
});

const Images = styled("div")({
  "&>.title": {
    margin: "0px 0px 16px",
    fontSize: "17px",
    lineHeight: "24px",
    fontWeight: "600",
  },
  "&>.images-galley": {
    "display": "flex",
    "&>.item": {
      "position": "relative",
      "width": 88,
      "height": 88,
      "marginRight": 16,
      "cursor": "pointer",
      "&>.thumbnail": {
        backgroundSize: "cover",
        borderRadius: "4px",
        height: "100%",
        width: "100%",
        backgroundPosition: "center center",
      },
      "&>.img-total": {
        backgroundColor: "rgba(36, 36, 36, 0.7)",
        fontSize: "17px",
        fontWeight: "600",
        position: "absolute",
        inset: "0px",
        lineHeight: "120px",
        textAlign: "center",
        color: "rgb(255, 255, 255)",
        borderRadius: "4px",
      },
    },
  },
});

const Filter = styled("div")({
  "display": "flex",
  "padding": "48px 0px 32px",
  "&>.title": {
    flexShrink: "0",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "0px 16px 0px 0px",
    paddingTop: "4px",
    color: "rgb(56, 56, 61)",
    fontWeight: "400",
  },
  "&>.filter-inner": {
    "flexGrow": "1",
    "display": "flex",
    "flexWrap": "wrap",
    "&>.filter-review__item": {
      "height": "32px",
      "fontWeight": "600",
      "fontSize": "14px",
      "lineHeight": "20px",
      "padding": "6px 12px",
      "borderRadius": "100px",
      "color": "rgb(56, 56, 61)",
      "background": "rgb(245, 245, 250)",
      "margin": "0px 12px 12px 0px",
      "cursor": "pointer",
      "display": "flex",
      "alignItems": "center",
      "userSelect": "none",
      "&>.check": {
        display: "none",
        width: "18px",
        height: "18px",
        marginRight: "11px",
      },
      "&>.text": {},
    },
  },
});

const Overview = () => {
  const [stars, setStars] = useState([]);
  const [value, setValue] = useState([]);

  const [sort_options, setSort_options] = useState([]);
  const reviewsList = useAppSelector(selectReviewList);
  const imagesList = useAppSelector(selectClientImage);

  useEffect(() => {
    const { stars } = reviewsList;
    setSort_options(reviewsList.sort_options);
    if (!stars) return;

    let numberStar = [];
    let value = [];
    for (let a in stars) {
      numberStar.push(a);
      value.push(stars[a]);
    }
    setStars(numberStar.reverse());
    setValue(value.reverse());
  }, [reviewsList]);
  return (
    <Wrapper>
      {reviewsList && (
        <Rate className="review-rating">
          <div className="inner">
            <div className="summary">
              <div className="rating-point">{reviewsList.rating_average}</div>
              <div className="rating-stars">
                <div className="visualize">
                  {reviewsList.rating_average && (
                    <Rating
                      name="rate-filter"
                      size="large"
                      readOnly
                      title={reviewsList.rating_average}
                      defaultValue={+reviewsList.rating_average}
                      precision={0.1}
                    />
                  )}
                </div>
                <div className="rating-count">
                  {reviewsList.reviews_count} nhận xét
                </div>
              </div>
            </div>
            <div className="detail">
              {value &&
                value.length > 0 &&
                // @ts-ignore
                value?.map((item, idx) => (
                  <div
                    key={idx}
                    className="review-level"
                  >
                    <Rating
                      name="rate-filter"
                      size="large"
                      readOnly
                      defaultValue={+stars[idx]}
                      precision={0.1}
                    />
                    <div className="progress-bar">
                      <div style={{ width: item.percent }}></div>
                    </div>
                    <div className="review-count">{item.count}</div>
                  </div>
                ))}
            </div>
          </div>
        </Rate>
      )}
      <div style={{ flex: 1 }}>
        <Detail className="review-detail">
          <Statistic className="statistics">
            <div className="title">Đánh giá của khách đã mua hàng</div>
            <div className="customers-feelback">
              {reviewsList &&
                reviewsList?.attribute_vote_summary?.votes?.length > 0 &&
                reviewsList?.attribute_vote_summary?.votes?.map((item, idx) => (
                  <div
                    className="item"
                    key={idx}
                  >
                    <div className="circle-progress">
                      <Circle
                        className="circle"
                        number={((item.agree * 100) / item.total_vote).toFixed(
                          0
                        )}
                      >
                        <div className="span">
                          {((item.agree * 100) / item.total_vote).toFixed(0)}%
                        </div>
                      </Circle>
                    </div>
                    <div className="label">{item.attribute_name}</div>
                  </div>
                ))}
            </div>
          </Statistic>
          {imagesList && imagesList.length && (
            <Images className="images-feelback">
              <div className="title">
                Tất cả hình ảnh ({imagesList?.length})
              </div>
              <div className="images-galley">
                {imagesList &&
                  imagesList?.length > 0 &&
                  imagesList.map((item, idx) =>
                    idx < 3 ? (
                      <div
                        className="item"
                        key={item.id}
                      >
                        <div
                          className="thumbnail"
                          style={{
                            backgroundImage: `url(${item.images[0]?.full_path}) `,
                          }}
                        ></div>
                      </div>
                    ) : (
                      ""
                    )
                  )}

                <div className="item">
                  <div
                    className="thumbnail "
                    style={{
                      backgroundImage: `url(${imagesList[4]?.images[0]?.full_path}) `,
                    }}
                  ></div>
                  <div className="img-total">+{imagesList?.length - 3}</div>
                </div>
              </div>
            </Images>
          )}
        </Detail>
        {sort_options && (
          <Filter className="filter">
            <div className="title">Lọc xem theo :</div>
            <div className="filter-inner">
              {sort_options &&
                sort_options.flat().map((item, idc) => (
                  <div
                    key={idc}
                    data-view-id="pdp_review_filter_item"
                    data-view-index="0"
                    className="filter-review__item "
                  >
                    <span className="check">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png"
                        alt=""
                      />
                    </span>
                    <span className="text">{item.label}</span>
                  </div>
                ))}
            </div>
          </Filter>
        )}
      </div>
    </Wrapper>
  );
};

export default memo(Overview);
