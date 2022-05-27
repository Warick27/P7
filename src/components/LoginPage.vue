<template>
  <form class="containerLogin" @submit.prevent="handleSubmit">
    <div class="tofill">
      <label for="email" class="field_label"
        >Email :<input
          type="email"
          name="email"
          v-model="email"
          id="email"
          class="field_input"
      /></label>
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>
    <div class="tofill">
      <label for="password" class="field_label"
        >Password :<input
          type="password"
          name="password"
          v-model.trim="password"
          id="password"
          class="field_input"
      /></label>
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>
    <div class="tofill">
      <label for="pseudo" class="field_label"
        >Pseudo :<input
          type="text"
          name="pseudo"
          v-model.trim="pseudo"
          id="pseudo"
          class="field_input"
      /></label>
      <span v-if="errors.pseudo">{{ errors.pseudo }}</span>
    </div>
    <div class="validation">
      <button
        class="btn valid"
        :class="buttonUnselectedStyle"
        type="submit"
        :disabled="errors.password || errors.pseudo || errors.email"
      >
        Valider
      </button>
    </div>
    <!-- <div
      class="modal modal-signin position-static d-block bg-secondary py-5"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h2 class="fw-bold mb-0">Se connecter</h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5 pt-0">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control rounded-3"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control rounded-3"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Mot de passe</label>
            </div>
            <button
              class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      errors: {},
      password: "",
      pseudo: "",
      email: "",
    };
  },
  components: {},
  watch: {
    email(newValue) {
      console.log("email");
      // eslint-disable-next-line
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newValue)) {
        this.errors["email"] = "";
      } else {
        this.errors["email"] = "L'adresse email n'a pas un bon format";
      }
    },
    // password(newValue) {
    //   console.log("password");
    //   this.validateName(newValue, "name", "password", 3, 50);
    // },
    // pseudo(newValue) {
    //   console.log("pseudo");
    //   this.validateName(newValue, "pseudo", "pseudo", 3, 50);
    // },
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://localhost:3000/api/user/signup",
        {
          email: this.email,
          password: this.password,
          pseudo: this.pseudo,
        }
      );
      localStorage.setItem("token", response.data.token);
    },
  },
  // validateName(value, title, name, min, max) {
  //   if (value.length < min) {
  //     this.errors[name] = "Le " + title + " est trop court";
  //   } else if (value.length > max) {
  //     this.errors[name] = "Le " + title + " est trop long";
  //   } else {
  //     this.errors[name] = "";
  //   }
  // },
};
</script>

<style scoped>
.containerLogin {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  border: 1px solid rgb(139, 136, 136);
  min-width: 350px;
  background: white;
  border-radius: 10px;
  padding: 20px;
}

@media screen and (min-width: 1366px) {
  .containerLogin {
    top: 50%;
    min-width: 450px;
  }
}

.tofill {
  margin: 10px auto 30px;
}
.field {
  margin-top: 0.25rem;
}

.field_label {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(55 65 81);
  margin-bottom: 15px;
}

.field_input {
  display: inline-flex;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-radius: 0.375rem;
  margin-left: 10px;
  padding: 8px;
  border: none;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  color: black;
  flex: 1;
}

.field_input::placeholder {
  height: 30px;
  color: #aaaaaa;
}

.btn {
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  color: white;
  background: linear-gradient(to bottom right, #20ad5b, 60%, #0e6429);
  border: none;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 10px 1px #d4d4d4;
}

.valid:hover {
  background: linear-gradient(to bottom right, #20ad5b, 90%, #0e6429);
  box-shadow: 0 4px 10px 1px #a6a6a6;
}

.validation {
  display: flex;
}

/* // .field_label {
//   display: flex;
//   align-items: center;
//   font-size: 1.2rem;
//   line-height: 1.25rem;
//   font-weight: 500;
//   color: rgb(55 65 81);
//   margin-bottom: 15px;
// }
// .field_input {
//   display: inline-flex;
//   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//   border-radius: 0.375rem;
//   margin-left: 10px;
//   padding: 8px;
//   border: none;
//   background: #f2f2f2;
//   font-weight: 500;
//   font-size: 16px;
//   color: black;
//   flex: 1;
// }
// .field_input::placeholder {
//   height: 30px;
//   color: #aaaaaa;
// } */

/* .btn {
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  background: linear-gradient(to bottom right, #ecf4ef, 60%, #20ad5b);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
} */
</style>
