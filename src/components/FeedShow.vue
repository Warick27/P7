<!-- <script setup>
  const vm = getCurrentInstance();
  const handleClick = () => {
    console.log(vm);
  }
</script> -->
<template>
  <div id="news">
    <!-- <div class="hello">Bienvenue User Name !</div> -->
    <div class="feed">
      <!-- <article class="post" v-for="item in this.posts" :key="item.postId"> -->
      <article
        class="post"
        ref="item.postId"
        v-for="item in posts"
        :key="item.postId"
      >
        <!-- <article class="post"> -->
        <div class="post_user">
          <ul class="post_user_band">
            <li id="postId">{{ item.postId }}</li>
            <li>{{ item.authorId }}</li>
            <li>{{ formatDate(item.date) }}</li>
            <li>
              <div class="btn-style" @click="revealMenu">
                <!-- <a class="btn-style" 
              :href="'/post/' + item.postId"
              > -->
                <img
                  src="../assets/ellipsis-solid.svg"
                  alt="profil"
                  id="ellipsis"
                />
              </div>
            </li>
          </ul>
          <div class="manage">
            <p>modifier</p>
            <p>supprimer</p>
          </div>
          <h1>
            <a :href="'/post/' + item.postId">{{ item.title }}</a>
          </h1>
        </div>
        <div class="post_image">
          <div class="picto">
            <img :src="item.imageUrl" />
          </div>
        </div>
        <div>
          <div class="post_desc">
            <p class="authComment">
              {{ item.textPost }}
            </p>
          </div>
          <div class="post_comment">
            <div class="post_comment_info">
              <div class="heart_style">
                <p>{{ item.like }}</p>
                <button class="btn-style" @click="addLike">
                  <img
                    src="../assets/heart-regular.svg"
                    alt="J'aime"
                    id="heart"
                  />
                </button>
              </div>
              <a class="bt-style" :href="'/post/' + item.postId + '/comment'">
                <!--@click="addComment()"  -->
                <img
                  src="../assets/comment-regular.svg"
                  alt="Commentaire"
                  id="com"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { getCurrentInstance} from "vue";

export default {
  name: "FeedShow",
  data() {
    return {
      posts: [],
      token: localStorage.getItem("token"),
    };
  },
  created() {
    const token = localStorage.getItem("token");
    axios
      .get("post", { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        this.posts = response.data;
      });
  },
  methods: {
    formatDate(input) {
      const datePart = input.match(/\d+/g),
        year = datePart[0].substring(0),
        month = datePart[1],
        day = datePart[2];
      return "Publié le " + day + "." + month + "." + year;
    },
    addLike() {
      let idUser = localStorage.getItem("id");
      let idPost = document.getElementById("postId").innerText;
      axios
        .post(
          "like",
          { userId: idUser, postId: idPost },
          { headers: { Authorization: "Bearer " + this.token } }
        )
        .then((response) => {
          this.posts = response.data;
        });
    },
    revealMenu() {
      const visible = (document.querySelector(".manage").style.display);
      if ((visible.style === "none")) {
        visible.style = "block";
      } else {
        visible.style = "none";
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: black;
  font-family: "Raleway", sans-serif;
}
a {
  text-decoration: none;
}
.hello {
  text-align: center;
  font-weight: bold;
}
.feed {
  margin: 10px auto;
}

.post {
  margin: 50px auto;
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
  position: relative;
}

#ellipsis,
#heart {
  width: 20px;
  background-color: transparent;
}
.btn-style {
  background-color: white;
  border: none;
  cursor: pointer;
}
.btn-style:hover {
  color: red;
}

#com {
  width: 20px;
}

.picto {
  height: 300px;
}
.picto img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.heart_style {
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart_style p {
  margin: auto 5px;
  font-size: 22px;
}

h1 {
  font-size: inherit;
  text-align: center;
  margin-bottom: 10px;
}

.authComment {
  text-align: justify;
  margin: 10px;
  padding: 5px;
}
.post_user_band,
.post_comment_info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 10px;
  padding: 10px;
}
.manage {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 5%;
  left: 105%;
  display: none;
}
</style>
