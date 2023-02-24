import { useAppSelector } from "app/hooks.js";
import SingleProduct from "features/products/components/SingleProduct/SingleProduct.jsx";
import { selectDiscoverList } from "features/products/productsSlice.js";
import { useEffect, useRef, useState } from "react";
import ProductHeader from "./Header.jsx";

function HomeInfiniteContent(props) {
  const productsRef = useRef();

  const [headerItem, setHeaderItem] = useState([]);
  const [tabs, setTabs] = useState([]);

  const [tabActive, setTabActive] = useState("");

  const [products, setProducts] = useState(() => {
    if (tabs && tabs.length > 0) {
      return tabs[0].items;
    }
  });
  const discoverData = useAppSelector(selectDiscoverList);
  useEffect(() => {
    setHeaderItem(discoverData);
    setTabs(discoverData?.tabs);
    if (discoverData?.tabs) {
      setProducts(discoverData?.tabs[0]?.items);
      setTabActive(discoverData?.tabs[0]?.title);
    }
  }, [discoverData]);

  const handleNavigate = (e, i) => {
    e.preventDefault();
    if (tabs[i].title !== tabActive) setTabActive(tabs[i].title);
    setProducts(tabs[i].items);
  };

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
        style={{
          position: "sticky",
          top: "0px",
          zIndex: 997,
          width: "auto",
          paddingTop: "0px",
        }}
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
