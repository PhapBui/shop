import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuList from "./components/MenuList.jsx";
import TikiSeller from "./TikiSeller/TikiSeller.jsx";

const DefaultChild = styled(Box)(({ theme }) => ({
  "width": "230px",
  "maxHeight": "100vh",
  "position": "sticky",
  "overflowY": "scroll",
  "top": "16px",
  "backgroundColor": "transparent",
  "display": "flex",
  "paddingBottom": "117px",
  "flexDirection": "column",
  "color": "rgb(56, 56, 61)",
  "lineHeight": "20px",
  "borderTopLeftRadius": "4px",
  "borderBottomLeftRadius": "4px",
  "&::-webkit-scrollbar": {
    display: "none",
    backgroundColor: "red",
  },
}));

function Sidebar({ data, page }) {
  if (page === "home") {
    return (
      <DefaultChild>
        <MenuList data={data.highlight_block} />
        <MenuList data={data.menu_block} />
        <TikiSeller />
      </DefaultChild>
    );
  } else if (page === "search") {
    return (
      <DefaultChild>
        {/* Categories */}
        <MenuList data={data.category} />

        {/* Location */}
        <MenuList data={data.highlight_block} />

        {/* Service */}
        <MenuList data={data.services} />

        {/* Rate review */}
        <MenuList data={data.rating} />

        {/* Price*/}
        <MenuList data={data.price} />

        {/* Provider*/}
        <MenuList data={data.seller} />

        {/* Author*/}
        <MenuList data={data.author} />

        {/* Cover*/}
        <MenuList data={data.book_cover} />

        {/* Shipping*/}
        <MenuList data={data.is_cross_border} />

        {/* Ads CTA*/}
        <MenuList data={data.highlight_block} />
      </DefaultChild>
    );
  }
}

export default Sidebar;
