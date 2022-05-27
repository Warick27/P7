<script setup></script>

<template>
  <div id="app">
    <NaV />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NaV from "./components/NaV.vue";

export default {
  name: "App",
  components: {
    NaV,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  background: #1c8ef9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: "fira sans", sans-serif;
}

body,
html,
#app,
#root,
.auth-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light {
  background-color: #fff;
  box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  /* display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left; */
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
}

.auth-inner {
  width: 70vw;
  margin: auto;
  background: #fff;
  box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
  line-height: 20px;
}
.custom-control-label {
  font-weight: 400;
}
</style>
