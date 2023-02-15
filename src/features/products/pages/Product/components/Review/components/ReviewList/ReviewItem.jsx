// @ts-nocheck
import { styled, Rating } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from "react";
import Reply from "./Comment/Reply.jsx";
const Wrapper = styled("div")({
  padding: "32px 48px",
  display: "flex",
  borderTop: "1px solid rgb(242, 242, 242)",
});

const User = styled("div")({
  "flexBasis": "335px",
  "flexShrink": "0",

  "&>.user-info": {
    "display": "flex",
    "alignItems": "center",

    "&>.avatar": {
      "margin": "0px 12px 0px 0px",
      "width": "48px",
      "height": "48px",
      "backgroundSize": "cover",
      "borderRadius": "50%",
      "position": "relative",
      "zIndex": "1",

      "&>.thumb": {
        position: "relative",
        paddingTop: "100%",
        backgroundColor: "rgb(242, 242, 242)",
        borderRadius: "50%",
      },
    },

    "&>.user-detail": {
      "&>.name": {
        fontSize: "15px",
        lineHeight: "24px",
        fontWeight: "600",
        textTransform: "capitalize",
      },
      "&>.joined-date": {
        fontSize: "13px",
        lineHeight: "20px",
        color: "rgb(128, 128, 137)",
      },
    },
  },
  "&>.user-history-count": {
    "margin": "12px 0px 0px",
    "color": "rgb(128, 128, 137)",
    "display": "flex",
    "alignItems": "center",
    "fontSize": "13px",
    "fontWeight": "400",
    "lineHeight": "20px",

    "&>.icon": {
      width: "20px",
      height: "20px",
      margin: "0px 8px 0px 0px",
    },

    "&>span": {
      color: "rgb(56, 56, 61)",
      marginLeft: "4px",
    },
  },
});

const ContentDetail = styled("div")({
  "flexGrow": 1,
  "&>.rating-title": {
    "display": "flex",

    "alignItems": "center",
    "margin": "0px 0px 4px",
    "&>.title": {
      margin: "0px 0px 0px 12px",
      fontSize: "15px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "rgb(36, 36, 36)",
      overflow: "hidden",
      display: "-webkit-box",
    },
  },

  "&>.buyer-status": {
    "display": "flex",

    "alignItems": "center",
    "margin": "0px 0px 16px",
    "&>.review-comment__seller-name": {
      display: "flex",
      alignItems: "center",
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "20px",
      color: "rgb(0, 171, 86)",
    },
  },

  "&>.review-content": {
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "20px",
    margin: "0px 0px 8px",
    whiteSpace: "pre-wrap",
  },

  "&>.images": {
    "display": "flex",
    "flexWrap": "wrap",
    "margin": "0px -6px",
    "&>.image": {
      width: "152px",
      height: "152px",
      borderRadius: "4px",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      margin: "0px 6px 8px",
      cursor: "pointer",
    },
  },

  "&>.rating-attribute": {
    "marginBottom": "8px",
    "display": "flex",
    "alignItems": "center",
    "&>span": {
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "20px",
      color: "rgb(128, 128, 137)",
    },
  },

  "&>.created-at": {
    "fontSize": "13px",
    "lineHeight": "20px",
    "margin": "0px 0px 16px",
    "color": "rgb(128, 128, 137)",
    "display": "flex",

    "&>.explain": {
      "position": "relative",
      "paddingLeft": "10px",
      "marginLeft": "8px",

      "&:before": {
        content: `""`,
        height: "2px",
        width: "2px",
        backgroundColor: "rgb(128, 128, 137)",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "0px",
        margin: "-1px 0px 0px",
      },
    },
  },

  "&>.user-actions": {
    "display": "flex",
    "&>.action-btn": {
      "padding": "8px 16px",
      "fontSize": "14px",
      "lineHeight": "20px",
      "color": "rgb(11, 116, 229)",
      "fontWeight": "600",
      "cursor": "pointer",
      "display": "inline-block",
      "userSelect": "none",
      "border": "none",
      "backgroundColor": "inherit",
      "&.like": {
        border: "1px solid rgb(11, 116, 229)",
        borderRadius: "4px",
        margin: "0px 24px 0px 0px",
      },
    },
  },

  "&>.sub-comments-list": {
    "margin": "16px 0px 0px",

    "&>.sub-comment": {
      "display": "flex",
      "margin": "8px 0px 0px",
      "&>:first-of-type": {
        margin: "20px 0px 0px",
      },

      "&>.avatar-thumnb": {
        "width": "32px",
        "height": "32px",
        "backgroundSize": "cover",
        "margin": "0px 8px 0px 0px",
        "borderRadius": "50%",
        "minWidth": "32px",

        "&>.avatar": {
          "backgroundRepeat": "noRepeat",
          "backgroundSize": "cover",
          "position": "relative",
          "paddingTop": "100%",
          "backgroundColor": "rgb(242, 242, 242)",
          "borderRadius": "50%",
          "overflow": "hidden",
          "width": "inherit",
          "height": "inherit",

          "&>img": {
            display: "none",
          },
        },
      },
      "&>.inner": {
        "padding": "10px 12px",
        "border": "1px solid rgb(242, 242, 242)",
        "backgroundColor": "rgb(250, 250, 250)",
        "borderRadius": "12px",
        "flexGrow": "1",

        "&>.detail": {
          "display": "flex",
          "alignItems": "center",

          "&>.name": {
            fontSize: "13px",
            lineHeight: "20px",
            fontWeight: "500",
            textTransform: "capitalize",
          },
          "&>.date": {
            color: "rgb(128, 128, 137)",
            margin: "0px 0px 0px 6px",
            padding: "0px 0px 0px 8px",
            position: "relative",
            zIndex: "1",
            fontSize: "13px",
            lineHeight: "20px",
            fontWeight: "400",
          },
        },
        "&>.comment": {
          fontSize: "13px",
          lineHeight: "20px",
          margin: "4px 0px 0px",
        },
        "&>.images": {
          "display": "flex",
          "flexWrap": "wrap",
          "margin": "0px -6px",
          "&>.image": {
            width: "152px",
            height: "152px",
            borderRadius: "4px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            margin: "0px 6px 8px",
            cursor: "pointer",
          },
        },
      },
    },
  },
});

const ReviewItem = ({ data }) => {
  const [isShow, setIsShow] = useState(false);

  const RenderDateCreated = (currentTime, createdAtTime) => {
    const cur = new Date(currentTime);
    const cre = new Date(createdAtTime);
    const timeStamp = cur - cre;
    const y = new Date(timeStamp).getYear() - 70;
    const m = new Date(timeStamp).getMonth();
    const d = new Date(timeStamp).getDay();
    if (y > 0) return `Đánh giá vào ${y} năm trước`;
    if (m > 0) return `Đánh giá vào ${m} tháng trước`;
    if (d > 0) return `Đánh giá vào ${d} ngày trước`;
    return `Đánh giá trong vài tiếng trước`;
  };

  const handleShowReply = () => {
    setIsShow(!isShow);
  };

  return (
    <Wrapper>
      {data && (
        <User>
          <div className="user-info">
            <div className="avatar">
              <div
                className="thumb"
                style={{
                  backgroundImage: `url(${data.created_by.contribute_info.avatar})`,
                }}
              ></div>
            </div>
            <div className="user-detail">
              <div className="name">{data.created_by.contribute_info.name}</div>
              <div className="joined-date">
                {data.created_by.contribute_info.summary.joined_time}
              </div>
            </div>
          </div>

          <div className="user-history-count">
            <img
              src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
              alt="review-count"
              className="icon"
            />{" "}
            Đã viết:{" "}
            <span>
              {data.created_by.contribute_info.summary.total_review} đánh giá
            </span>
          </div>
          <div className="user-history-count">
            <img
              src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
              alt="thanks-count"
              className="icon"
            />{" "}
            Đã nhận:{" "}
            <span>
              {data.created_by.contribute_info.summary.total_thank} cảm ơn
            </span>
          </div>
        </User>
      )}
      {data && (
        <ContentDetail>
          <div className="rating-title">
            <Rating
              name="rate-filter"
              size="large"
              defaultValue={+data.rating}
              precision={0.1}
              style={{ fontSize: "2rem" }}
              readOnly
            />
            <div className="title">{data.title}</div>
          </div>

          <div className="buyer-status">
            <div className="review-comment__seller-name">
              <span className="review-comment__check-icon"></span>Đã mua hàng
            </div>
          </div>

          <div className="review-content">{data.content}</div>
          {data.images && (
            <div className="images">
              {data.images.map((img, idx) => (
                <div
                  key={img.id}
                  className="image"
                  style={{ backgroundImage: `url(${img.full_path})` }}
                ></div>
              ))}
            </div>
          )}
          {data.vote_attributes.agree &&
            data.vote_attributes.agree.length > 0 && (
              <div className="rating-attribute">
                <CheckIcon
                  style={{
                    marginRight: "7px",
                    minWidth: "16px",
                    minHeight: "17px",
                    color: "rgb(0, 171, 86)",
                  }}
                />
                <span>{data.vote_attributes.agree.map((item) => item)}</span>
              </div>
            )}
          <div className="created-at">
            <div className="created-time">
              {RenderDateCreated(
                data.timeline.current_date,
                data.timeline.delivery_date
              )}
            </div>
            <div className="explain">{data.timeline.content}</div>
          </div>
          <div className="user-actions">
            <button className="action-btn like">
              Hữu ích {data.thank_count > 0 ? `(${data.thank_count})` : ""}
            </button>
            <button
              className="action-btn reply"
              onClick={handleShowReply}
            >
              Bình Luận
            </button>
            <button className="action-btn share">Chia sẻ</button>
          </div>
          {isShow && <Reply />}
          <div className="sub-comments-list">
            {data.comments &&
              data.comments.length > 0 &&
              data.comments.map((item) => (
                <div
                  className="sub-comment"
                  key={item.id}
                >
                  <div className="avatar-thumnb">
                    <div
                      className="avatar"
                      style={{ backgroundImage: `url(${item.avatar_url})` }}
                    >
                      <img
                        src={item.avatar_url}
                        alt={item.fullname}
                      />
                    </div>
                  </div>
                  <div className="inner">
                    <div className="detail">
                      <div className="name">{item.fullname}</div>
                      <div className="date">
                        {RenderDateCreated(
                          data.timeline.current_date,
                          item.create_at * 1000
                        )}
                      </div>
                    </div>
                    <div className="comment">{item.content}</div>
                  </div>
                </div>
              ))}
          </div>
        </ContentDetail>
      )}
    </Wrapper>
  );
};

export default ReviewItem;
