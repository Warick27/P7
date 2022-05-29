<template>
  <nav class="navbar navbar-expand navbar-light fixed-top d-flex">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NaV",
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
