import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    defaultScrollTop: 0, // ブラウザデフォルトのスクロール値
    vertialScrollTop: 0, // バーチャルスクロール値
    scrollSpeed: 0, // スクロールスピード
    scrollProgress: 0, // プログレス
};

const store = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default store;
