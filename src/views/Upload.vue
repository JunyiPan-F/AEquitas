<script setup lang="ts">
import NavLayout  from "../components/NavLayout.vue";

const upload = () => {
  console.log("upload clicked");
};
</script>

<template>
  <NavLayout>
    <div>
      <h1 id="title">
        Upload a document
      </h1>
    </div>
    <div id="upload">
      <form
        action="/upload"
        method="post"
        enctype="multipart/form-data"
      >
        <input
          type="file"
          name="file"
        >
        <button
          id="submit"
          type="submit"
          value="Submit"
          @click="upload"
        >
          Submit
        </button>
      </form>
    </div>
  </NavLayout>
</template>

<style scoped>
#title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 60px;
  color:#3059A3;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
}
#submit {
  padding: 10px 30px;
	margin: 50px;
	border-radius: 5px;
	background-color: #3159A3;
	color: white;
	font-weight: bold;
}
#submit:hover {
  background-color: #557fcc;
}
input {
	width: 210px;
}
form {
	display: flex;
	align-items: center;
	flex-direction: column;
}
</style>