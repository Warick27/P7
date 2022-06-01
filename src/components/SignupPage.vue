<template>
  <form @submit.prevent="handleSignup">
  <h3 id="connect">S'enregistrer</h3>
    <div class="containerSignup">
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
      <div class="form-group">
        <label for="form-control pseudo"></label>
        <input
          type="text"
          class="form-control pseudo"
          v-model="pseudo"
          placeholder="Pseudo"
        />
      </div>
      <button
        class="btn btn-block"
        :class="{ disabled: !validateData }"
      >
        Valider
      </button>
    </div>
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
<style>
.btn {
  color: white;
}
@media screen and (max-width: 768px) {
  #connect {
    margin-top: 30px;
  }
  .containerSignup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
  .containerSignup button {
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
