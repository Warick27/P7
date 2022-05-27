<template>
  <form @submit.prevent="handleSubmit">
    <h3>S'enregistrer</h3>
    <div class="form-group">
      <label for="form-control email">Email</label>
      <input
        type="email"
        class="form-control email"
        v-model="email"
        placeholder="Email"
      />
    </div>

    <div class="form-group">
      <label for="form-control password">Password</label>
      <input
        type="password"
        class="form-control password"
        v-model="password"
        placeholder="password"
      />
    </div>

    <!-- <div class="form-group">
      <label for="form-control password">Confirmation du Password</label>
      <input
        type="password"
        class="form-control password"
        v-model="password_confirm"
        placeholder="password"
      />
    </div> -->

    <div class="form-group">
      <label for="form-control pseudo">Pseudo</label>
      <input
        type="text"
        class="form-control pseudo"
        v-model="pseudo"
        placeholder="Pseudo"
      />
    </div>

    <button class="btn btn-primary btn-block">Se connecter</button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "SiGnUp",
  data() {
    return {
      email: "",
      password: "",
      pseudo: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("signup", {
        email: this.email,
        password: this.password,
        pseudo: this.pseudo,
      });
      localStorage.setItem("token", response.data.token);
    },
  },
};
</script>
