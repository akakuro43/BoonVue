const mutations = {
    SET_CURRENT_PAGE: (state, val) => {
        state.currentPage = val;
    },
    SET_IS_PAGE_LOADED: (state, val) => {
        state.isPageLoaded = val;
    }
};

export default mutations;
