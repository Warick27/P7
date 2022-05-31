<template>
  <div id="comDisplay">
    <article class="comFeed" v-for="item in comment" :key="item.commentId">
      <div>
        <ul class="comment_user_band">
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
      </div>
      <div class="message">
        <p>Commentaire : {{ item.commentaire }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "comDisplay",
  data() {
    return {
      comment: [],
    };
  },
  created() {
    let token = localStorage.getItem("token");
    const id = this.$route.params.id;
    axios
      .get("comment/" + id, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        // console.log(response.data[0].commentId);
        // const data = JSON.stringify(response.data);
        // console.log(typeof data);
        this.comment = response.data;
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

#ellipsis,
#heart {
  width: 20px;
  background-color: transparent;
}

#com {
  width: 20px;
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
.comment_user_band {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 10px;
  padding: 10px;
}

.comFeed {
  margin: 50px auto;
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
}
.message {
  height: fit content;
  text-align: justify;
  margin: 20px 20px 10px;
  padding: 10px;
}
</style>
