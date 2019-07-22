import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
  mouseY: window.innerHeight / 2,
  mouseX: window.innerWidth / 2,
};

const store = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default store;
