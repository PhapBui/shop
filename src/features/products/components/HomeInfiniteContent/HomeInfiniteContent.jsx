import axios from "axios";
import * as React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleProduct from "../SingleProduct/SingleProduct.jsx";
import ProductHeader from "./Header.jsx";

function HomeInfiniteContent(props) {
  const productsRef = useRef();

  const [headerItem, setHeaderItem] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const [tabs, setTabs] = useState([]);

  const [tabActive, setTabActive] = useState("");

  const [products, setProducts] = useState(() => {
    if (tabs && tabs.length > 0) {
      return tabs[0].items;
    }
  });
  const [headerStyles, setHeaderStyles] = useState(() => ({
    position: "sticky",
    top: "0px",
    zIndex: 997,
    width: "auto",
    paddingTop: "0px",
  }));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://tiki.vn/api/personalish/v1/blocks/collections?block_code=infinite_scroll&page_size=36&version=home-revamp&`
        );
        setHeaderItem(res.data);
        setTabs(res.data?.tabs);
        setProducts(res.data?.tabs[0]?.items);
        setTabActive(res.data?.tabs[0]?.title);
      } catch (error) {
        console.log("fail to fetch data: ", error);
      }
    };
    fetchData();
  }, []);
  const handleNavigate = (e, i) => {
    e.preventDefault();
    if (tabs[i].title !== tabActive) setTabActive(tabs[i].title);
    setProducts(tabs[i].items);
  };

  useEffect(() => {
    const handleScroll = () => {
      // @ts-ignore
      setIsFixed(productsRef?.current?.getBoundingClientRect().top > 16);
      if (isFixed) {
        setHeaderStyles((prev) => ({
          ...prev,
          position: "sticky",
          width: "auto",
          paddingTop: "0px",
        }));
      } else {
        setHeaderStyles((prev) => ({
          ...prev,
          position: "fixed",
          width: "calc(1138px)",
          paddingTop: "16px",
        }));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <div
      ref={productsRef}
      style={{
        marginTop: 16,
        borderRadius: 8,
        background: "rgb(245, 245, 250)",
      }}
    >
      <ProductHeader
        style={headerStyles}
        tabs={tabs}
        // @ts-ignore
        title={headerItem.title}
        handleNavigate={handleNavigate}
        tabActive={tabActive}
      />
      <div
        className="home__infinite_content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 8,
        }}
      >
        {products &&
          products.length > 0 &&
          products.map((product, i) => (
            <div
              key={product.default_spid}
              style={{
                maxWidth: "calc(16.6667% - 8px)",
                flex: "1 1 calc(16.6667% - 8px)",
              }}
            >
              <SingleProduct data={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomeInfiniteContent;
