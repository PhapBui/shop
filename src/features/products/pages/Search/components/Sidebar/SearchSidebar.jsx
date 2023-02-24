import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "app/hooks.js";
import { memo } from "react";
import { selectSidebarData } from "../../searchSlice.js";
import SidebarItem from "./SidebarList.jsx";
const Wrapper = styled(Box)(({ theme }) => ({
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
  },
  "& .location-icon": {
    display: "none",
  },
  "& div.address": {
    fontSize: "1.2rem",
    lineHeight: "1.6rem",
    fontWeight: "400",
    marginBottom: "4px",
  },
}));

function SidebarSearch() {
  //   const [isShow, setIsShow] = useState({});
  const sidebarData = useAppSelector(selectSidebarData);
  //   const handleShowItem = (type, value1, value2) => {
  //     setIsShow((prev) => ({
  //       ...prev,
  //       [type]: {
  //         type,
  //         collaps: isShow[type].collaps !== value1 ? value1 : value2,
  //       },
  //     }));
  //   };

  return (
    <Wrapper>
      {sidebarData &&
        sidebarData.length > 0 &&
        sidebarData.map((item, idx) => (
          <SidebarItem
            data={item}
            key={item.query_name}
          />
        ))}

      <div style={{ order: 10 }}>
        <a
          href="https://tiki.vn/astra-rewards/home"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://salt.tikicdn.com/ts/tka/a2/72/4d/b24f18833652303c59d931310fbe2b7e.png"
            alt="CTA"
            style={{
              borderRadius: "6px",
              display: "block",
              objectFit: "contain",
              width: "100%",
            }}
          />
        </a>
      </div>
    </Wrapper>
  );
}

export default memo(SidebarSearch);
