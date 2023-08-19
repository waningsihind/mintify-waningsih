<template>
  <div class="organization">
    <h1 class="my-10" style="color: #3d6647; text-align: center">Our People</h1>
    <v-container>
      <v-row class="employee-row">
        <v-col
          v-for="(employee, index) in employees"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="employee-card" elevation="2">
            <v-img
              :src="employee.photo"
              alt="Employee Photo"
              height="250"
              width="200"
            ></v-img>
            <v-card-text>
              <div class="employee-info">
                <div class="employee-name">{{ employee.name }}</div>
                <div class="employee-position">{{ employee.position }}</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          name: "Na Jaemin",
          position: "President",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/a7a26c10269d41da9b5396a88d46c86a_2023-07-17-01-35-07.jpg",
        },
        {
          name: "Lim Yoon Ah",
          position: "Vice President",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/dce946ffab0c419cbd7953839198efef_2022-08-22-10-24-48.jpg",
        },
        {
          name: "Yang Yang",
          position: "Senior Vice President",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/e24dd273f88943c1a72babd7428ea858_2022-02-22-02-49-07.jpg",
        },
        {
          name: "Sung Chan",
          position: "Junior Vice President",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/5c9c601b44394d5f91b88a267b625690_2023-08-16-09-47-34.jpg",
        },
        {
          name: "Moon Ka Yong",
          position: "Finance Director",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/97f4b1d121b6427c98acd875b955e5c2_2023-07-20-05-17-07.jpg",
        },
        {
          name: "Han Seon Hwa",
          position: "Assistant Finance Director",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/e2b5cd77605946878384c8cb95d1a932_2023-07-20-05-43-21.jpg",
        },
        {
          name: "Yuri",
          position: "Managing Director",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/5de611355b0547148a70d544785c794f_2023-03-20-08-58-13.jpg",
        },
        {
          name: "Irene",
          position: "Assistant Managing Director",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/1446e89868644d169d853df9cea000f3_2023-04-10-09-29-57.jpg",
        },
        {
          name: "Kang Han Na",
          position: "Senior Advisor Associate",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/ec9653fb75e34aa686fec5a2e88b3f28_2022-02-16-02-29-01.jpg",
        },
        {
          name: "Go Minsi",
          position: "Junior Advisor Associate",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/c84d787c95ba4225b020172e7c5d003c_2022-02-16-13-48-48.jpg",
        },

        {
          name: "Wendy",
          position: "Advisor Associate",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/f6b99d60e7644270b6e1611fc14698c1_2023-04-10-09-28-57.jpg",
        },
        {
          name: "Kim Yerim",
          position: "Advisor Associate",
          photo:
            "https://smtown-cdn.smtown.com/upload/profile/web-detail/7eb9308e883e4c3f9f880fdcef206cb1_2022-02-18-18-40-45.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.employee-card {
  margin: 10px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.employee-row {
  flex-wrap: wrap;
}
.employee-info {
  margin-top: 10px;
}
.employee-name {
  font-weight: bold;
}
.employee-row {
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
