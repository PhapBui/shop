import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Location from "../Header/SubHeader/Location.jsx";
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
const Wrapper = styled("div")({
  "padding": " 7px 16px",
  "&> .title": {
    color: "rgb(39, 39, 42)",
    marginBottom: "8px",
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: "150%",
  },
  "& img": {
    maxHeight: "10px",
    width: "auto",
  },
  "& p": {
    fontSize: "1.2rem",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.6rem",
  },
  "&>Button": {
    textTransform: "unset",
    width: "100%",
    background: "rgb(255, 255, 255)",
    border: "1px solid rgb(11, 116, 229)",
    fontSize: "12px",
    color: "rgb(11, 116, 229)",
    padding: "5px 15px",
    marginTop: "8px",
    borderRadius: "4px",
  },
  "&>.small-filter": {
    color: "rgb(128, 128, 137)",
    fontSize: "12px",
    paddingBottom: "8px",
    marginTop: "4px",
  },
  "& .hide": {
    display: "none",
  },
  "& .show-more": {
    fontSize: "1.2rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    lineHeight: "16px",
    color: "rgb(11, 116, 229)",
    cursor: "pointer",
  },
});

const InputPrice = styled("input")({
  flex: "1 1 0%",
  width: "77px",
  height: "30px",
  padding: "0px 8px",
  background: "rgb(255, 255, 255)",
  borderRadius: "4px",
  textAlign: "left",
  border: "1px solid rgb(184, 184, 184)",
  outline: "0px",
  fontSize: "13px",
});

function Sidebar({ data, page }) {
  const [isShow, setIsShow] = useState({});

  const handleShowItem = (type, value1, value2) => {
    setIsShow((prev) => ({
      ...prev,
      [type]: {
        type,
        collaps: isShow[type].collaps !== value1 ? value1 : value2,
      },
    }));
  };
  useEffect(() => {
    if (data) {
      const show = {};

      for (let key in data) {
        show[key] = {
          collaps: data[key]["collapsed"],
          type: data[key]["query_name"],
        };
      }
      setIsShow(show);
    }
  }, [data]);

  if (page === "home") {
    return (
      <DefaultChild>
        <MenuList data={data.highlight_block} />
        <MenuList data={data.menu_block} />
        <TikiSeller />
      </DefaultChild>
    );
  } else if (page === "search") {
    return (
      <DefaultChild>
        {/* Categories */}
        <MenuList data={data.category} />

        {/* Location */}
        <MenuList>
          <Wrapper>
            <div className="title">Địa chỉ nhận hàng</div>
            <Location />
          </Wrapper>
        </MenuList>

        {/* Service */}
        <MenuList>
          <Wrapper>
            <div className="title">{data.services?.display_name}</div>
            <FormGroup>
              {data.services &&
                data.services.values.map((item, i) => (
                  <FormControlLabel
                    key={i}
                    control={<Checkbox />}
                    label={
                      <Stack
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                        }}
                      >
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={item.query_name}
                            height={item.icon_height}
                            width={item.icon_width}
                          />
                        )}
                        <p> {item.display_name}</p>
                      </Stack>
                    }
                  />
                ))}
            </FormGroup>
          </Wrapper>
        </MenuList>

        {/* Rate review */}
        <MenuList>
          <Wrapper>
            <div className="title">{data.rating?.display_name}</div>
            <Stack>
              {data.services &&
                data.rating.values.map((item, i) => (
                  <Link
                    key={i}
                    to={`&${data.rating.query_name}=${item.query_value}`}
                    style={{
                      display: "flex",
                      gap: 4,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="rate-filter"
                      size="small"
                      defaultValue={+item.query_value}
                      precision={0.5}
                      readOnly
                    />
                    {item.display_value}
                  </Link>
                ))}
            </Stack>
          </Wrapper>
        </MenuList>

        {/* Price*/}
        <MenuList>
          <Wrapper>
            <div className="title">{data.price?.display_name}</div>
            <Stack>
              {data.services &&
                data.price.values.map((item, i) => (
                  <Link
                    key={i}
                    to={`&${data.price.query_name}=${item.query_value}`}
                    style={{
                      display: "flex",
                      gap: 4,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {item.display_value}
                  </Link>
                ))}
            </Stack>
            <div className="small-filter">Chọn khoảng giá</div>
            <Stack style={{ flexDirection: "row", alignItems: "center" }}>
              <InputPrice placeholder="Giá thấp" />
              <span
                style={{
                  width: "7px",
                  height: "1px",
                  fontSize: "0px",
                  display: "inline-block",
                  background: "rgb(154, 154, 154)",
                  margin: "0px 4px",
                  verticalAlign: "middle",
                }}
              >
                -
              </span>
              <InputPrice placeholder="Giá cao" />
            </Stack>
            <Button variant="outlined">Áp dụng</Button>
          </Wrapper>
        </MenuList>

        {/* Publisher*/}
        <MenuList>
          <Wrapper>
            <div className="title">{data.publisher_vn?.display_name}</div>
            <FormGroup>
              {data.publisher_vn &&
                data.publisher_vn.values.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      control={<Checkbox />}
                      className={
                        // @ts-ignore
                        i < isShow.publisher_vn?.collaps ? "" : "hide"
                      }
                      label={
                        <Stack
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                          }}
                        >
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={item.query_name}
                              height={item.icon_height}
                              width={item.icon_width}
                            />
                          )}
                          <p>{item.display_value}</p>
                        </Stack>
                      }
                    />
                  );
                })}
            </FormGroup>
            {data.publisher_vn?.values?.length >
              data.publisher_vn?.collapsed && (
              <div
                className="show-more"
                onClick={() =>
                  handleShowItem(
                    data.publisher_vn?.query_name,
                    data.publisher_vn?.collapsed,
                    data.publisher_vn?.values?.length
                  )
                }
              >
                {data.publisher_vn?.values?.length >
                // @ts-ignore
                isShow.publisher_vn?.collaps
                  ? "Xem thêm ~"
                  : "Thu gọn ^"}
              </div>
            )}
          </Wrapper>
        </MenuList>

        {/* Author*/}
        <MenuList>
          <Wrapper>
            <div className="title">{data.author?.display_name}</div>
            <FormGroup>
              {data.author &&
                data.author.values.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      control={<Checkbox />}
                      className={
                        // @ts-ignore
                        i < isShow.author?.collaps ? "" : "hide"
                      }
                      label={
                        <Stack
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                          }}
                        >
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={item.query_name}
                              height={item.icon_height}
                              width={item.icon_width}
                            />
                          )}
                          <p>{item.display_value}</p>
                        </Stack>
                      }
                    />
                  );
                })}
            </FormGroup>
            {data.author?.values?.length > data.author?.collapsed && (
              <div
                className="show-more"
                onClick={() =>
                  handleShowItem(
                    data.author?.query_name,
                    data.author?.collapsed,
                    data.author?.values?.length
                  )
                }
              >
                {
                  // @ts-ignore
                  data.author?.values?.length > isShow.author?.collaps
                    ? "Xem thêm ~"
                    : "Thu gọ ^n"
                }
              </div>
            )}
          </Wrapper>
        </MenuList>

        {/* Cover*/}
        <MenuList>
          <Wrapper>
            <div className="title">{data.book_cover?.display_name}</div>
            <FormGroup>
              {data.book_cover &&
                data.book_cover.values.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      control={<Checkbox />}
                      className={
                        // @ts-ignore
                        i < isShow.book_cover?.collaps ? "" : "hide"
                      }
                      label={
                        <Stack
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                          }}
                        >
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={item.query_name}
                              height={item.icon_height}
                              width={item.icon_width}
                            />
                          )}
                          <p>{item.display_value}</p>
                        </Stack>
                      }
                    />
                  );
                })}
            </FormGroup>
            {data.book_cover?.values?.length > data.book_cover?.collapsed && (
              <div
                className="show-more"
                onClick={() =>
                  handleShowItem(
                    data.book_cover?.query_name,
                    data.book_cover?.collapsed,
                    data.book_cover?.values?.length
                  )
                }
              >
                {
                  // @ts-ignore
                  data.book_cover?.values?.length > isShow.book_cover?.collaps
                    ? "Xem thêm ~"
                    : "Thu gọ ^n"
                }
              </div>
            )}
          </Wrapper>
        </MenuList>

        {/* Seller*/}
        <MenuList>
          <Wrapper>
            <div className="title">{data.seller?.display_name}</div>
            <FormGroup>
              {data.seller &&
                data.seller.values.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      control={<Checkbox />}
                      className={
                        // @ts-ignore
                        i < isShow.seller?.collaps ? "" : "hide"
                      }
                      label={
                        <Stack
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                          }}
                        >
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={item.query_name}
                              height={item.icon_height}
                              width={item.icon_width}
                            />
                          )}
                          <p>{item.display_value}</p>
                        </Stack>
                      }
                    />
                  );
                })}
            </FormGroup>
            {data.seller?.values?.length > data.seller?.collapsed && (
              <div
                className="show-more"
                onClick={() =>
                  handleShowItem(
                    data.seller?.query_name,
                    data.seller?.collapsed,
                    data.seller?.values?.length
                  )
                }
              >
                {
                  // @ts-ignore
                  data.seller?.values?.length > isShow.seller?.collaps
                    ? "Xem thêm ~"
                    : "Thu gọ ^n"
                }
              </div>
            )}
          </Wrapper>
        </MenuList>

        {/* Shipping*/}
        <MenuList>
          <Wrapper>
            <div className="title">{data.is_cross_border?.display_name}</div>
            <FormGroup>
              {data.is_cross_border &&
                data.is_cross_border.values.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      control={<Checkbox />}
                      className={
                        // @ts-ignore
                        i < isShow.is_cross_border?.collaps ? "" : "hide"
                      }
                      label={
                        <Stack
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                          }}
                        >
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={item.query_name}
                              height={item.icon_height}
                              width={item.icon_width}
                            />
                          )}
                          <p>{item.display_value}</p>
                        </Stack>
                      }
                    />
                  );
                })}
            </FormGroup>
            {data.is_cross_border?.values?.length >
              data.is_cross_border?.collapsed && (
              <div
                className="show-more"
                onClick={() =>
                  handleShowItem(
                    data.is_cross_border?.query_name,
                    data.is_cross_border?.collapsed,
                    data.is_cross_border?.values?.length
                  )
                }
              >
                {data.is_cross_border?.values?.length >
                // @ts-ignore
                isShow.is_cross_border?.collaps
                  ? "Xem thêm ~"
                  : "Thu gọn ^"}
              </div>
            )}
          </Wrapper>
        </MenuList>

        {/* Ads CTA*/}
        <div>
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
      </DefaultChild>
    );
  }
}

export default Sidebar;
