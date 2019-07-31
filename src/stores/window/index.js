import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    width: 0,
    height: 0,
    isTouch: false,
    isIE: !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g),
    isAndroid: navigator.userAgent.toLowerCase().indexOf("android") > -1,
    isSP: false,
    isPC: false,
    device: '',
    currentPage: '',
    isFirstPageAppear: true
};

const store = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default store;
