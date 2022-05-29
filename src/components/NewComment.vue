<template>
  <h1>Nouveau commentaire</h1>
  <form class="containerCom">
    <div class="tofill">
      <label for="message" class="field_label">
        <textarea
          name="message"
          id="message"
          v-model.trim="message"
          class="field_input"
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <!-- <span v-if="errors.pseudo">{{ errors.pseudo }}</span> -->
    </div>
    <div class="validation">
      <button class="btn btn-primary btn-block" type="submit">Valider</button>
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "ComCreation",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    validateData: function () {
      if (this.message != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async commentSend() {
      const userId = localStorage.getItem("id");
      const response = await axios.post("/comment", {
        message: this.message,
        authorId: userId,
      });
      console.log(response);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.containerCom {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  border: 1px solid rgb(139, 136, 136);
  min-width: 350px;
  background: white;
  border-radius: 10px;
  padding: 20px;
}
#message {
  height: 300px;
  width: 600px;
}
@media screen and (min-width: 1366px) {
  .containerPost {
    top: 50%;
    min-width: 450px;
  }
}
h2 {
  text-align: center;
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
</style>
