<template>
  <div>
    <div v-if="user">
      <h3>Bienvenue, {{ user[0].pseudo }}</h3>
      <button class="btn btn-primary btn-block" @click="clickPost">
        Ajouter un nouveau post
      </button>
      <FeedShow />
    </div>
    <h3 v-if="!user">vous n'êtes pas connecté</h3>
  </div>
</template>

<script>
import axios from "axios";
import FeedShow from "./FeedShow.vue";

export default {
  name: "HoMe",
  data() {
    return {
      user: null,
    };
  },
  components: {
    FeedShow,
  },
  async created() {
    // renvoi tout les users maybe for Admin ?
    const id = localStorage.getItem("id");
    const response = await axios.get(`user/${id}`);
    this.user = response.data;
  },
  methods: {
    clickPost() {
      this.$router.push("/post");
    },
  },
};
</script>
