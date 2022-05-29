<template>
  <div>
    <!-- Voir la Nav pour faire disparaitre Home quand sur page profil -->
    <div v-if="user.length > 0">
      <h3>Bienvenue, {{ user.pseudo }}</h3>
      <div id="actions">
        <button class="btn btn-primary btn-block" @click.prevent="clickProfile">
          Mon profil
        </button>
        <button class="btn btn-primary btn-block" @click="clickPost">
          Ajouter un nouveau post
        </button>
        <button class="btn btn-primary btn-block" @click="Disconnexion">
          se déconnecter
        </button>
      </div>

      <FeedShow />
    </div>
    <div v-else>
      <h3>vous n'êtes pas connecté</h3>
      <ul class="ml-auto connexion">
        <li class="nav-link">
          <router-link to="/login" class="btn btn-primary btn-block"
            >Se connecter</router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/signup" class="btn btn-primary btn-block"
            >S'enregistrer</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import FeedShow from "./FeedShow.vue";

export default {
  name: "HoMe",
  data() {
    return {
      user: [],
      mode: "disconnected",
    };
  },
  components: {
    FeedShow,
  },
  async created() {
    // renvoi tout les users maybe for Admin ?
    const data = localStorage;
    this.user = data;
  },
  methods: {
    clickPost: function () {
      this.$router.push("/post");
    },
    clickProfile: function () {
      const id = localStorage.getItem("id");
      this.$router.push(`/users/${id}`);
    },
    Disconnexion: function () {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("pseudo");
      this.$router.go();
    },
  },
};
</script>
<style>
#actions {
  display: flex;
  justify-content: space-around;
}
#actions button {
  margin: 20px 20px 0;
}
.connexion {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 0;
  margin-top: 1vh;
}
</style>
