<template>
  <h1>Nouveau commentaire</h1>
  <form class="containerCom" @submit.prevent="commentSend">
    <div class="tofill">
      <label for="message" class="field_label">
        <textarea
          name="message"
          id="message"
          v-model.trim="message"
          class="field_input"
          cols="20"
          rows="5"
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
      const id = this.$route.params.id;
      let token = localStorage.getItem("token");
      const response = await axios.post(
        "/comment",
        {
          postId: id,
          authorId: userId,
          commentaire: this.message,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.containerCom {
  margin: 50px auto;
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
}
#message {
  height: 100px;
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
  margin: 0 auto 30px;
  border-radius: 0.375rem;
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
  display: flex;
  /* box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); */
  /* border-radius: 0.375rem; */
  margin: 0 auto;
  /* padding: 8px; */
  border: none;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  color: black;
  flex: 1;
}

.field_input::placeholder {
  color: #aaaaaa;
}

.validation {
  margin-bottom: 10px;
}
</style>
