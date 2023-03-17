<script setup lang="ts">
import NavLayout  from "../components/NavLayout.vue";

</script>

<template>
  <NavLayout>
    <h1>Help</h1>
    <h2>
      Searching For Documents:
    </h2>
    <p>
      To use the search portal, click in the search box and insert your query.
      You can also select a Parser (Vector, Queryboost) and select Type (edismax, dismax).
    </p>
    <h2>
      Downloading Documents:
    </h2>
    <p>
      After a search query, if you click on the title of the
      document, it will download to your computer's "downloads" folder
    </p>
    <h2>
      Deleting Documents:
    </h2>
    <p>
      After a search query, you will see a "DELETE" button
      under every document. If you click this, the document
      will be deleted from the database.
    </p>
    <h2>
      Uploading Documents:
    </h2>
    <p>
      To upload a document, first navigate to the "Upload" page.
      Select the "Choose File" option. Click on this, pick the file to upload. After this, click submit!
    </p>
    <h2>
      Search Parsers:
    </h2>
    <p>
      Two dropdown selections: vector and queryboost.
      Parsers search and rank relevant documents that come from search type filtering.
    </p>
    <h2>
      Search Types:
    </h2>
    <p>
      Two dropdown selections: dismax and edismax.
      Type determines which documents are relevant and filters out irrelevant documents.
    </p>
  </NavLayout>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 60px;
  color: #424242;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
}
h2 {
  float:left;
  width:50%;
  border-left:8px solid #000000;
  padding-left:15px;
  word-wrap:break-word;
  color: #424242;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
}
</style>