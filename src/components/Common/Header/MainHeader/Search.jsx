import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";

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

const SubmitSearch = styled(Button)(({ theme }) => ({
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
  return (
    <Input>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <SubmitSearch>Tim kiem</SubmitSearch>
    </Input>
  );
};
export default Search;
