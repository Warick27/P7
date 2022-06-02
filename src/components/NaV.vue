<template>
  <nav class="nav navbar-light">
    <div class="container">
      <router-link to="/" class="home"
        ><img src="../assets/house-solid.svg" alt="house" id="house"
      /></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NaV",
  data() {
    return {};
  },
};
</script>
<style>
.nav {
  height: 50px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
#house {
  width: 40px;
  height: 40px;
  color: #4e5166;
  cursor: pointer;
}

#navLogo {
  width: 30% !important;
  height: auto;
}
.home {
  color: #4e5166;
  text-decoration: none;
  font-size: x-large;
}

.container {
  display: flex;
  justify-content: flex-start;
}
#logoN {
  display: flex;
}
</style>
