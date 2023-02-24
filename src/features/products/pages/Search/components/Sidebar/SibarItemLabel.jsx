import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Link } from "react-router-dom";

const Item = styled(Box)(({ theme }) => ({
  "padding": "5px 16px",
  "borderRadius": theme.spacing(1),
  "cursor": "pointer",
  "transition": "all 0.3s ease 0s",
  "color": "rgb(128, 128, 137) ",
  "& .MuiSvgIcon-root": {
    fontSize: "1.4rem",
  },
  "& > .link-item": {
    "fontSize": "12px",
    "fontWeight": "400",
    "color": "rgb(56, 56, 61)",
    "lineHeight": "16px",
    "display": "flex",
    "alignItems": "center",
    "&>label": {
      "display": "flex",
      "cursor": "pointer",
      "alignItems": "center",
      "&>span.box": {
        "marginRight": 12,
        "&>img": {
          "width": "16px",
          "&.icon-check-on": {
            display: "none",
          },
          "&.icon-check-off": {
            display: "block",
          },
        },
      },
    },
  },
}));

const Icon = styled("picture")(({ theme }) => ({
  "flex": "0 0 32px",
  "marginRight": theme.spacing(1),
  "&>img": {
    maxHeight: 10,
    width: "auto",
  },
}));
function SidebarItemLabel({ data, query }) {
  return (
    <Item>
      <label
        className="link-item"
        data-view-index="0"
        data-view-label={data.display_value}
        data-view-id="search_filter_item"
      >
        <label>
          <input
            type="checkbox"
            style={{ display: "none" }}
          />
          <span className="box">
            <img
              className="icon-check-on"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/checked.svg"
              alt=""
            />
            <img
              className="icon-check-off"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/unchecked.svg"
              alt=""
            />
          </span>
          <div className="service-wrap">
            {data.icon && (
              <Icon>
                <source
                  type="image/webp"
                  srcSet={data.icon}
                />
                <img
                  src={data.icon}
                  alt={data.text}
                  height={data.icon_height}
                  width={data.icon_width}
                />
              </Icon>
            )}
            <span>{data.display_value}</span>
          </div>
        </label>
      </label>
    </Item>
  );
}

export default SidebarItemLabel;
