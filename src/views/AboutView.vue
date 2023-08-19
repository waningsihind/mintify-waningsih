<template>
  <div>
    <v-container
      fluid
      style="
        background-image: url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg');
      "
    >
      <h1 class="my-10" style="color: #3d6647; text-align: center">
        About Mintify
      </h1>
      <div class="card-container">
        <div class="image">
          <img
            src="https://c0.wallpaperflare.com/preview/331/1001/135/hands-work-teamwork-community.jpg"
          />
        </div>
        <div class="content pe-4">
          <p class="text-justify">
            Mintify, a financial consulting company established in 2005, has
            made an impressive mark in the history of financial services. With a
            philosophy that upholds clients' values and dreams, Mintify has
            transformed the perspective on financial consultation. Originally
            starting as a small group of independent consultants, Mintify has
            grown into a strong partner for individuals and businesses,
            providing financial education, strategic advice, and innovative
            solutions. With dedication to technology and an adaptive approach,
            Mintify is poised to continue its legacy as a guiding force in
            clients' financial journeys in the future.
          </p>
        </div>
      </div>
      <div class="card-container">
        <div class="content">
          <p class="text-justify">
            Mintify distinguishes itself through its holistic approach to
            financial guidance, seamlessly integrating personalized strategies
            for individuals and businesses alike. By combining a deep
            understanding of clients' values with cutting-edge financial
            analysis, Mintify crafts tailored solutions that navigate the
            complexities of today's financial landscape. With a track record of
            empowering clients to achieve both short-term goals and long-term
            aspirations, Mintify's commitment to innovation, education, and
            unwavering support sets them apart as a trusted partner in realizing
            financial success.
          </p>
        </div>
        <div class="image">
          <img src="https://wallpaperaccess.com/full/656693.jpg" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<style>
.card-container {
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

.image {
  flex: 1;
  padding: 0 20px;
}

.image img {
  max-width: 100%;
  height: auto;
}

.content {
  flex: 2;
}
</style>
