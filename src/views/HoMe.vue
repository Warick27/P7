<template>
  <div>
    <!-- Voir la Nav pour faire disparaitre Home quand sur page profil -->
    <div v-if="user.length > 0">
      <h3 id="welcome">Bienvenue, {{ user.pseudo }}</h3>
      <div id="actions">
        <button class="btn btn-block" @click.prevent="clickProfile">
          Mon profil
        </button>
        <button class="btn btn-block" @click="clickPost">
          Ajouter un nouveau post
        </button>
        <button class="btn btn-block" @click="Disconnexion">
          Se déconnecter
        </button>
      </div>

      <FeedShow />
    </div>
    <div v-else id="notConnected">
      <h3>Vous n'êtes pas connecté</h3>
      <ul class="ml-auto connexion">
        <li class="nav-link">
          <router-link to="/login" class="btn btn-block"
            >Se connecter</router-link
          >
        </li>
        <li class="nav-link">
          <router-link to="/signup" class="btn btn-block"
            >S'enregistrer</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FeedShow from "../components/FeedShow.vue";

export default {
  name: "HoMe",
  data() {
    return {
      user: [],
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
<style scoped>
#homeLogo {
  z-index: -1;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  width: 40% !important;
  height: 50%;
}

@media screen and (min-width: 993px) {
  #notConnected {
    margin: auto;
    width: 70%;
  }
}
@media screen and (min-width: 769px) and (max-width: 992px) {
  #notConnected {
    margin: auto;
    width: 70%;
  }
  #actions {
    display: flex;
    justify-content: space-between;
  }
  #actions button {
    margin: 20px 0;
    width: 30%;
    padding: 0;
  }
}
@media screen and (max-width: 768px) {
  #welcome {
    margin-top: 20px;
  }
  #actions {
    flex-direction: column;
  }
  #actions button {
    margin: 10px;
  }
  #homeLogo {
    width: 80% !important;
    top: 45%;
  }
}
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
