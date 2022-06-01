<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <h3>Se connecter</h3>
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

    <button class="btn btn-primary btn-block">Se connecter</button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "LoGin",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("/user/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.userId);
        localStorage.setItem("pseudo", response.data.pseudo);
        this.$router.push("/");
      } catch (e) {
        this.error = "Email ou mot de passe invalide";
      }
    },
  },
};
</script>
