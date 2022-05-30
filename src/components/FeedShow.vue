<template>
  <div id="news">
    <!-- <div class="hello">Bienvenue User Name !</div> -->
    <div class="feed">
      <!-- <article class="post" v-for="item in this.posts" :key="item.postId"> -->
      <article
        ref="class"
        class="post"
        v-for="item in posts"
        :key="item.postId"
      >
        <!-- <article class="post"> -->
        <div class="post_user">
          <ul class="post_user_band">
            <li>{{ item.authorId }}</li>
            <li>{{ formatDate(item.date) }}</li>
            <li>
              <a class="btn-style" :href="'/post/' + item.postId">
                <img
                  src="../assets/ellipsis-solid.svg"
                  alt="profil"
                  id="ellipsis"
                />
              </a>
            </li>
          </ul>
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
              <button class="btn-style">
                <img
                  src="../assets/heart-regular.svg"
                  alt="J'aime"
                  id="heart"
                />
              </button>
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

export default {
  name: "FeedShow",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    let token = localStorage.getItem("token");
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
    // modalDisplay() {
    //   confirm("modifier ?");
    // },
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
