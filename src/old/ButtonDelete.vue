<template>
  <div>
    <button class="btn suppr">Supprimer</button>
  </div>
</template>

<script>
export default {
  name: "ButtonDelete",
};
</script>

<style scoped>
.btn {
  width: fit-content;
  padding: 15px 20px;
  height: 50px;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  color: white;
  align-self: center;
  background: linear-gradient(to bottom right, #ee3d15, 60%, #735351);
  border: none;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 4px 10px 1px #d4d4d4;
}
.suppr:hover {
  background: linear-gradient(to bottom right, #ee3d15, 90%, #735351);
  box-shadow: 0 4px 10px 1px #a6a6a6;
}
</style>
