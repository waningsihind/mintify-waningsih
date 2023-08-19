<template>
  <v-app>
    <v-app-bar app color="secondary">
      <router-link to="/" class="logo-link">
        <v-avatar class="logo">
          <v-img alt="Mintify Logo" contain src="../assets/logo.png" />
        </v-avatar>
      </router-link>
      <v-spacer></v-spacer>
      <v-menu offset-y color="#3d6647">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Menu</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.title">
            <router-link :to="item.to" class="text-decoration-none">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app class="footer" color="secondary">
      <v-row justify="center" class="py-2">
        <v-col cols="12" class="text-center">
          &copy; 2023, Waningsih Indah Lestary. All rights reserved.
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
        { title: "Our People", to: "/people" },
        { title: "News", to: "/news" },
        { title: "Contact Us", to: "/contact" },
      ],
    };
  },
};
</script>

<style>
.text-decoration-none {
  text-decoration: none;
}

.logo-link {
  text-decoration: none;
}

.logo {
  max-width: 100px;
  height: auto;
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.05);
}

.footer {
  background-color: #1f1f1f;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  padding: 10px 0;
}
</style>
