import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Stack, styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import {
  selectPaging,
  selectSortOption,
} from "features/products/pages/Search/searchSlice.js";
import { memo, useState } from "react";
import { Link } from "react-router-dom";
const Wrapper = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: "1px solid rgb(242, 242, 242)",
});

const SortItem = styled("div")({
  "flexDirection": "row",
  "& a": {
    "textTransform": "capitalize",
    "cursor": "pointer",
    "fontWeight": "400",
    "fontStretch": "normal",
    "fontStyle": "normal",
    "lineHeight": "20px",
    "letterSpacing": "normal",
    "color": "rgb(36, 36, 36)",
    "display": "inline-block",
    "fontSize": "1.4rem",
    "padding": "12px 16px",
    "position": "relative",
    "&:hover": {
      color: "rgb(11, 116, 229)",
      fontWeight: "600",
    },
    "&:hover:after": {
      display: "block",
    },
    "&:after": {
      content: `' '`,
      display: "none",
      position: "absolute",
      borderBottom: "4px solid rgb(11, 116, 229)",
      borderRadius: "2px",
      width: "40px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "&.active": {
      "color": "rgb(11, 116, 229)",
      "fontWeight": "600",
      "position": "relative",
      "&:after": {
        display: "block",
      },
    },
  },
});
function SortBy() {
  const [sortBy, setSortBy] = useState("default");

  const sortOptions = useAppSelector(selectSortOption);
  const paging = useAppSelector(selectPaging);

  const handleNavigate = (sortBy) => {
    setSortBy(sortBy);
  };
  return (
    <Wrapper>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {sortOptions &&
          sortOptions.length > 0 &&
          sortOptions.map((opt, idx) => (
            <SortItem key={idx}>
              <Link
                to={`/search?q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh&sort=${opt.query_value}`}
                className={opt.query_value === sortBy ? "active" : ""}
                onClick={() => handleNavigate(opt.query_value)}
              >
                {opt.display_value}
              </Link>
            </SortItem>
          ))}
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {`${paging?.current_page} / ${paging?.last_page}`}
          <div className="list-arrow">
            <KeyboardArrowLeftIcon fontSize="large" />
            <KeyboardArrowRightIcon fontSize="large" />
          </div>
        </Stack>
      </Stack>
    </Wrapper>
  );
}

export default memo(SortBy);
