const actions = {
    resize: (context,val) => {
        context.commit('SET_WIDTH', val.ww);
        context.commit('SET_HEIGHT', val.wh);
        context.commit('SET_DEVICE', val.device);
        context.commit('SET_PC', val.pc);
        context.commit('SET_SP', val.sp);
        context.commit('SET_ISTOUCH', 'ontouchstart' in document.documentElement);
    }
};

export default actions;
