<template>
  <v-card class="ma-2 pa-2">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p><!-- book.DBのカラム名（※v-modelの名前じゃないので注意） -->
      <p>{{ book.itemPrice }}円</p><!-- book.DBのカラム名（※v-modelの名前じゃないので注意） -->
      <p>{{ book.itemCaption }}</p><!-- book.DBのカラム名（※v-modelの名前じゃないので注意） -->
  </v-card>
</template>

<script>
export default {
  name: "Book",
  props: {
      book: Object
  },
}
</script>