<template>
  <div class="containerProfile">
    <h1 class="titre">Modifications du profil</h1>
    <form class="edition" @submit.prevent="handleMaj">
      <div class="form-group">
        <label for="password"
          >Ancien password :<input
            type="password"
            class="form-control password"
            v-model.trim="oldPassword"
            placeholder="password"
        /></label>
        <label for="password"
          >Nouveau password :<input
            type="password"
            class="form-control password"
            v-model.trim="newPassword"
            placeholder="password"
        /></label>
        <!-- <span v-if="errors.password">{{ errors.password }}</span> -->
      </div>
      <div class="form-group">
        <label for="pseudo" class="field_label"
          >Pseudo :<input
            type="text"
            class="form-control pseudo"
            v-model="pseudo"
            placeholder="Pseudo"
        /></label>
        <!-- <span v-if="errors.pseudo">{{ errors.pseudo }}</span> -->
      </div>
      <div class="validation">
        <!-- :disabled="errors.password || errors.pseudo" -->
        <button class="btn btn-primary btn-block" type="submit">Valider</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProfileM",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      pseudo: "",
    };
  },
  computed: {
    validateData: function () {
      if (this.email != "" && this.pseudo != "") {
        return true;
      } else {
        return false;
      }
    },
  },

  watch: {},
  methods: {
    async handleMaj() {
      console.log(this.oldPassword);
      console.log(this.newPassword);
      console.log(this.pseudo);
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("id");
      const response = await axios.put(
        `user/${userId}`,
        {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          pseudo: this.pseudo,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
      localStorage.setItem("id", response.data.userId);
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("pseudo", response.data.pseudo);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  /* #containerProfile {
    margin-top: 200px;
  }
  .edition {
  } */
}
</style>
