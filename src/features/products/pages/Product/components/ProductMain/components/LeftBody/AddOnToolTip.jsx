import React from "react";
import TippyHeadless from "@tippyjs/react/headless";
import { styled } from "@mui/material";

const ContentWrapper = styled("div")({
  "textAlign": "left",
  "textDecoration": "none",
  "backgroundColor": "rgb(255, 255, 255)",
  "borderRadius": "5px",
  "minHeight": "34px",
  "borderWidth": "0px",
  "boxShadow": "rgb(133 133 133) 1px 1px 5px 0px",
  "&>h2.title": {
    padding: "12px 16px",
    fontSize: "1.5rem",
    lineHeight: "24px",
    fontWeight: "600",
    textAlign: "center",
  },
  "&>div.description": {
    "padding": "0px 16px",
    "&>.item": {
      "display": "flex",
      "margin": "0px 0px 8px",
      "&>img": {
        width: "16px",
        height: "16px",
        position: "relative",
        top: "1px",
      },
      "&>span.text": {
        fontSize: "1.3rem",
        lineHeight: "20px",
        margin: "0px 0px 0px 8px",
      },
    },
  },
  "&>.readmore": {
    color: "rgb(13, 92, 182)",
    fontSize: "1.3rem",
    lineHeight: "20px",
    margin: "12px 0px 16px",
    borderBottom: "1px solid rgb(242, 242, 242)",
    padding: "0px 0px 16px 16px",
    display: "flex",
  },
});

const AddOnToolTip = ({ children, text, title, readmore, readmoreTitle }) => {
  return (
    <>
      <TippyHeadless
        placement="bottom"
        interactive
        maxWidth={821}
        render={(attrs) => (
          <ContentWrapper className="content">
            {" "}
            <h2 className="title">{title}</h2>
            <div className="description">
              {text.map((item, idx) => (
                <div
                  className="item"
                  key={idx}
                >
                  <img
                    src="https://salt.tikicdn.com/ts/upload/4a/8c/37/776c5ee8018e956735397dc2ff590ceb.png"
                    alt="checked"
                  />
                  <span className="text">{item}</span>
                </div>
              ))}
            </div>
            <a
              className="readmore"
              rel="noreferrer"
              href={readmore}
              target="_blank"
            >
              {readmoreTitle}
            </a>
          </ContentWrapper>
        )}
      >
        {children}
      </TippyHeadless>
    </>
  );
};

export default AddOnToolTip;
