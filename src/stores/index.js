import Vue from 'vue';
import Vuex from 'vuex';

import moduleDevice from './device/index';
import moduleScroll from './scroll/index';
import moduleMouse from './mouse/index';
import modulePage from './page/index';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        device: moduleDevice,
        scroll: moduleScroll,
        mouse: moduleMouse,
        page: modulePage,
    },
    strict: true,
});

export default store;
