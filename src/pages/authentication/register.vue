<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div
          class="col-xl-7 b-center bg-size p-0"
          :style="{ backgroundImage: 'url('+ require('../../assets/images/login/1.jpg') +')' }"
          style="background-size: cover; background-position: center center; display: block;"
        >
          <img
            class="bg-img-cover bg-center"
            src="../../assets/images/login/1.jpg"
            alt="login page"
            style="display: none;"
          />
        </div>
        <div class="col-xl-5 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img
                    class="img-fluid for-light"
                    src="../../assets/images/logo/logo.png"
                    alt="login page"
                  />
                  <img
                    class="img-fluid for-dark"
                    src="../../assets/images/logo/logo_dark.png"
                    alt="login page"
                  />
                </a>
              </div>
              <div class="login-main">
                <form class="theme-form" @submit.prevent="registerUser">
                  <h4>Create your account</h4>
                  <p>Enter your personal details to create an account</p>
                  <div class="form-group">
                    <label class="col-form-label pt-0">Your Name</label>
                    <div class="row g-2">
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          v-model="firstName"
                          required
                          placeholder="First name"
                        />
                      </div>
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          v-model="lastName"
                          required
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input
                      class="form-control"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Test@gmail.com"
                    />
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Phone Number</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="phoneNumber"
                      required
                      placeholder="1234567890"
                    />
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Blood Group</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="bloodGroup"
                      required
                      placeholder="B+ve"
                    />
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <div class="form-input position-relative">
                      <input
                        class="form-control"
                        :type="passwordVisible ? 'text' : 'password'"
                        v-model="password"
                        required
                        placeholder="*********"
                      />
                      <div class="show-hide">
                        <span
                          :class="passwordVisible ? 'hide' : 'show'"
                          @click.prevent="togglePasswordVisibility"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Confirm Password</label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="passwordConfirmation"
                      required
                      placeholder="*********"
                    />
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox" v-model="privacyPolicy" />
                      <label class="text-muted" for="checkbox1">
                        Agree with
                        <a class="ms-2" href="#">Privacy Policy</a>
                      </label>
                    </div>
                    <button
                      class="btn btn-primary btn-block"
                      type="submit"
                      :disabled="!privacyPolicy"
                    >
                      Create Account
                    </button>
                  </div>
                  <h6 class="text-muted mt-4 or">Or signup with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase">
                      <a class="btn btn-light" href="#">
                        <vue-feather class="txt-linkedin" type="linkedin"></vue-feather>
                        LinkedIn
                      </a>
                      <a class="btn btn-light" href="#">
                        <vue-feather class="txt-twitter" type="twitter"></vue-feather>
                        Twitter
                      </a>
                      <a class="btn btn-light" href="#">
                        <vue-feather class="txt-fb" type="facebook"></vue-feather>
                        Facebook
                      </a>
                    </div>
                  </div>
                  <p class="mt-4 mb-0">
                    Already have an account?
                    <router-link class="ms-2" tag="a" to="/auth/login">
                      Login
                    </router-link>
                  </p>
                </form>
              </div>
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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      bloodGroup: "",
      password: "",
      passwordConfirmation: "",
      privacyPolicy: false,
      passwordVisible: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    async registerUser() {
      const requestData = {
        name: `${this.firstName} ${this.lastName}`,
        email: this.email,
        phone_number: this.phoneNumber,
        blood_group: this.bloodGroup,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        pic: "string",
      };

      try {
        const response = await axios.post(
          "https://api.floatingbloodbank.com/api/v1/auth/register",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("Registration successful!");
        console.log(response.data);
      } catch (error) {
        console.error("Error during registration:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Registration failed. Please try again.");
      }
    },
  },
};
</script>
