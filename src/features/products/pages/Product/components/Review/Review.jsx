import { styled } from "@mui/material";
import { useAppSelector } from "app/hooks.js";
import { selectReviewList } from "features/products/productsSlice.js";
import { memo, useEffect, useState } from "react";
import Overview from "./components/OverView/Overview.jsx";
import ReviewList from "./components/ReviewList/ReviewList.jsx";

const Wrapper = styled("div")({
  wordBreak: "break-word",
  opacity: "1",
  color: "rgb(36, 36, 36)",
  margin: "0px 0px 16px",
  minHeight: "auto",
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "4px",
});

const Title = styled("h2")({
  fontSize: "20px",
  lineHeight: "32px",
  fontWeight: "400",
  textTransform: "capitalize",
  padding: "8px 16px",
});

function Review() {
  const [reviewList, setReviewList] = useState([]);
  const [page, setPage] = useState([]);
  const reviewsList = useAppSelector(selectReviewList);
  useEffect(() => {
    setReviewList(reviewsList?.data);
    setPage(reviewsList?.paging);
  }, [reviewsList]);
  return (
    <Wrapper>
      <Title>Đánh Giá - Nhận Xét Từ Khách Hàng</Title>
      <Overview />
      <ReviewList
        data={reviewList}
        page={page}
      />
    </Wrapper>
  );
}

export default memo(Review);
