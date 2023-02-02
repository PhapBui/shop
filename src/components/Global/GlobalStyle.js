import PropTypes from "prop-types";
import "./GlobalStyle.scss";

function GlobalStyle({ children }) {
  return children;
}
GlobalStyle.propTypes = {
  children: PropTypes.node,
};

export default GlobalStyle;
