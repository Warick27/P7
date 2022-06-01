<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <h3 id="connect">Se connecter</h3>
    <div class="containerLogin">
      <div class="form-group">
        <label for="form-control email"></label>
        <input
          type="email"
          class="form-control email"
          v-model="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="form-control password"></label>
        <input
          type="password"
          class="form-control password"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button class="btn">Se connecter</button>
    </div>
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
<style>
.btn {
  color: white;
}
@media screen and (max-width: 768px) {
  #connect {
    margin-top: 30px;
  }
  .containerLogin {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
  .containerLogin button {
    margin-top: 20px;
  }
  /* .form-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
  } */
  .form-group label {
    margin: 10px auto;
  }
  .validation {
    margin: 10px auto;
  }
}</style>
