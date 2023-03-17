<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const navSearch = () => {
	router.push("/search");
};

const navUpload = () => {
  router.push("/upload");
};

const navHelp = () => {
  router.push("/help");
};

const navLogin = () => {
  sessionStorage.setItem("authenticated", "false");
  router.push("/login");
};

</script>

<template>
  <v-app>
    <v-app-bar 
      color="primary" 
      app
    >
      <div 
        id="header-title" 
        class="d-flex align-center" 
      >
        <img
          alt="AEquitas Logo"
          src="../assets/aequitas-logo.png"
          width="175"
        >
        <h2 id="docs-header">
          docs
        </h2>
      </div>
      <v-btn @click="navSearch">
        Search
      </v-btn>
      <v-btn @click="navUpload">
        Upload
      </v-btn>
      <v-btn @click="navHelp">
        Help
      </v-btn>
      <v-spacer />
      <v-btn 
        elevation="2" 
        @click="navLogin"
      >
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
#header-title {
  padding-inline: 12px;
}
#docs-header{
  font-weight: 400;
  font-family: serif;
  margin-left: 10px;
  color: black;
  text-decoration: none;
  cursor: default;
}
</style>