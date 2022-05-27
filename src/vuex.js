// import vue from "vue";
import { createApp } from "vue";
// import vuex from "vuex";
import { createStore } from "vuex";
// import axios from "axios";

const store = createStore({
  state() {
    return {
      user: null,
      post: [],
      comment: [],
    };
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    post: (state) => {
      return state.post;
    },
    comment: (state) => {
      return state.comment;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
});

const app = createApp({});
app.use(store);

export default store;
