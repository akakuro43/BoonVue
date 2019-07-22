const actions = {
    scroll: (context,val) => {
      context.commit('SET_DEFAULT_SCROLL_TOP', val);
    },
    update: (context,val) => {
      context.commit('SET_VERTIAL_SCROLL_TOP', val.vertialScrollTop);
      context.commit('SET_SCROLL_SPEED', val.scrollSpeed);
      context.commit('SET_SCROLL_PROGRESS', val.scrollProgress);
    },
    clrearScrollPositon: (context) => {
      context.commit('SET_VERTIAL_SCROLL_TOP', 0);
      context.commit('SET_DEFAULT_SCROLL_TOP', 0);
    }
};

export default actions;
