import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "",
  loading: false,

  suggestion: [],
  result: [],
  quickSearch: [],

  hotKeys: [],
  hotCate: [],
  collaps: [],

  filterBy: [],
  sortBy: [],
  paging: [],
  sidebar: [],
  productList: [],

  params: {
    q: undefined,
    page_name: "search",
    category_id: undefined,
    limit: undefined,
    include: undefined,
    aggregations: undefined,
  },

  filter: {
    sort: "",
    support_p2h_delivery: "",
    brand: "",
    rating: undefined,
    price: "",
    option_color: "",
    seller: "",
    is_cross_border: undefined,
  },
};

export const searchSlice = createSlice({
  name: "searchs",
  initialState,
  reducers: {
    fetchSearch(state, action) {
      state.loading = true;
    },
    fetchSearchFailed(state, action) {
      state.loading = false;
    },

    fetchSearchSuggestion(state, action) {
      state.loading = true;
    },
    fetchSearchSuggestionSuccess(state, action) {
      state.loading = false;
      state.suggestion = action.payload.data;
      state.collaps = action.payload?.data_collapsed;

      const widgets = action.payload?.widgets?.reduce((a, b) => {
        a[b.code] = b;
        return a;
      }, {});
      state.hotKeys = widgets?.hot_keywords;
      state.hotCate = widgets?.hot_categories;
    },

    fetchQuickSearch(state, action) {
      state.loading = true;
    },
    fetchQuickSearchSuccess(state, action) {
      state.loading = false;
      state.quickSearch = action.payload;
    },

    fetchSearchResult(state, action) {
      state.loading = true;
    },
    fetchSearchResultSuccess(state, action) {
      state.loading = false;
      state.result = action.payload;
    },

    fetchSearchProductList(state, action) {
      state.loading = true;
    },
    fetchSearchProductListSuccess(state, action) {
      state.loading = false;
      state.productList = action.payload?.data;
      state.sortBy = action.payload?.sort_options;
      state.filterBy = action.payload?.filters;
      state.paging = action.payload?.paging;
      const sidebarData = [];
      const service = {
        display_name: "Dịch vụ",
        collapsed: 5,
        query_name: "service",
        values: [],
        multi_select: true,
      };

      action.payload?.filters.forEach((op) => {
        if (op.type !== "service") {
          sidebarData.push(op);
        } else {
          let item = {
            display_value: op.display_name,
            icon: op.icon,
            query_name: op.query_name,
            icon_height: op.icon_height,
            icon_width: op.icon_width,
            multi_select: op.multi_select,
            collapsed: op.collapsed,
          };
          service.values.push(item);
        }
      });
      sidebarData.push(service);
      state.sidebar = sidebarData;
    },
    setKey(state, action) {
      state.key = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const searchActions = searchSlice.actions;

//Creat Select

/**
 *  SearchSuggestion
 *  QuickSearch
 *  SearchResultItem
 *  SearchProductList
 *  Filter
 *  Service
 */

export const selectSearchParams = (state) => state.rootReducer.search.params;
export const selectSearchFilter = (state) => state.rootReducer.search.filter;
export const selectSearchLoading = (state) => state.rootReducer.search.loading;

//Search ->Header
export const selectSearchSuggestion = (state) =>
  state.rootReducer.search.suggestion;
export const selectQuickSearch = (state) =>
  state.rootReducer.search.quickSearch;
export const selectSearchResultList = (state) =>
  state.rootReducer.search.result;

// Tippy searchInput
export const selectHotKeys = (state) => state.rootReducer.search.hotKeys;
export const selectHotCate = (state) => state.rootReducer.search.hotCate;
export const selectCollap = (state) => state.rootReducer.search.collaps;

//SearchPage
export const selectProductList = (state) =>
  state.rootReducer.search.productList;
export const selectSortOption = (state) => state.rootReducer.search.sortBy;
export const selectFilterOption = (state) => state.rootReducer.search.filterBy;
export const selectPaging = (state) => state.rootReducer.search.paging;
export const selectKey = (state) => state.rootReducer.search.key;
export const selectSidebarData = (state) => state.rootReducer.search.sidebar;

//Reducer
const searchReducer = searchSlice.reducer;
export default searchReducer;
