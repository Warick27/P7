<script setup></script>

<template>
  <div id="app">
    <NaV />
    <img src="./assets/icon-left-font.svg" alt="Logo Groupomania" id="logo" />
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
  color: #4e5166;
}

body {
  /* background: #1c8ef9 !important; */
  background: #ffd7d7;
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
.btn {
  background-color: #fd2d01;
  border: none;
}

.btn:hover {
  background-color: #fd2b019b;
}

#app {
  text-align: center;
}
#logo {
  width: 10vw;
  height: 50vh;
  z-index: 0;
  overflow: hidden;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 20.5%;
  left: 8%;
}

.navbar-light {
  background-color: #FFFFFF;
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
  z-index: 1;
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

@media screen and (max-width: 768px) {
  #logo {
    display: none;
  }
  .auth-inner {
    width: 100%;
    margin: auto;
    background: #fff;
    box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
    /* padding: 40px 55px 45px 55px; */
    padding: 5px;
    border-radius: 15px;
    transition: all 0.3s;
  }
}
/* Reset CSS*/
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
p,
figure,
figcaption {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

body,
html,
aside,
h2 {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
