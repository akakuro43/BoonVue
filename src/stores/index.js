import Vue from 'vue';
import Vuex from 'vuex';

import moduleWindow from './window/index';
import moduleScroll from './scroll/index';
import moduleMouse from './mouse/index';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        window: moduleWindow,
        scroll: moduleScroll,
        mouse: moduleMouse,
    },
    strict: true,
});

export default store;
