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

function QuickSearch({ data }) {
  return (
    <QuickList>
      {data &&
        data.length > 0 &&
        data.map((a) => (
          <QuickListItem
            to={`/${a.url.replace("https://tiki.vn/", "")}`}
            key={a.url}
          >
            {a.keyword}
          </QuickListItem>
        ))}
    </QuickList>
  );
}

export default QuickSearch;
