import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const QuickList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  columnGap: "",
  width: "872px",
  height: "24px",
  marginLeft: "95px",
  marginTop: "8px",
  alignItems: "flex-start",
  flexWrap: "wrap",
  overflow: "hidden",
}));

const QuickListItem = styled(Link)(({ theme }) => ({
  marginRight: "12px",
  textDecoration: "none",
  color: "inherit",
}));
const data = [
  {
    id: 1,
    path: "/trai-cay",
    name: "trai cay",
  },
  {
    id: 2,
    path: "/thit",
    name: "thit",
  },
  {
    id: 3,
    path: "/trung",
    name: "trung",
  },
  {
    id: 4,
    path: "/tien",
    name: "tien",
  },
];
function QuickSearch() {
  return (
    <QuickList>
      {data &&
        data.length > 0 &&
        data.map((a) => (
          <QuickListItem
            to={a.path}
            key={a.id}
          >
            {a.name}
          </QuickListItem>
        ))}
    </QuickList>
  );
}

export default QuickSearch;
