import { styled } from "@mui/material";

const Header = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "rgb(245, 245, 250)",
  transition: "all linear 0.3s 0s",
}));

const HeaderTitle = styled("h3")(({ theme }) => ({
  color: "rgb(39, 39, 42)",
  display: "flex",
  padding: "12px 16px",
  backgroundColor: "white",
  flex: "1 1 0%",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "150%",
  textTransform: "unset",
  marginBottom: "0px",
  marginTop: "0px",
  borderRadius: "8px 8px 0px 0px",
}));

const HeaderList = styled("ul")(({ theme }) => ({
  display: "grid",
  overflow: "auto",
  position: "relative",
  gridTemplateColumns: "repeat(8, 1fr)",
  columnGap: "0px",
  marginBottom: "8px",
  listStyle: "none",
}));

const HeaderItem = styled("li")(({ theme }) => ({
  "backgroundColor": "white",
  "display": "flex",
  "flexDirection": "column",
  "WebkitBoxAlign": "center",
  "alignItems": "center",
  "flexShrink": "0",
  "cursor": "pointer",
  "minHeight": "78px",
  "borderBottom": "1px solid rgb(235, 235, 240)",
  "padding": " 8px 4px",
  "transition": "all linear 0.3s 0s",
  "&.active": {
    "background": " rgba(0, 96, 255, 0.24)",
    "padding": "8px 4px",
    "borderBottomColor": "rgb(10, 104, 255)",
    "& .text": {
      color: "rgb(10, 104, 255)",
    },
  },
  "&:hover": {
    background: " rgba(0, 96, 255, 0.12)",
  },
  "&>div": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "alignContent": "center",
    "&>.text": {
      color: "rgb(128, 128, 137)",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "150%",
      paddingTop: "4px",
      textAlign: "center",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 1,
      overflow: "hidden",
      display: "-webkit-box",
      wordBreak: "break-word",
      transition: "all linear 0.3s 0s",
    },
  },
}));

function ProductHeader({ title, tabs, handleNavigate, style, tabActive }) {
  return (
    <Header style={style}>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderList>
        {tabs &&
          tabs.length > 0 &&
          tabs.map((tab, i) => (
            <HeaderItem
              key={i}
              onClick={(e) => handleNavigate(e, i)}
              className={tabActive === tab.title ? "active" : "false"}
            >
              <div>
                <picture>
                  <source />
                  <img
                    src={tab.icon}
                    alt={tab.title}
                    height={40}
                    width={40}
                  />
                </picture>
                <div className="text">{tab.title}</div>
              </div>
            </HeaderItem>
          ))}
      </HeaderList>
    </Header>
  );
}

export default ProductHeader;
