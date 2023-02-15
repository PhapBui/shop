import { styled } from "@mui/material";
import React from "react";

const Wrapper = styled("div")({
  "display": "flex",

  "&>.reply-comment__avatar": {
    "width": "32px",
    "height": "32px",
    "borderRadius": "50%",
    "backgroundSize": "cover",
    "backgroundPosition": "center center",
    "flexShrink": "0",
    "margin": "0px 8px 0px 0px",
    "&>img": {
      display: "block",
      borderRadius: "50%",
      backgroundColor: "rgb(242, 242, 242)",
      maxWidth: "100%",
    },
  },

  "&>.reply-comment__wrapper": {
    "position": "relative",
    "zIndex": 1,
    "flexGrow": 1,
    "& textarea": {
      border: "1px solid rgb(238, 238, 238)",
      padding: "10px 40px 10px 12px",
      borderRadius: "12px",
      width: "100%",
      outline: "0px",
      fontSize: "13px",
      lineHeight: "20px",
      resize: "none",
      overflow: "hidden",
    },
    "&>img": {
      position: "absolute",
      zIndex: "1",
      width: "17px",
      right: "12px",
      transform: "translateY(-70%)",
      top: "50%",
      cursor: "pointer",
    },
  },
});

const Reply = () => {
  return (
    <div style={{ margin: "12px 0px" }}>
      <Wrapper className="reply-comment__outer">
        <div
          className="reply-comment__avatar"
          style={{
            backgroundImage: "url(https://tiki.vn/assets/img/avatar-s.png)",
          }}
        >
          <img
            src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
            alt=""
          />
        </div>
        <div className="reply-comment__wrapper">
          <div style={{ minHeight: "40px" }}>
            <textarea
              placeholder="Viết câu trả lời"
              className="style__StyledAutoTextArea-sc-10ol6xi-8 hVhEzE reply-comment__input"
              rows={1}
              style={{ height: "40px" }}
            ></textarea>
          </div>
          <img
            src="https://salt.tikicdn.com/ts/upload/1e/49/2d/92f01c5a743f7c8c1c7433a0a7090191.png"
            data-view-id="pdp_product_review_reply_submit"
            className="reply-comment__submit"
            alt=""
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Reply;
