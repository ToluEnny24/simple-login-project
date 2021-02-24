<template>
  <div id="login">
    <h1>Login</h1>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Enter Username"
    />
    <br />
    <br />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Enter Password"
    />
    <br /><br />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.playAccount.username &&
          this.input.password == this.$parent.playAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "welcome" });
        } else {
          console.log("The username and password is incorrect");
        }
      } else {
        console.log("A username and password must be entered");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 80%;
  border: 1px solid #cccccc;
  background-color: blue;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>