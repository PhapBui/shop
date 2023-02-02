import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useState } from "react";
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

function Sidebar() {
  const [highLight, setHighLight] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.tiki.vn/raiden/v2/menu-config?platform=desktop")
      .then((res) => res.json())
      .then((res) => {
        setHighLight(res.highlight_block);
        setCategories(res.menu_block);
      });
    return () => {};
  }, []);

  return (
    <DefaultChild>
      <MenuList data={highLight} />
      <MenuList data={categories} />
      <TikiSeller />
    </DefaultChild>
  );
}

export default Sidebar;
