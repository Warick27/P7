<template>
  <form @submit.prevent="handleSignup">
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
    <div class="form-group">
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
    >
      Valider
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
    async handleSignup() {
      const response = await axios.post("/user/signup", {
        email: this.email,
        password: this.password,
        pseudo: this.pseudo,
      });
      // console.log(response);
      localStorage.setItem("id", response.data.userId);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("pseudo", response.data.pseudo);
      this.$router.push("/");
    },
  },
};
</script>
