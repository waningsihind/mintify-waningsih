<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" class="order-2 order-md-1">
        <v-row class="d-flex justify-center align-center h-100">
          <v-col cols="12" class="text-center">
            <p class="home-text pa-12 mt-8">
              We are here to help you optimize your personal or business
              finances for desired stability and growth.
            </p>
            <v-btn class="mt-2" color="primary" dark @click="navigateToPeople">
              Our People Who Can Help You
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="order-1 order-md-2">
        <v-img
          src="https://p4.wallpaperbetter.com/wallpaper/436/368/905/hands-costume-office-firm-wallpaper-preview.jpg"
          class="my-3"
        />
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d5f77c104128975.5f5bdc0d6d7b6.gif"
          class="my-3"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-row class="d-flex justify-center align-center h-100">
          <v-col class="text-center">
            <div class="custom-div">
              <v-img
                class="logo-style"
                src="../assets/logo.png"
                height="150px"
                width="150px"
                cover
              />
            </div>
            <h3 class="home-text0 pa-8">"Guiding Your Financial Journey"</h3>
            <v-btn class="mt-3" color="primary" dark @click="navigateToContact">
              Let's Get Started
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    navigateToContact() {
      this.$router.push("/contact");
    },
    navigateToPeople() {
      this.$router.push("/people");
    },
  },
};
</script>

<style>
.home-text {
  font-size: 2rem;
  line-height: 3rem;
}

.home-text0 {
  font-size: 2rem;
  line-height: 3rem;
}

.v-btn {
  font-family: sans-serif;
}

.custom-div {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-style {
  margin-left: 300px;
}

@media (max-width: 768px) {
  .logo-style {
    margin-left: 150px;
  }
}

@media (max-width: 480px) {
  .logo-style {
    margin-left: 50px;
  }
}
@media (max-width: 768px) {
  .order-md-1,
  .order-md-2 {
    order: 1;
  }

  .order-md-1 .v-img {
    display: none;
  }

  .order-md-2 .v-img {
    display: none;
  }

  .home-text,
  .home-text0 {
    font-size: 1.2rem;
    line-height: 2rem;
  }
}
</style>
