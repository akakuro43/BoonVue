const actions = {
    mousemove: (context,val) => {
      context.commit('SET_MOUSE_Y', val.mouseY);
      context.commit('SET_MOUSE_X', val.mouseX);
    }
}

export default actions;
