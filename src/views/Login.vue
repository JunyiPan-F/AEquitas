<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

// reference to the password that the user inputs
const password = ref("");

// TODO: add navigation guard for users that are not logged in
const login = async () => {
  const url = `${import.meta.env.VITE_VUE_APP_API}/auth`;

  try {
    const response = await axios.get(url, {
      headers: {
        password: password.value,
      },
    });

    // only login for 200 OK HTTP response
    if (response.status == 200) {
      sessionStorage.setItem("password", password.value);
      sessionStorage.setItem("authenticated", "true");
      router.push("/search");
    } else {
      throw "Invalid login: response status not OK";
    }
  } catch(error) {
    console.log(error);
  }
};

</script>

<template>
  <v-app style="background-color: #f3f3f3;">
    <div id="login-page">
      <div
        id="login-logo"
        class="d-flex align-center"
      >
        <v-img
          alt="AEquitas Logo"
          class="shrink mr-2"
          contain
          src="https://aequitasresource.org/wp-content/themes/AEquitas/assets/icons/Logo@2x.png"
          transition="scale-transition"
          width="175"
        />
        <h2 id="docs-header">
          docs
        </h2>
      </div>
      <div id="login-body-container">
        <div id="login-pane">
          <form @submit.prevent>
            <h3 class="login-header">
              Login
            </h3>
            <input
              style="margin-bottom:10px"
              type="password"
              name="password"
              placeholder="Master password"
              v-model="password"
            >
            <div style="width:100%">
              <v-btn
                class="login-btn"
                elevation="0"
                depressed
                type="submit"
                @click="login"
              >
                Login
              </v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
#login-page {
  position: absolute;
  top: 80px;
  left: 30%;
  height: 100%;
  width: 500px;
  height: 250px;
  border: 2px solid gainsboro;
  background: #f9f9f7;
  margin: auto;
  border-radius: 2%;
  padding: 10px;
}
#docs-header {
  font-weight: 400;
  font-family: serif;
  color: black;
  text-decoration: none;
}
#login-logo {
  margin: auto;
  width: 233px;
  height: 74px;
  vertical-align: middle;
  padding: 10px;
  font-size: 17px;
  color: white;
}
.login-btn {
  width:100%;
  background-color: #3059A3!important;
  color: white!important;
  font-weight: bold;
}
.login-btn:hover {
  background-color: #0042AD!important;
}
#login-body-container {
  background-position: top;
  max-width: 1176px;
  margin: auto;
  height: 100%;   
}
#login-pane {
  display:flex;
  justify-content: center;
}
.login-header {
  text-align: center;
  margin-top: .5rem;
  margin-bottom: .5rem;
}
input {
  border: 1px solid black;
  border-radius: 5px;
  padding: .5rem;
}
</style>
