import appTiki from "./axiosTiki.js";
import appTikiApi from "./axiosTikiApi.js";
import appTikiTKA from "./axiosTikiTKA.js";

const productTikiApi = {
  /**
   *
   * @param {object} params

   *
   * @returns {object}
   */
  getBlockProduct: (params) =>
    appTiki.get(
      `/personalish/v1/blocks/collections`,
      { params } /**block_code=infinite_scroll&page_size=36 */
    ),

  /**
   *
   * @param {number} id
   * @returns {object}
   */

  getById: (id) => appTiki.get(`/v2/products/${id}`),

  /**
   *
   * @param {undefined|string} key
   * @returns {object}
   */
  getSearchResultList: (key) => appTiki.get(`/v2/search/suggestion?q=${key}`),

  /**
   *
   * @param {object} params
   * @param {number} params.limit
   * @param {string} params.include
   * @param {number} params.aggregations
   * @param {string} params.q
   *
   * @returns {object}
   *
   */
  getSearchResultByKey: (params) => appTiki.get(`/v2/products`, { params }),

  /**
   *
   * @param {number} id
   * @returns {object}
   */
  getProductDeliveryInfo: (id) =>
    appTiki.get(`/v2/products/widget/delivery_info/${id}platform=web&pdp=v2`),

  /**
   * @param {object} params
   * @param {number} params.product_id
   * @param {number} params.spid
   * @param {string} params.include
   * @param {number} params.page
   * @param {number} params.limit
   * @param {string} params.sort -> Preview Comment
   * @param {boolean} params.top -> Images only
   * @param {number} params.seller_id
   * @returns {object}
   */
  getProductReviewList: (params) => appTiki.get(`/v2/reviews`, { params }),

  /**
   * @param {object} params
   * @param {number} params.product_id
   * @param {string} params.ids
   * @returns {object}
   */
  getProductViewedRecently: (params) =>
    appTiki.get(`/v2/me/recently_viewed`, { params }),

  /**
   * @param {object} params
   * @param {string} params.page_name
   * @param {string} params.q
   * @param {number} params.category_id
   * @returns
   */
  getSuggestFeatureKeywords: (params) =>
    appTiki.get(`shopping/v2/featured_keywords`, { params }),

  /**
   *
   * @param {number} seller_id
   * @returns
   */
  getSellerInfo: (seller_id) =>
    appTiki.get(`/shopping/v2/widgets/seller?seller_id=${seller_id}`),

  /**
   *
   * @param {number} mpid
   * @returns
   */
  getWidgets: (mpid) => appTiki.get(`/personalish/v2/pdp?mpid=${mpid}`),

  /**
   * @param {object} params
   * @param {number} params.product_id
   * @param {number} params.seller_id
   * @returns
   */

  getProductMatchDiscount: (params) =>
    appTiki.get(
      `/v2/products/widget/bundle/${params.product_id}?seller_id=${params.seller_id}`
    ),

  /**
   * @param {string} params
   * @returns
   */
  getBanners: (params) => appTikiTKA.get(`/v1/banners-group?${params}`),

  /**
   * @param {object} params
   * @param {string} params.placement
   * @param {string} params.q
   * @returns
   */
  getWidgetsAds: (params) => appTikiTKA.get(`/v1/widgets`, { params }),

  /**
   *
   * @returns location
   */
  getUserLocation: () => appTikiApi.get("/delivery/api/v2/location-detection"),

  /**
   *
   * @returns
   */
  getHomeHotDeal: () =>
    appTikiApi.get(
      `/v2/widget/deals/collection?per_page=12&trackity_id=4bb53046-4d5b-b591-a5ce-0092a332c47c`
    ),

  /**
   *
   * @param {object} params
   * @param {number} params.page
   * @param {number} params.per_page
   * @returns
   */
  getHomeCollection: (params) =>
    appTikiApi.get(`/raiden/v2/collections`, { params }),

  /**
   *
   * @param {number} product_id
   * @returns
   */
  getProductCoupon: (product_id) =>
    appTikiApi.get(`/raiden/v2/asa/seller/coupon?pid=${product_id}`),

  /**
   *
   * @param {object} params
   * @param {number} params.product_id
   * @param {number} params.seller_id
   * @returns
   */

  getProductComboSeller: (params) =>
    appTikiApi.get(
      `/product-detail/api/v1/products/${params.product_id}/widget/combo?seller_id=${params.seller_id}`
    ),
  /**
   * @returns
   */
  getSibarMenuConfig: () => appTikiApi.get(`/raiden/v2/menu-config`),
};
export default productTikiApi;
