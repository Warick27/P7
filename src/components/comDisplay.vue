<template>
  <div id="comDisplay">
    <article class="comFeed" v-for="item in comment" :key="item.commentId">
      <div>
        <ul class="comment_user_band">
          <li>{{ item.pseudo }}</li>
          <li>{{ formatDate(item.date) }}</li>
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
      count: [],
    };
  },
  created() {
    let token = localStorage.getItem("token");
    const id = this.$route.params.id;
    axios
      .get("comment/" + id, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        this.comment = response.data;
        console.log(this.comment);
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
@media screen and (min-width: 769px) and (max-width: 992px) {
  .post {
  }
  .comFeed {
    width: 100%;
    margin: 20px auto;
  }
}
@media screen and (max-width: 768px) {
  .comFeed {
    margin: 5px auto;
    border: 1px solid #4e5166;
    border-radius: 10px;
    width: 100%;
  }
}
</style>
