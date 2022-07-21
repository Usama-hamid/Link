<template>
  <div class="login">
    <div class="text-center">
      <h3>Log In</h3>
      <div>
        <div class="field">
          <label for="">Email</label>
          <b-input
            type="email"
            v-model="email"
            :state="isErr"
            class="input"
          ></b-input>
        </div>
        <div class="field">
          <label for="">Password</label>
          <b-input
            type="password"
            v-model="password"
            :state="isErr"
            class="input"
          ></b-input>
        </div>
      </div>
      <b-button variant="dark" @click="Login">Login</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      isErr: null,
    };
  },
  beforeCreate() {
    let auth = localStorage.getItem("isAuth");
    if (auth) {
      this.$router.push("/task");
    }
  },
  methods: {
    Login() {
      if (this.email == "admin@admin.com" && this.password == "admin") {
        this.isErr = true;
        setTimeout(() => {
          localStorage.setItem("isAuth", true);
          this.$router.push("/task");
        }, 1000);
      } else {
        this.isErr = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-weight: 600;
  }
  .field {
    margin-bottom: 1rem;
    label {
      float: left;
    }
  }
}
</style>
