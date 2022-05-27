<template>
  <div class="containerProfile">
    <h1 class="titre">Modifications du profil</h1>
    <div class="edition">
      <div class="tofill">
        <label for="password" class="field_label"
          >Password :<input
            type="password"
            name="password"
            v-model.trim="password"
            id="password"
            class="field_input"
        /></label>
        <!-- <span v-if="errors.password">{{ errors.password }}</span> -->
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
        <!-- <span v-if="errors.pseudo">{{ errors.pseudo }}</span> -->
      </div>
    </div>
    <div class="validation">
      <!-- :disabled="errors.password || errors.pseudo" -->
      <button class="btn valid" :class="buttonUnselectedStyle" type="submit">
        Valider
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileM",
  data() {
    return {
      password: "",
      pseudo: "",
    };
  },
  watch: {
    // password(newValue) {
    //   console.log("password");
    //   this.validate(newValue, "password", "password", 3, 50);
    // },
    // pseudo(newValue) {
    //   console.log("pseudo");
    //   this.validate(newValue, "pseudo", "pseudo", 3, 50);
    // },
  },
  methods: {},
  // validate(value, title, name, min, max) {
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
.containerProfile {
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

h1 {
  text-align: center;
  margin-bottom: 30px;
}

@media screen and (min-width: 1366px) {
  .containerProfile {
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

.toggleDisplay_band_switch {
  margin: 20px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  width: fit-content;
  padding: 15px 20px;
  height: 50px;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  color: white;
  align-self: center;
  background: linear-gradient(to bottom right, #b7b8b8, 60%, #656767);
  border: none;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 10px 1px #d4d4d4;
}

.toggleDisplay_band_switch:hover {
  background: linear-gradient(to bottom right, #777878, 90%, #777878);
  box-shadow: 0 4px 10px 1px #a6a6a6;
}
</style>
