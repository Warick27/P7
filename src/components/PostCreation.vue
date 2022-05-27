<template>
  <div class="containerPost">
    <div class="tofill">
      <label for="titre" class="field_label"
        >Titre :<input
          type="text"
          name="titre"
          v-model.trim="titre"
          id="titre"
          class="field_input"
      /></label>
      <label for="message" class="field_label"
        >Message :
        <textarea
          name="message"
          id="message"
          class="field_input"
          cols="30"
          rows="10"
        ></textarea>
        <!-- <input
          type="textarea"
          name="message"
          v-model.trim="message"
          id="message"
          class="field_input"
      /> -->
      </label>
      <label for="image" class="field_label"
        >Ajouter une image ? :<input
          type="file"
          name="image"
          id="image"
          class="field_input"
      /></label>
      <!-- <span v-if="errors.pseudo">{{ errors.pseudo }}</span> -->
    </div>
    <div class="validation">
      <button class="btn btn-primary btn-block" type="submit">Valider</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostCreation",
};
</script>
<style>
.containerPost {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  border: 1px solid rgb(139, 136, 136);
  /* min-width: 350px; */
  width: 70vw;
  background: white;
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

/* .btn {
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
} */
</style>
