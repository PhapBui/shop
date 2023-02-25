// @ts-nocheck
import { LoadingButton } from "@mui/lab";
import { styled, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import {
  loadingProductLoading,
  selectBannerEvent,
  selectProductById,
} from "features/products/productsSlice.js";
import { memo, useEffect, useRef, useState } from "react";

const Wrapper = styled("div")({
  display: "flex",
});
const Main = styled("div")({
  flex: "1 0 0",
});
const Sidebar = styled("div")({
  width: 300,
  marginLeft: "20px",
  paddingTop: "30px",
});

const GroupContent = styled("div")({
  marginBottom: "16px",
  borderRadius: "4px",
  backgroundColor: "rgb(255, 255, 255)",
});

const Title = styled("h2")({
  color: "rgb(51, 51, 51)",
  fontSize: "20px",
  fontWeight: "400",
  lineHeight: "32px",
  padding: "8px 16px",
  textTransform: "capitalize",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px",
});

const Content = styled("div")({
  "padding": "0px 16px 16px",
  "display": "inline-block",
  "color": "rgb(36, 36, 36)",
  "textAlign": "justify",
  "borderRadius": "4px",
  "width": "100%",
  "&>.toggle-content": {
    "position": "relative",

    "& >.gradient": {
      position: "absolute",
      bottom: "0px",
      left: "0px",
      width: "100%",
      height: "200px",
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))",
    },
  },
  "&>.btn-more": {
    "cursor": "pointer",
    "display": "block",
    "width": "229px",
    "height": "39px",
    "margin": "10px auto 0px",
    "color": "rgb(24, 158, 255)",
    "fontSize": "13px",
    "fontWeight": "400",
    "lineHeight": "39px",
    "textAlign": "center",
    "border": "1px solid rgb(24, 158, 255)",
    "borderRadius": "4px",
    "&:hover": {
      color: "rgb(255, 255, 255)",
      backgroundColor: "rgb(24, 158, 255)",
    },
  },
});

const ContentTable = styled(Table)({
  "& tr": {
    "borderBottom": "0px",
    ">.MuiTableCell-root": {
      borderBottom: "unset",
    },
    "& td": {
      "fontSize": "1.4rem",
      "padding": "10px 15px",

      "&:first-of-type": {
        width: "220px",
        verticalAlign: "top",
        color: "rgb(79, 79, 79)",
        fontSize: "13px",
        fontWeight: "500",
        background: "rgb(239, 239, 239)",
      },
    },
    "&:nth-of-type(2n)": {
      backgroundColor: "rgb(250, 250, 250)",
    },
  },
});

function ProductDetails() {
  const desRef = useRef();
  const [detail, setDetail] = useState([]);
  const [description, setDescription] = useState("");
  const [desHeight, setDesHeight] = useState(
    () => desRef?.current?.clientHeight
  );
  const [isShow, setIsShow] = useState(true);

  const bannerEvent = useAppSelector(selectBannerEvent);
  const ProductData = useAppSelector(selectProductById);
  const loading = useAppSelector(loadingProductLoading);

  useEffect(() => {
    if (ProductData?.specifications?.length > 0) {
      setDetail(ProductData?.specifications[0]?.attributes);
      setDescription(ProductData?.description);
    }
  }, [ProductData]);

  const handleShowDescription = () => {
    if (desRef.current?.clientHeight !== desHeight) {
      setDesHeight(desRef.current?.clientHeight);
      setIsShow(false);
    } else {
      setDesHeight(500);
      setIsShow(true);
    }
  };
  return (
    <Wrapper>
      <Main>
        <GroupContent>
          <Title>Thông tin chi tiết</Title>
          <Content>
            <ContentTable
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableBody>
                {detail.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </ContentTable>
          </Content>
        </GroupContent>
        <GroupContent>
          <Title>Mô Tả Sản Phẩm</Title>
          {loading && (
            <LoadingButton
              loading
              variant="outlined"
            >
              Loading....
            </LoadingButton>
          )}
          <Content>
            <div
              className="toggle-content"
              style={{
                overflow: "hidden",
                height:
                  desHeight ||
                  (desRef.current?.clientHeight >= 500
                    ? 500
                    : desRef.current?.clientHeight),
              }}
            >
              <div
                ref={desRef}
                className="description"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
              {isShow && desRef.current?.clientHeight >= 500 && (
                <div className="gradient"></div>
              )}
            </div>
            {!(desRef.current?.clientHeight <= 500) && (
              <button
                type="button"
                className="btn-more"
                data-view-id="pdp_view_description_button"
                onClick={handleShowDescription}
              >
                {isShow ? "Xem Thêm Nội Dung" : "Ẩn bớt nội dung"}
              </button>
            )}
          </Content>
        </GroupContent>
      </Main>
      <Sidebar>
        <div className="camp-banner">
          <a href={bannerEvent?.url}>
            <img
              src={bannerEvent?.image}
              alt={bannerEvent?.title}
              ratio={bannerEvent?.image_ratio}
            />
          </a>
        </div>
      </Sidebar>
    </Wrapper>
  );
}

export default memo(ProductDetails);
