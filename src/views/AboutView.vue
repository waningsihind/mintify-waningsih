<template>
  <div>
    <h1 class="my-10" style="color: #3d6647; text-align: center">
      About Mintify
    </h1>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" class="order-2 order-md-1">
          <v-row class="d-flex justify-center align-center h-100">
            <v-col cols="12" class="text-justify">
              <p class="home-text pa-12gi">
                Mintify distinguishes itself through its holistic approach to
                financial guidance, seamlessly integrating personalized
                strategies for individuals and businesses alike. By combining a
                deep understanding of clients' values with cutting-edge
                financial analysis, Mintify crafts tailored solutions that
                navigate the complexities of today's financial landscape. With a
                track record of empowering clients to achieve both short-term
                goals and long-term aspirations, Mintify's commitment to
                innovation, education, and unwavering support sets them apart as
                a trusted partner in realizing financial success.
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="order-1 order-md-2 pr-10">
          <v-img
            src="https://wallpaperaccess.com/full/656693.jpg"
            class="my-3"
          />
        </v-col>

        <v-col cols="12" md="4" class="cols1 pl-10">
          <v-img
            src="https://c0.wallpaperflare.com/preview/331/1001/135/hands-work-teamwork-community.jpg"
            class="my-3"
          />
        </v-col>
        <v-col cols="12" md="8">
          <v-row class="d-flex justify-center align-center h-100">
            <v-col cols="12" class="text-justify">
              <p class="home-text0 pa-14">
                Mintify, a financial consulting company established in 2005, has
                made an impressive mark in the history of financial services.
                With a philosophy that upholds clients' values and dreams,
                Mintify has transformed the perspective on financial
                consultation. Originally starting as a small group of
                independent consultants, Mintify has grown into a strong partner
                for individuals and businesses, providing financial education,
                strategic advice, and innovative solutions. With dedication to
                technology and an adaptive approach, Mintify is poised to
                continue its legacy as a guiding force in clients' financial
                journeys in the future.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style>
.home-text {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.home-text0 {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.v-btn {
  font-family: sans-serif;
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
