<template>
  <div class="MAJPost">
    <div>
      <postDisplay />
    </div>
    <div>
      <h2>Vous pouvez modifier le titre et le texte de votre publication.</h2>
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
            v-model.trim="message"
            class="field_input"
            cols="30"
            rows="10"
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
        <button class="btn btn-block" type="submit">Valider</button>
      </div>
    </div>
  </div>
</template>
<script>
import postDisplay from "../components/postDisplay.vue";
export default {
  data() {
    return {};
  },
  components: { postDisplay },
};
</script>
<style>
.MAJPost {
  display: flex;
  flex-direction: column;
}
</style>
