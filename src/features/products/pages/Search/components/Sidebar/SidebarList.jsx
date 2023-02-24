import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import SidebarItemLabel from "./SibarItemLabel.jsx";
import SidebarItemText from "./SidebarItemText.jsx";

const List = styled(Box)(({ theme }) => ({
  "width": "100%",
  "padding": " 12px 8px",
  "backgroundColor": "#fff",
  "borderRadius": theme.spacing(1),
  "order": 4,
  "marginBottom": "16px",
  "color": "rgb(128, 128, 137)",
  "&.category": {
    order: 1,
  },
  "&.service": {
    order: 3,
  },
  "&.rating,&.price,&.brand,&.filter_mobile_camera_sau,&.filter_mobile_camera_truoc,&.filter_mobile_rom,&.filter_mobile_ram,&.filter_mobile_man_hinh,&.filter_mobile_dung_luong,&.filter_mobile_ram,&.option_color,&.seller,&.is_cross_border,&.filter_mobile_dungluong_pin":
    {
      order: 4,
    },

  "&> .title": {
    color: "rgb(39, 39, 42)",
    marginBottom: "8px",
    paddingLeft: "16px",
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: "150%",
    order: 0,
  },
  "&.price": {
    "&>.price-filter": {
      "padding": "0 16px",

      "& .filter-name": {
        background: "rgb(238, 238, 238)",
        fontSize: "12px",
        padding: "4px 12px",
        lineHeight: "16px",
        display: "inline-block",
        position: "relative",
        color: "rgb(56, 56, 61)",
        borderRadius: "12px",
      },
      "& .price-small-text": {
        color: "rgb(128, 128, 137)",
        fontSize: "12px",
        paddingBottom: "8px",
        marginTop: "4px",
      },
      "& .input-group": {
        "display": "flex",
        "alignItems": "center",
        "&> input": {
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
        },
        "&> span": {
          width: "7px",
          height: "1px",
          fontSize: "0px",
          display: "inline-block",
          background: "rgb(154, 154, 154)",
          margin: "0px 4px",
          verticalAlign: "middle",
        },
      },
      "& button": {
        background: "rgb(255, 255, 255)",
        border: "1px solid rgb(11, 116, 229)",
        fontSize: "12px",
        color: "rgb(11, 116, 229)",
        padding: "5px 15px",
        width: "100%",
        marginTop: "8px",
        borderRadius: "4px",
      },
    },
  },

  "&.rating": {
    display: "flex",
    flexDirection: "column",
  },
}));

function SidebarList({ data }) {
  const [priceFilter, setPriceFilter] = useState({ from: 0, to: 0 });

  const handleChangePriceFilter = (e, type) => {
    const newPriceFilter = priceFilter;
    newPriceFilter[type] = e.target.value;
    setPriceFilter((prev) => ({ ...prev, newPriceFilter }));
  };
  return (
    <List className={data.query_name}>
      {data?.display_name && <div className="title">{data?.display_name}</div>}
      {data?.values &&
        data?.values.length > 0 &&
        data?.values.map((item, idx) => {
          return data.multi_select ? (
            <SidebarItemLabel
              key={idx}
              data={item}
              query={data.query_name}
            />
          ) : (
            <SidebarItemText
              key={idx}
              data={item}
              query={data.query_name}
            />
          );
        })}
      {data.query_name === "price" && (
        <div className="price-filter">
          <div className="price-small-text">Chọn khoảng giá</div>
          <div className="input-group">
            <input
              pattern="[0-9]*"
              placeholder="Giá từ"
              value={priceFilter.from}
              onChange={(e) => handleChangePriceFilter(e, "from")}
            />
            <span>-</span>
            <input
              pattern="[0-9]*"
              placeholder="Giá đến"
              value={priceFilter.to}
              onChange={(e) => handleChangePriceFilter(e, "to")}
            />
          </div>
          <button
            data-view-id="search_filter_submit_button"
            data-view-content='{"click_data":{"trace_id":"Mi6LZ7S90OSSAjdH"}}'
          >
            Áp dụng
          </button>
        </div>
      )}
    </List>
  );
}
SidebarList.propTypes = {
  data: PropTypes.object,
};
export default SidebarList;
