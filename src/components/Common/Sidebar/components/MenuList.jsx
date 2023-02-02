import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuItem from "./MenuItem.jsx";

const List = styled(Box)(({ theme }) => ({
  "width": "100%",
  "padding": " 12px 8px",
  "backgroundColor": "#fff",
  "borderRadius": theme.spacing(1),

  "marginBottom": "16px",

  "color": "rgb(128, 128, 137)",
  "& .MuiSvgIcon-root": {
    fontSize: "2.6rem",
  },
  "&>.title": {
    color: "rgb(39, 39, 42)",
    marginBottom: "8px",
    paddingLeft: "16px",
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: "150%",
  },
}));

function MenuList({ data }) {
  return (
    <List>
      {data.title && <div className="title">{data.title}</div>}
      {data.items &&
        data.items.length > 0 &&
        data.items.map((item, idx) => {
          return (
            <MenuItem
              key={idx}
              data={item}
            />
          );
        })}
    </List>
  );
}

export default MenuList;
