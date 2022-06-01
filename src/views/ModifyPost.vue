<template>
  <form class="containerPost" @submit.prevent="handleSubmit()">
    <h1>Modification du post</h1>
    <div class="tofill" v-for="item in post" :key="item.postId">
      <label for="titre" class="field_label"
        ><input
          type="text"
          name="titre"
          v-model.trim="titre"
          id="titre"
          class="field_input"
          :placeholder="[item.title]"
      /></label>
      <label for="message" class="field_label">
        <textarea
          name="message"
          id="message"
          v-model.trim="message"
          class="field_input"
          cols="30"
          rows="10"
          :placeholder="`${item.textPost}`"
        ></textarea>
      </label>
      <label for="image" class="field_label"
        >Ajouter une image ? :<input
          type="file"
          name="image"
          id="image"
          ref="fileUpload"
          class="field_input"
          @change="onFileSelected"
      /></label>
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
  name: "PostCreation",
  data() {
    return {
      post: [],
      titre: "",
      message: "",
      selectedFile: null,
    };
  },
  created() {
    let token = localStorage.getItem("token");
    const id = this.$route.params.id;
    axios
      .get("post/" + id, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        this.post = response.data;
        console.log(this.post);
      });
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile.name);
    },
    handleSubmit() {
      if (this.selectedFile == null) {
        const id = localStorage.getItem("id");
        let token = localStorage.getItem("token");
        const postId = this.$route.params.id;
        const fd = new FormData();
        fd.append("title", this.titre);
        fd.append("text", this.message);
        fd.append("userId", id);
        const response = axios.put(
          `post/${postId}`,
          fd,
          { headers: { Authorization: "Bearer " + token } },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log(response);
        this.$router.push("/");
      } else {
        const id = localStorage.getItem("id");
        let token = localStorage.getItem("token");
        const postId = this.$route.params.id;

        const fd = new FormData();
        fd.append("image", this.selectedFile, this.selectedFile.name);
        fd.append("title", this.titre);
        fd.append("text", this.message);
        fd.append("userId", id);

        const response = axios.put(
          `post/${postId}`,
          fd,
          { headers: { Authorization: "Bearer " + token } },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log(response);
        // this.$router.push("/");
      }
    },
  },
};
</script>
<style>
.containerPost {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  /* border: 1px solid #FD2D01; */
  /* min-width: 350px; */
  width: 70vw;
  /* background: white; */
  border-radius: 10px;
  padding: 20px;
}
/* #message {
  height: 200px;
} */
@media screen and (min-width: 1366px) {
  .containerPost {
    top: 50%;
    min-width: 450px;
  }
}
h2 {
  margin-bottom: 30px;
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
@media screen and (max-width: 768px) {
  .containerPost {
    width: 100%;
    padding: 5px;
    margin: 0;
  }
  .field_input {
    margin: 0;
  }

}
</style>
