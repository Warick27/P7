<!--  eslint-disable vue/multi-word-component-names  -->
<template>
  <div class="profile">
    <div id="actions">
      <button
        class="btn btn-block"
        v-show="mode == 'Lecture' || mode == 'Suppression'"
        @click="clickEdit"
      >
        Modifier mon profil
      </button>
      <button
        class="btn btn-block"
        v-show="mode == 'Changement'"
        @click="readingProfile"
      >
        Consulter mon profil
      </button>
      <button
        class="btn btn-block"
        v-show="mode == 'Lecture' || mode == 'Changement'"
        @click="deleteAccount"
      >
        Supprimer mon compte
      </button>
      <button
        class="btn btn-block"
        v-show="mode == 'Suppression'"
        @click="readingProfile"
      >
        Consulter mon profil
      </button>
    </div>
    <div>
      <div v-if="mode == 'Lecture'" id="myPrivateInfo">
        <div v-for="item in user" :key="item.postId">
          <p>Pseudo : {{ item.pseudo }}</p>
          <p>Email : {{ item.email }}</p>
        </div>
      </div>
      <ProfileM v-else-if="mode == 'Changement'" id="signup" />
      <form @submit.prevent="handleDelete" v-else id="deleteCompte">
        <h4>Veuillez entrer votre mot de passe pour supprimer votre compte</h4>
        <h6>Attention, cette action est irréversible !</h6>
        <div class="form-group">
          <label for="form-control password"></label>
          <input
            type="password"
            class="form-control password"
            v-model="password"
            placeholder="password"
          />
        </div>
        <button class="btn btn-block">Valider</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import axios from "axios";
import ProfileM from "../components/ProfileM.vue";
export default {
  name: "profil_edition",
  data() {
    return {
      user: null,
      mode: "Lecture",
      password: "",
      token: "",
    };
  },
  components: {
    ProfileM,
  },
  created() {
    let token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    axios
      .get(`user/${userId}`, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        console.log(response);
        this.user = response.data;
      });
  },
  methods: {
    clickEdit() {
      this.mode = "Changement";
      //   this.editToggle();
    },
    deleteAccount() {
      this.mode = "Suppression";
      //   this.deleteToggle();
    },
    readingProfile() {
      this.mode = "Lecture";
    },
    async handleDelete() {
      const userId = localStorage.getItem("id");
      let token = localStorage.getItem("token");
      const response = await axios.delete(
        `user/${userId}`,

        {
          data: { password: this.password },
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("pseudo");
      alert("Votre compte a bien été supprimé. A bientôt !");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-around;
  font-size: 22px;
}
h6 {
  color: #fd2d01;
  margin-bottom: 30px;
}
@media screen and (min-width: 992px) {
  #myPrivateInfo {
    font-size: large;
    margin: 0;
  }
  #myInfo p,
  #myPrivateInfo p {
    margin: 25px auto;
    width: 300px;
  }
  #deleteCompte {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    top: 35%;
  }
  #deleteCompte button {
    align-self: center;
  }
  .form-group {
    width: 50%;
    margin: auto;
  }
}
#actions {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  display: flex;
  flex-direction: row;
  top: 10%;
  margin-bottom: 50px;
}
#actions button {
  width: 150px;
  margin: 50px;
}

form h4 {
  margin-bottom: 5% auto;
}
form input {
  margin-bottom: 5%;
}
#signup {
  margin-top: 120px;
}

@media screen and (max-width: 1366px) {
  #deleteCompte button {
    align-self: center;
  }
  .form-group {
    width: 50%;
    margin: auto;
  }
}
@media screen and (max-width: 768px) {
  .profile {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
  }
  h1 {
    font-size: 10px;
  }
  #actions {
    display: flex;
    flex-direction: row;
    top: 10%;
    margin-bottom: 20px;
  }
  #actions button,
  #deleteCompte button {
    width: 150px;
    margin: 10px;
    align-self: center;
  }
  #deleteCompte {
    display: flex;
    flex-direction: column;
    margin-top: 120px;
  }

  #signup {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  #myInfo {
    display: flex;
    margin-top: 80px;
    justify-content: center;
    text-align: justify;
    font-size: large;
    background-color: white;
  }
  #myPrivateInfo {
    display: flex;
    margin-top: 120px;

    justify-content: center;
    text-align: justify;
    font-size: large;
    background-color: white;
  }

  #myInfo p,
  #myPrivateInfo p {
    margin: 25px 10px;
  }
  #myPrivateInfo {
    font-size: large;
    margin: 0;
  }
  #myInfo p,
  #myPrivateInfo p {
    margin: 25px auto;
    width: 300px;
  }
}
</style>
