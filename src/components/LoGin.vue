<!-- <template>
  <form @submit.prevent="handleSubmit">
    <h3>Se connecter</h3>
    <div class="form-group">
      <label for="form-control email">Email</label>
      <input
        type="email"
        class="form-control email"
        v-model="email"
        placeholder="Email"
      />
    </div>

    <div class="form-group">
      <label for="form-control password">Password</label>
      <input
        type="password"
        class="form-control password"
        v-model="password"
        placeholder="password"
      />
    </div>

    <button class="btn btn-primary btn-block">Se connecter</button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "LoGin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email: this.email,
          password: this.password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.userId);
      this.$router.push("/");
    },
  },
};
</script> -->
