<template>
  <form @submit="handlelogin">
    <h3 v-if="mode == 'signup'">S'enregistrer</h3>
    <h3 v-else>Se connecter</h3>
    <p v-if="mode == 'signup'">
      Bon retour sur la plateforme social de Groupomania !
      <span class="link" @click.prevent="switchToLogin()">Connecte toi</span>
    </p>
    <p v-else>
      Nouveau sur la plateforme social de Groupomania ?
      <span class="link" @click.prevent="switchToSignup()"
        >Crée toi un compte</span
      >
    </p>
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

    <div class="form-group" v-if="mode == 'signup'">
      <label for="form-control pseudo">Pseudo</label>
      <input
        type="text"
        class="form-control pseudo"
        v-model="pseudo"
        placeholder="Pseudo"
      />
    </div>

    <button
      class="btn btn-primary btn-block"
      :class="{ disabled: !validateData }"
      v-if="mode == 'signup'"
    >
      S'inscrire
    </button>
    <button
      class="btn btn-primary btn-block"
      :class="{ disabled: !validateData }"
      v-else
    >
      Se connecter
    </button>
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
      mode: "login",
    };
  },
  computed: {
    validateData: function () {
      if (this.mode == "signup") {
        if (this.email != "" && this.password != "" && this.pseudo != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  methods: {
    switchToSignup: function () {
      this.mode = "signup";
    },
    switchToLogin: function () {
      this.mode = "login";
    },
    // async handleSubmit() {
    //   const response = await axios.post("/user/signup", {
    //     email: this.email,
    //     password: this.password,
    //     pseudo: this.pseudo,
    //   });
    //   console.log(response);
    //   localStorage.setItem("id", response.data.userId);
    //   localStorage.setItem("token", response.data.token);
    //   this.$router.push("/");
    // },
    async handleLogin() {
      const response = await axios.post("/user/login", {
        email: this.email,
        password: this.password,
      });
      console.log(response);
      localStorage.setItem("id", response.data.userId);
      localStorage.setItem("token", response.data.token);
      this.$router.push("/");
    },
  },
};
</script>
