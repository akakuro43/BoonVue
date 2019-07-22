const mutations = {
    SET_DEFAULT_SCROLL_TOP: (state, val) => {
        state.defaultScrollTop = val;
    },
    SET_VERTIAL_SCROLL_TOP: (state, val) => {
        state.vertialScrollTop = val;
    },
    SET_SCROLL_SPEED: (state, val) => {
        state.scrollSpeed = val;
    },
    SET_SCROLL_PROGRESS: (state, val) => {
        state.scrollProgress = val;
    },
    SET_IS_VS: (state, val) => {
        state.isVs = val;
    }
};

export default mutations;
