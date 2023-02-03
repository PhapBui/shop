import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Item = styled(Box)(({ theme }) => ({
  "padding": "7px 16px",
  "borderRadius": theme.spacing(1),
  "cursor": "pointer",
  "transition": "all 0.3s ease 0s",
  "color": "rgb(128, 128, 137) ",
  "& .MuiSvgIcon-root": {
    fontSize: "2.6rem",
  },
  "& > .link-item": {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    fontSize: "1.4rem",
    textDecoration: "none",
    color: "rgb(39, 39, 42)",
  },
}));
const Icon = styled("picture")(({ theme }) => ({
  flex: "0 0 32px",
  marginRight: theme.spacing(1),
}));

function MenuItem({ data }) {
  console.log(data);

  return (
    <Item>
      {data.link && (
        <Link
          className="link-item"
          to={`/${data.link?.replace("https://tiki.vn/", "")}`}
          relative="path"
        >
          <Icon>
            <source
              type="image/webp"
              srcSet={data.icon_url}
            />
            <img
              src={data.icon_url}
              alt={data.text}
              height={32}
              width={32}
            />
          </Icon>
          <div>{data.text}</div>
        </Link>
      )}
      {data.display_value && (
        <Link
          className="link-item"
          to={`/search?q=ten-key&category=${data.query_value}`}
          relative="path"
        >
          <div>{data.display_value}</div>
        </Link>
      )}
    </Item>
  );
}

export default MenuItem;
