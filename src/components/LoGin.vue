<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <h1 id="connect">Se connecter</h1>
    <p id="pitchSignup">
      Vous n'avez pas encore de compte ? <a href="/signup">Créer un compte</a>
    </p>
    <div class="containerLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control email"
          v-model="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
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
.form-group {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
}
.form-group label {
  margin: 20px 30px;
}
@media screen and (min-width: 993px) and (max-width: 1366px) {
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
}
@media screen and (min-width: 769px) and (max-width: 992px) {
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

  /* .form-group label {
    margin: 10px auto;
  } */
  .validation {
    margin: 10px auto;
  }
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

  /* .form-group label {
    margin: 10px auto;
  } */
  .validation {
    margin: 10px auto;
  }
}
</style>
