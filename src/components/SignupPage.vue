<template>
  <form @submit.prevent="handleSignup">
    <h1 id="connect">S'enregistrer</h1>
    <p>
      Vous disposez déjà d'un compte ? <a href="/login">Accéder à mon compte</a>
    </p>

    <div class="containerSignup">
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
      <div class="form-group">
        <label for="pseudo">Pseudo</label>
        <input
          type="text"
          id="pseudo"
          class="form-control pseudo"
          v-model="pseudo"
          placeholder="Pseudo"
        />
      </div>
      <button class="btn">Valider</button>
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
      localStorage.setItem("id", response.data.userId);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("pseudo", response.data.pseudo);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.btn {
  color: white;
}
.form-group {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
.form-group label {
  margin: 20px 50px;
}
@media screen and (min-width: 993px) {
  .containerSignup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
  }
  .form-group {
    width: 75%;
  }
  /* .form-group label {
    margin: 10px auto;
  } */
  .validation {
    margin: 10px auto;
  }
  .btn {
    margin-top: 20px;
    width: 30%;
    text-align: center;
  }
}
@media screen and (max-width: 992px) {
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

  /* .form-group label {
    margin: 10px auto;
  } */
  .validation {
    margin: 10px auto;
  }
}
</style>
