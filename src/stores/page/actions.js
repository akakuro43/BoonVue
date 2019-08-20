const actions = {
    loaded: (context) => {
      context.commit('SET_IS_PAGE_LOADED', true);
    },
    setPageId: (context, val) => {
      context.commit('SET_CURRENT_PAGE', val);
    }
};

export default actions;
