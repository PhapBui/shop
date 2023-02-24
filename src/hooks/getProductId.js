const getProductId = (path) => {
  const pathArr = path.pathname.split("-");
  const lastPath = pathArr[pathArr.length - 1];
  const productId = lastPath.replace(".html", "").replace("p", "");
  return productId;
};

export default getProductId;
