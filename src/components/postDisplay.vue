<template>
  <div id="news">
    <div class="action">
      <button class="btn btn-block" @click="postmodify">Modifier</button>
      <button class="btn btn-block" @click="postDelete">Supprimer</button>
    </div>

    <div class="feed">
      <article class="post" v-for="item in post" :key="item.postId">
        <div class="post_user">
          <ul class="post_user_band">
            <li>{{ item.pseudo }}</li>
            <li>{{ formatDate(item.date) }}</li>
            <li></li>
          </ul>
          <h1>
            {{ item.title }}
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
                <p>{{ item.likes }}</p>
                <a class="bt-style" @click="addLike">
                  <img
                    src="../assets/heart-regular.svg"
                    alt="J'aime"
                    id="heart"
                  />
                </a>
              </div>
              <a
                class="bt-style comCount"
                :href="'/post/' + item.postId + '/comment'"
              >
                <p class="count">{{ count[0].count }}</p>
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
// import router from "../router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "onePost",
  data() {
    return {
      post: [],
      count: [0],
    };
  },
  created() {
    let token = localStorage.getItem("token");
    const id = this.$route.params.id;
    axios
      .get("post/" + id, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        this.post = response.data;
        console.log(this.post);
      });
    axios
      .get("/comment/count/" + id, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        this.count = res.data;
        console.log(this.count);
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
      let idPost = this.$route.params.id;
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
    postmodify() {
      let idUser = localStorage.getItem("id");
      let idPost = this.$route.params.id;
      const idAuthor = this.post[0].authorId;
      if (idAuthor == idUser) {
        console.log(idAuthor + " est égale à " + idUser);
        this.$router.push(`/post/modify/${idPost}`);
      } else {
        alert(
          " Vous n'êtes pas l'auteur de ce post. Vous ne pouvez pas le modifier"
        );
      }
    },
    showActions() {
      const idUser = localStorage.getItem("id");
      const idAuthor = this.post[0].authorId;
      if (idAuthor == idUser) {
        this.mode = "true";
      }
    },
    postDelete() {
      const idUser = localStorage.getItem("id");
      const idAuthor = this.post[0].authorId;
      if (idAuthor == idUser) {
        this.delete();
      } else {
        alert(
          " Vous n'êtes pas l'auteur de ce post. Vous ne pouvez pas le supprimer"
        );
      }
    },
    async delete() {
      const idPost = this.$route.params.id;
      const idUser = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      const response = await axios
        .delete(
          `post/${idPost}`,
          { data: { userId: idUser } },
          {
            headers: { Authorization: "Bearer " + this.token },
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((response) => {
          console.log(response);
          alert("Publication supprimée !");
        });
      this.$router.push("/");
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
.action {
  display: flex;
  justify-content: space-around;
}
.feed {
  margin: 10px auto;
}

.post {
  margin: 20px auto;
  border: 1px solid #ffd7d7;
  border-radius: 10px;
  width: 50%;
}

#ellipsis,
#heart {
  width: 20px;
  background-color: transparent;
}

.btn {
  color: white;
}
#com {
  width: 20px;
}
.comCount {
  display: flex;
  align-items: center;
}
.count {
  margin-right: 10px;
  margin: auto 5px;
  font-size: 22px;
}

.picto {
  height: 300px;
}
.picto img {
  width: 100%;
  height: 300px;
  object-fit: cover;
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
  margin: 20px 20px 10px;
  padding: 10px;
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
@media screen and (max-width: 1366px) {
  .post {
    width: 100%;
  }
  .feed {
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .action {
    margin-top: 10px;
    flex-direction: column;
  }

  .action button {
    margin: 10px;
    color: white;
  }

  .post {
    width: 100%;
  }
  .feed {
    margin: 0 auto;
  }
}
</style>
