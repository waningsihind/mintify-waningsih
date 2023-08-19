<template>
  <div class="finance mx-15">
    <h1 class="my-10" style="color: #3d6647; text-align: center">
      Latest News
    </h1>
    <v-container>
      <v-carousel class="mb-15">
        <v-carousel-item
          v-for="(newsItem, index) in financeList.slice(0, 5)"
          :key="index"
        >
          <v-card
            class="news-card"
            elevation="2"
            @click="openNewsLink(newsItem.url)"
          >
            <v-img
              :src="newsItem.urlToImage"
              alt="News Image"
              height="300"
            ></v-img>
            <v-card-text class="news-content">
              <v-card-title class="text-h6">{{ newsItem.title }}</v-card-title>
              <v-card-text class="news-description">{{
                newsItem.description
              }}</v-card-text>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(newsItem, index) in financeList.slice(5)"
          :key="index"
        >
          <v-card
            class="news-card"
            elevation="2"
            @click="openNewsLink(newsItem.url)"
          >
            <v-img
              :src="newsItem.urlToImage"
              alt="News Image"
              height="200"
            ></v-img>
            <v-card-text class="news-content">
              <v-card-title class="text-h6">{{ newsItem.title }}</v-card-title>
              <v-card-text class="news-description">{{
                newsItem.description
              }}</v-card-text>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      financeList: [],
    };
  },
  mounted() {
    this.fetchFinanceData();
  },
  methods: {
    fetchFinanceData() {
      const apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a4dc3c1560384b0fa4f341b8ad2be55e`;

      axios
        .get(apiUrl)
        .then((response) => {
          this.financeList = response.data.articles;
        })
        .catch((error) => {
          console.error("Error fetching finance data:", error);
        });
    },
    openNewsLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
.news-card {
  margin: 10px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.news-content {
  padding: 16px;
  text-align: justify;
}

.news-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 600px) {
  .news-card {
    width: 100%;
    height: auto;
  }
}
</style>
