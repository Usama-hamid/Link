import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: [
      { icon: "fa-clipboard-list", name: "task" },
      { icon: "fa-location-dot", name: "location" },
    ],
    selectedtab: "task",
    Tasks: [],
  },
  getters: {
    getTabs: (state) => state.tabs,
    getSelectedTab: (state) => state.selectedtab,
    getTask: (state) => state.Tasks,
  },
  mutations: {
    SET_TAB(state, payload) {
      state.selectedtab = payload;
    },
    SET_TASK(state, payload) {
      state.Tasks = payload;
      localStorage.setItem("task", JSON.stringify(state.Tasks));
    },
    APPEND_TASK(state, payload) {
      state.Tasks.push(payload);
      localStorage.setItem("task", JSON.stringify(state.Tasks));
    },
  },
  actions: {
    set_tab({ commit }, payload) {
      commit("SET_TAB", payload);
    },
    set_task({ commit }, payload) {
      commit("SET_TASK", payload);
    },
    append_task({ commit }, payload) {
      commit("APPEND_TASK", payload);
    },
  },
  modules: {},
});
