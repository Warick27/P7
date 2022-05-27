<template>
  <div class="toggleDisplay">
    <ul class="toggleDisplay_band">
      <li class="toggleDisplay_band_switch">Editer le profil</li>
      <li class="toggleDisplay_band_switch">Supprimer le compte</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SwitchEdition",
};
</script>

<style lang="scss" scoped>
.toggleDisplay {
  &_band {
    &_switch {
      width: fit-content;
      padding: 15px 20px;
      height: 50px;
      border-radius: 10px;
      font-family: "Roboto", sans-serif;
      color: white;
      align-self: center;
      background: gray;
      border: none;
      margin: 10px;
      cursor: pointer;
      box-shadow: 0px 4px 10px 1px #d4d4d4;
    }
  }
}
</style>
