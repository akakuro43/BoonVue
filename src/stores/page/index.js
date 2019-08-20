import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    currentPage: '',
    isPageLoaded: false
};

const store = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default store;
