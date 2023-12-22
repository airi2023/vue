<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-2">
      <div class="router">
        <div class="inner">
          <!-- aタグのリンクの代わり -->
          <v-btn>
            <router-link to="/">Home</router-link>
          </v-btn>

          <v-btn>
            <router-link to="/add">Add</router-link>
          </v-btn>
        </div>
      </div>

      <!-- /router/index.jsで書いたcomponentが反映 -->
      <router-view />

      <!-- <v-container>
        <CreateBook />
      </v-container> -->

      <!-- <v-container>
        <Book v-for="book in booksList" v-bind:book="book" />
      </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import Book from "./components/Book.vue";
import CreateBook from "./components/CreateBook.vue";

export default {
  name: "App",
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

<style>
/* body{
  font-family: '游ゴシック';
} */
.router {
  background-color: #182651;
  padding: 20px;
  margin-bottom: 50px;
  width: 100%;
}
.router button {
  margin: 15px;
}
.router button a {
  text-decoration: none;
  color: #182651;
}

h2 {
  margin-left: 10px;
  margin-bottom: 20px;
  color: #182651;
}


/* ナビ */
.router{
  display: flex;
  justify-content: center;
}

/* レスポンシブ　Vuetifyのレスポンシブと揃える */
.inner{
  width: 100%;
  padding-left: 10px;
}

@media (min-width: 960px) {
  .inner {
    max-width: 900px;
  }
}
@media (min-width: 1280px) {
  .inner {
    max-width: 1200px;
  }
}
@media (min-width: 1920px) {
  .inner {
    max-width: 1800px;
  }
}

</style>
