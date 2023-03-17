<script setup lang="ts">
import { ref } from "vue";
import NavLayout  from "../components/NavLayout.vue";
import solrSearch from "../services/solr_api";

const method = "edismax";
const	parser = "vector";
const	query = ref("");  // reference to what user types in search box

// TODO: search upon pressing Enter key
const search = async () => {
  const res = await solrSearch(parser, method, 0, query.value);
  console.log(res.response.docs);
};
</script>

<template>
  <NavLayout>
    <div id="container">
      <div id="search-container">
        <input 
          type="text"
          v-model="query"
          placeholder="Search documents..."
        >
      </div>
      <div id="options-container">
        <label for="parser-select">Parser</label>
        <select 
          id="parser-select"
          v-model="parser"
        >
          <option 
            selected
            value="vector"
          >
            Vector
          </option>
          <option value="queryboost">
            Query Boost
          </option>
        </select>
        <label 
          for="type-select" 
          id="type-label"
        >
          Type
        </label>
        <select 
          id="type-select"
          v-model="method"
        >
          <option 
            selected
            value="edismax"
          >
            Edismax
          </option>
          <option 
            selected
            value="dismax"
          >
            Dismax
          </option>
        </select>
        <button 
          class="submit-btn"
          type="submit"
          @click="search()"
        >
          Search
        </button>
      </div>
    </div>
  </NavLayout>
</template>

<style scoped>
#container {
  width: 840px;
  margin: auto;
  margin-top: 30px;
}
#search-container {
  display: flex;
  margin-bottom: 10px;
}
#options-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 37px;
  gap: 5px;
}
#type-label {
  margin-left: 10px;
}
.submit-btn{
  background-color: #3059A3;
  color: white;
  font-weight: bold;
  width: 110px;
  margin-left: 10px;
}
.submit-btn:hover{
  background-color: #0042AD;
}
input, button, select {
  border: 1px solid black;
  border-radius: 5px;
  padding: .25rem;
}
input {
  padding: .5rem;
  flex-grow: 1;
}
label {
  padding: 2px;
}
</style>