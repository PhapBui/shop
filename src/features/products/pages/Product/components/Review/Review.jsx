import { styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const [overView, setOverView] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ovv = await axios.get(
          `https://tiki.vn/api/v2/reviews?limit=5&include=comments,contribute_info,attribute_vote_summary&sort=score%7Cdesc,id%7Cdesc,stars%7Call&page=1&spid=190194380&product_id=190194378&seller_id=1`
        );
        const reviewImages = await axios.get(
          `https://tiki.vn/api/v2/reviews?product_id=190194378&include=comments&page=1&limit=-1&top=true&spid=190194380&seller_id=1`
        );
        if (ovv) {
          setOverView(ovv.data);
          setReviewList(ovv.data.data);
          setPage(ovv.data.paging);
        }
        if (reviewImages) {
          setImageList(reviewImages.data);
        }
      } catch (error) {
        console.log("Failed to fetch Data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Title>Đánh Giá - Nhận Xét Từ Khách Hàng</Title>
      <Overview
        dataOverview={overView}
        dataImages={imageList}
      />
      <ReviewList
        data={reviewList}
        page={page}
      />
    </Wrapper>
  );
}

export default Review;
