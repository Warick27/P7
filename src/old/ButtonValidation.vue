<template>
  <div>
    <button class="btn valid">Valider</button>
  </div>
</template>

<script>
export default {
  name: "ButtonValidation",
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
</style>
