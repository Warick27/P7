<template>
  <div id="news">
    <div class="feed">
      <article class="post">
        <div class="post_user">
          <ul class="post_user_band">
            <li>{{ post.authorId }}</li>
            <li>{{ post.date }}</li>
            <li>
              <button class="btn-style">
                <img
                  src="../assets/ellipsis-solid.svg"
                  alt="profil"
                  id="ellipsis"
                />
              </button>
            </li>
          </ul>
          <h1>
            {{ item.title }}
          </h1>
        </div>
        <div class="post_image">
          <div class="picto">
            <img :src="post.imageUrl" />
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
              <!-- Voir que faire avec bouton comment sur cette page -->
              <a
                class="bt-style"
                :href="'/post/' + item.postId"
                @click="addComment()"
              >
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
      post: [],
    };
  },
  created() {
    // récupérer id dans url
    axios.get("post").then((response) => {
      this.post = response.data;
    });
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
.field {
  margin-top: 0.25rem;
}

.field_label {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(55 65 81);
  margin-bottom: 15px;
}

.field_input {
  display: inline-flex;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-radius: 0.375rem;
  padding: 8px;
  border: none;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  color: black;
  flex: 1;
}

.field_input::placeholder {
  height: 30px;
  color: #aaaaaa;
}

.field_label {
  width: 60%;
  margin: 10px auto;
  border: 1px solid #0b040424;
  border-radius: 10px;
}

.post_comment_add {
  margin: 10px auto 20px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 70%;
}
/* // .picto img {
//   width: 100%;
//   height: 300px;
//   object-fit: cover;
// }
// .post_image {
//   border: 1px solid black;
//   border-width: 1px 0;
// }
// .post_user_band,
// .post_comment_info {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin: 20px;
//   padding: 10px;
// } */

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
