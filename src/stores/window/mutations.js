const mutations = {
    SET_WIDTH: (state, val) => {
        state.width = val;
    },
    SET_HEIGHT: (state, val) => {
        state.height = val;
    },
    SET_ISTOUCH: (state, val) => {
        state.isTouch = val;
    },
    SET_PC: (state, val) => {
        state.isPC = val;
    },
    SET_SP: (state, val) => {
        state.isSP = val;
    },
    SET_DEVICE: (state, val) => {
        state.device = val;
    },
    SET_CURRENT_PAGE: (state, val) => {
        state.currentPage = val;
    },
    SET_IS_FIRST_PAGE_APPEAR: (state, val) => {
        state.isFirstPageAppear = val;
    }
};

export default mutations;
