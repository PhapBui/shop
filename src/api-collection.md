# Homepage

## suggestSearch:

https://tiki.vn/api/v2/search/suggestion

## suggestTitle:

https://tiki.vn/api/shopping/v2/featured_keywords?page_name=HomepageRevamp

## banner:

https://tka.tiki.vn/widget/api/v1/banners-group?group=home_banner_main_v2

## HomeBrands:

https://tka.tiki.vn/widget/api/v1/banners-group?group=home_banner_main_v2

## subBanner:

https://tka.tiki.vn/widget/api/v1/banners-group?group=msp_app_background_v2

## LunarYearDeal:

https://tka.tiki.vn/widget/api/v1/banners-group?group=msp_widget_banner_left&group=msp_widget_banner_right_top&group=msp_widget_banner_right_bottom

## location:

https://api.tiki.vn/delivery/api/v2/location-detection

## HotDeals:

https://api.tiki.vn/v2/widget/deals/collection?per_page=12

## HomeCollection:

https://api.tiki.vn/raiden/v2/collections?page=1&per_page=20

## HomeProductInfinite:

https://tiki.vn/api/personalish/v1/blocks/collections?block_code=infinite_scroll&page_size=36&version=home-revamp

# Search Page, categories page

## DataDirect:

https://tiki.vn/api/v2/search/suggestion?trackity_id=4bb53046-4d5b-b591-a5ce-0092a332c47c&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh

## SuggetSearch:

https://tiki.vn/api/shopping/v2/featured_keywords?page_name=Search&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh

## SearchResult:

https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=4bb53046-4d5b-b591-a5ce-0092a332c47c&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh

## Banner:

https://tka.tiki.vn/widget/api/v1/widgets?placement=left_sidebar&placement=footer&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh&trackity_id=4bb53046-4d5b-b591-a5ce-0092a332c47c

# ProductPage

## QuickSearch:

https://tiki.vn/api/shopping/v2/featured_keywords?page_name=ProductPage&category_id=2553

## BreadCrumb:

https://tiki.vn/api/v2/products/94173462?platform=web&spid=94173463
Delivery:

## - Info,Time Estimate:

https://tiki.vn/api/v2/products/widget/delivery_info/117294933?platform=web&pdp=v2

## Shop info:

https://tiki.vn/api/shopping/v2/widgets/seller?seller_id=1

## ProductSimilar-Banner:

https://tiki.vn/api/personalish/v2/pdp?mpid=53507455

```js
 return {
  {
  code: "banner_under_thumbnail",
  title:"",
  },
  {
  code: "banner_product_info",
  title:"",
  },
  {
  code: "banner_under_history",->Banner
  title:"",
  },
  {
  code: "similar_products",
  title:"",
  },
  {
  code: "maybe_you_like",
  title:"",
  },
  {
  code: "frequently_bought_together",
  title:"",
  },
  }
```

## Coupon:

https://api.tiki.vn/raiden/v2/asa/seller/coupon?platform=desktop&pid=117294933&seller_id=1

## ProductCombo:

https://api.tiki.vn/product-detail/api/v1/products/117294932/widget/combo?seller_id=1&platform=web

## Product Detail:

https://tiki.vn/api/v2/products/207779223

## Feelback/Review:

### Overview/Comments/

https://tiki.vn/api/v2/reviews?limit=5&include=comments,contribute_info,attribute_vote_summary&sort=score%7Cdesc,id%7Cdesc,stars%7Call&page=1&spid=117294933&product_id=117294932&seller_id=1

```js
return {
  stars: {},
  rating_average: {},
  reviews_count: number,
  review_photo: {},
  data: [],
  paging: {},
  sort_options: [],
  attribute_vote_summary: {},
};
```

### Images

https://tiki.vn/api/v2/reviews?product_id=117294932&include=comments&page=1&limit=-1&top=true&spid=117294933&seller_id=1

## May be You Like

https://tiki.vn/api/personalish/v2/pdp?mpid=117294932
or
https://tiki.vn/api/personalish/v1/blocks/collections?block_code=maybe_you_like&strategy=new_pdp&model.pdp.highest_product_id=117294932

## Products Viewed Recently

https://tiki.vn/api/v2/me/recently_viewed?product_id=145974294&ids=145974294,190194378&platform=desktop

<!--
https://tiki.vn/api/personalish/v1/blocks/collections?block_code=infinite_scroll&page_size=36&version=home-revamp ================================
https://tiki.vn/api/shopping/v2/featured_keywords?page_name=Search&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh ================================
https://tiki.vn/api/shopping/v2/featured_keywords?page_name=ProductPage&category_id=2553 ================================
https://tiki.vn/api/shopping/v2/featured_keywords?page_name=HomepageRevamp ================================
https://tiki.vn/api/shopping/v2/widgets/seller?seller_id=1 ================================
https://tiki.vn/api/personalish/v2/pdp?mpid=117294932 ================================
https://tiki.vn/api/v2/search/suggestion ================================
https://tiki.vn/api/v2/search/suggestion?q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh ================================
https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh ================================
https://tiki.vn/api/v2/products/94173462?platform=web&spid=94173463 ================================
https://tiki.vn/api/v2/products/widget/delivery_info/117294933?platform=web&pdp=v2 ================================
https://tiki.vn/api/v2/products/207779223 ================================
https://tiki.vn/api/v2/reviews?limit=5&include=comments,contribute_info,attribute_vote_summary&sort=score%7Cdesc,id%7Cdesc,stars%7Call&page=1&spid=117294933&product_id=117294932&seller_id=1 ================================
https://tiki.vn/api/v2/reviews?product_id=117294932&include=comments&page=1&limit=-1&top=true&spid=117294933&seller_id=1 ================================
https://tiki.vn/api/v2/me/recently_viewed?product_id=145974294&ids=145974294,190194378&platform=desktop ================================




https://tka.tiki.vn/widget/api/v1/banners-group?group=home_banner_main_v2 ================================
https://tka.tiki.vn/widget/api/v1/banners-group?group=msp_app_background_v2 ================================
https://tka.tiki.vn/widget/api/v1/banners-group?group=msp_widget_banner_left&group=msp_widget_banner_right_top&group=msp_widget_banner_right_bottom ================================
https://tka.tiki.vn/widget/api/v1/widgets?placement=left_sidebar&placement=footer&q=mu%C3%B4n+ki%E1%BA%BFp+nh%C3%A2n+sinh ================================



https://api.tiki.vn/delivery/api/v2/location-detection ================================
https://api.tiki.vn/v2/widget/deals/collection?per_page=12 ================================
https://api.tiki.vn/raiden/v2/collections?page=1&per_page=20 ================================
https://api.tiki.vn/raiden/v2/asa/seller/coupon?platform=desktop&pid=117294933&seller_id=1 ================================
https://api.tiki.vn/product-detail/api/v1/products/117294932/widget/combo?seller_id=1&platform=web ================================



 -->
