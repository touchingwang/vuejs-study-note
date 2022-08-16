import Vue from "vue";
import Vuex from "vuex";

// 1.安装插件
Vue.use(Vuex);

Vue.config.productionTip = false;

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 10000
  },
  mutations: {
    updateInfo() {
      this.$store.state.counter = 100;
    }
  },
  actions: {
    // context:上下文
    aUpdateInfo(context, payload) {
      setTimeout(() => {
        context.commit("updateInfo");
        console.log(payload.message);
        payload.success();
      }, 1000);
    }
  },
  getters: {},
  modules: {}
});

// 3.导出store对象
export default store;
