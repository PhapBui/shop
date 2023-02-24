import SearchIcon from "@mui/icons-material/Search";
import LoadingButton from "@mui/lab/LoadingButton";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import TippyHeadless from "@tippyjs/react/headless";
import { useAppDispatch, useAppSelector } from "app/hooks.js";
import {
  searchActions,
  selectSearchLoading,
} from "features/products/pages/Search/searchSlice.js";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResult from "./SearchResult.jsx";

const Input = styled("div")(({ theme }) => ({
  "position": "relative",
  "border": "1px solid #d9d9d9",
  "display": "flex",
  "alignItems": "center",
  "borderRadius": theme.spacing(1),
  "backgroundColor": alpha(theme.palette.common.white, 0.15),
  "flex": 1,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  "marginLeft": 0,
  "width": "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "color": "inherit",
  "fontSize": "1.4rem",
  "width": "100%",
  "flex": 1,
  "& .MuiInputBase-input": {
    height: "2.2rem",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
}));

const SubmitSearch = styled(LoadingButton)(({ theme }) => ({
  "textTransform": "unset",
  "fontSize": "1.4rem",
  "&:hover": {
    backgroundColor: "rgba(10, 104, 255, 0.2)",
  },
  "&:after": {
    content: `""`,
    display: "block",
    position: "absolute",
    borderLeft: "1px solid rgb(221, 221, 227)",
    height: "24px",
    left: "0px",
    top: "8px",
  },
}));

const Search = () => {
  const inputRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  const location = useLocation();

  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectSearchLoading);

  useEffect(() => {
    dispatch(searchActions.fetchSearchResult(searchValue));
    dispatch(searchActions.fetchSearchSuggestion());
  }, [searchValue, dispatch]);

  const handleOnChangeInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) setSearchValue(e.target.value);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    handleHideResult();
  }, [location]);

  return (
    <>
      <Input>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <span style={{ flex: 1 }}>
          <TippyHeadless
            placement="bottom-start"
            interactive
            visible={showResult}
            maxWidth={821}
            render={(attrs) => (
              <SearchResult
                // @ts-ignore
                tabIndex="-1"
                {...attrs}
                searchValue={searchValue}
              />
            )}
            onClickOutside={handleHideResult}
          >
            <StyledInputBase
              ref={inputRef}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleOnChangeInput(e)}
              onFocus={() => setShowResult(true)}
            />
          </TippyHeadless>
        </span>
        <SubmitSearch loading={loading}>Tim kiem</SubmitSearch>
      </Input>
    </>
  );
};
export default Search;
