import DiamondIcon from "@mui/icons-material/Diamond";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import TippyHeadless from "@tippyjs/react/headless";
import { useAppSelector } from "app/hooks.js";
import { selectCartItems } from "features/cart/cartSlice.js";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../../../../features/cart/cart.jsx";

const UserShortcutContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "48px",
}));

const MenuNavLink = styled(NavLink)(({ theme }) => ({
  "textDecoration": "none",
  "padding": "6px 16px",
  "borderRadius": " 8px",
  "color": "inherit",
  "display": "flex",
  "flexDirection": "row",
  "alignItems": "center",
  "columnGap": "2px",
  "position": "relative",
  "&.active": {
    color: "rgb(10, 104, 255)",
    fontWeight: 500,
    lineHeight: "150%",
  },
  "&.active:hover": {
    backgroundColor: "rgba(0, 96, 255, 0.12)",
  },
  "&:hover": {
    backgroundColor: "rgba(39, 39, 42, 0.12)",
  },
  "&>.store": {
    color: "rgb(10, 104, 255)",
  },
  "&>.item-qty": {
    color: " rgb(255, 255, 255)",
    background: " rgb(255, 66, 79)",
    height: "16px",
    right: "0px",
    top: "-4px",
    borderRadius: " 8px",
    display: "inline-block",
    fontWeight: 700,
    textAlign: "center",
    fontSize: " 10px",
    lineHeight: "150%",
    position: "absolute",
    padding: "0.5px 4px",
  },
}));

function UserShortcut() {
  const CartList = useAppSelector(selectCartItems);
  const productsQty = useMemo(() => {
    if (CartList && CartList.length > 0)
      return CartList?.reduce((a, b) => a + b.quantily, 0);
    return "";
  }, [CartList]);

  return (
    <UserShortcutContainer>
      <MenuNavLink to="/">
        <HomeIcon />
        Trang Chu
      </MenuNavLink>
      <MenuNavLink to="/astra">
        <DiamondIcon />
        Astra
      </MenuNavLink>
      <MenuNavLink to="/tai-khoan">
        <FaceRetouchingNaturalIcon />
        Tai Khoan
      </MenuNavLink>
      <TippyHeadless
        placement="bottom-end"
        interactive
        maxWidth={821}
        render={(attrs) => <Cart />}
      >
        <MenuNavLink to="/gio-hang">
          <LocalGroceryStoreOutlinedIcon className="store" />
          <span className="item-qty">{productsQty}</span>
        </MenuNavLink>
      </TippyHeadless>
    </UserShortcutContainer>
  );
}

export default UserShortcut;
