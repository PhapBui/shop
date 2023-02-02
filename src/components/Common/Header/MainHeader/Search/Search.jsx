import SearchIcon from "@mui/icons-material/Search";
import LoadingButton from "@mui/lab/LoadingButton";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import TippyHeadless from "@tippyjs/react/headless";
import axios from "axios";
import useDebounce from "hooks/useDebounce.js";
import { useEffect, useRef, useState } from "react";
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
  "flex": 1,
  "& .MuiInputBase-input": {
    height: "2.2rem",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "width": "12ch",
      "&:focus": {
        width: "20ch",
      },
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

  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [hotKeys, setHotKeys] = useState([]);
  const [hotCategories, setHotCategories] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [collap, setCollap] = useState([]);

  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setShowLoading(true);

      const res = await axios.get(
        `https://tiki.vn/api/v2/search/suggestion?q=${debounceValue}`
      );
      setSearchResult(res.data.data);
      console.log(res);
      setShowLoading(false);
    };
    fetchApi();
  }, [debounceValue]);

  useEffect(() => {
    const fetchSearchSuggest = async () => {
      try {
        const res = await axios.get(`https://tiki.vn/api/v2/search/suggestion`);
        if (res) {
          setSuggestion(res.data?.data);
          setHotKeys(res.data?.widgets[0]);
          setHotCategories(res.data?.widgets[1]);
          setCollap(res.data?.data_collapsed);
        }
      } catch (error) {
        console.log("fail to fetch Search Suggest data: ", error);
      }
    };
    fetchSearchSuggest();
  }, []);

  const handleOnChangeInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) setSearchValue(e.target.value);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <>
      <Input>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
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
              searchResult={searchResult}
              suggestion={suggestion}
              hotKeys={hotKeys}
              hotCategories={hotCategories}
              collap={collap}
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
        <SubmitSearch loading={showLoading}>Tim kiem</SubmitSearch>
      </Input>
    </>
  );
};
export default Search;
