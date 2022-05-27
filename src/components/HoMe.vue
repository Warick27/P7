<template>
  <div>
    <h3 v-if="user">Bienvenue, {{ user[0] }}</h3>
    <h3 v-if="!user">vous n'êtes pas connecté</h3>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "HoMe",
  computed: {
    ...mapGetters(["user"]),
  },
  // data() {
  //   return {
  //     user: null,
  //   };
  // },
  async created() {
    // renvoi tout les users maybe for Admin ?
    const id = localStorage.getItem("id");
    const response = await axios.get(`user/${id}`);
    this.user = response.data;
    console.log(this.user);
  },
};
</script>
