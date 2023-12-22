<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-2">
      <v-container>
        <h2>Homeコンポーネント</h2>
        <Book v-for="book in booksList" v-bind:book="book" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Book from "../components/Book.vue";
import CreateBook from "../components/CreateBook.vue";

export default {
  name: "Home",
  // 呼び出す子のコンポーネントを宣言
  components: {
    Book,
    CreateBook,
  },
  // data()に定義した変数はファイル全体で呼び出せる
  data() {
    return {
      booksList: [],
    };
  },
  // mounted()の中で作った変数は、この関数の中だけしか生きれない（関数スコープ）
  async mounted() {
    const url = "http://127.0.0.1:8000/api/books";
    // 指定したURLからデータを取得
    const response = await fetch(url);
    // データをJavaScriptのオブジェクトに変換
    const booksList = await response.json();

    console.log(booksList);
    // 取得したデータをdata()のdataにコピー
    // thisはこの場合、data()の中の変数を指す
    this.booksList = booksList;
  },
};
</script>
