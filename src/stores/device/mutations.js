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
    }
};

export default mutations;
