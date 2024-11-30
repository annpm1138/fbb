<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-xl-7 b-center bg-size"
        :style="{ backgroundImage: 'url(' + require('../../assets/images/login/2.jpg') + ')' }"
        style="background-size: cover; background-position: center center; display: block;"
      >
        <img class="bg-img-cover bg-center" src="../../assets/images/login/2.jpg" alt="loginpage" style="display: none;" />
      </div>
      <div class="col-xl-5 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo text-start">
                <img class="img-fluid for-light" src="../../assets/images/logo/logo.png" alt="loginpage" />
                <img class="img-fluid for-dark" src="../../assets/images/logo/logo_dark.png" alt="loginpage" />
              </a>
            </div>
            <div class="login-main">
              <form class="theme-form" @submit.prevent="login">
                <h4>Sign in to account</h4>
                <p>Enter your email & password to login</p>
                <div class="form-group">
                  <label class="col-form-label">Email Address</label>
                  <input v-model="email" class="form-control" type="email" required placeholder="Test@gmail.com" />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Password</label>
                  <div class="form-input position-relative">
                    <input
                      v-model="password"
                      class="form-control"
                      :type="active ? 'password' : 'text'"
                      required
                      placeholder="*********"
                    />
                    <div class="show-hide">
                      <span :class="active ? 'show' : 'hide'" @click.prevent="show"></span>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label class="text-muted" for="checkbox1">Remember password</label>
                  </div>
                  <button class="btn btn-primary btn-block w-100" type="submit">Sign in</button>
                </div>
                <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                <div class="social mt-4">
                  <div class="btn-showcase">
                    <a class="btn btn-light" href="#">
                      <vue-feather class="txt-linkedin" type="linkedin"></vue-feather> LinkedIn
                    </a>
                    <a class="btn btn-light" href="#">
                      <vue-feather class="txt-twitter" type="twitter"></vue-feather> twitter
                    </a>
                    <a class="btn btn-light" href="#">
                      <vue-feather class="txt-fb" type="facebook"></vue-feather> facebook
                    </a>
                  </div>
                </div>
                <p class="mt-4 mb-0 text-center">
                  Don't have an account?
                  <router-link class="ms-2" tag="a" to="/auth/register">Create Account</router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      active: true,
      email: "",
      password: "",
    };
  },
  methods: {
    show() {
      this.active = !this.active;
    },
    async login() {
      try {
        const response = await axios.post(
          "https://api.floatingbloodbank.com/api/v1/auth/login",
          {
            email: this.email,
            password: this.password,
          }
        );
        // Handle success
        console.log("Login successful:", response.data);
        const token = response.data.token;

        // Save token to localStorage or Vuex
        localStorage.setItem("jwt_token", token);

        // Redirect user to the desired page
        this.$router.push("/");
      } catch (error) {
        // Handle error
        console.error("Login failed:", error.response?.data || error.message);
        alert("Login failed. Please check your email and password.");
      }
    },
  },
};
</script>
