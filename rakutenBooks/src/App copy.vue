<template>
  <v-app id="inspire">
    <v-main class="bg-white">
      <v-container>
        <div class="form-wrap">
          <h3>【新規追加】</h3>
          <br />
          <v-form ref="form" @submit.prevent="submitForm">
            <!-- buttonタグに@clickだとボタン押してページ遷移するとうまく動かないので、formタグに@submitにした -->
            <v-text-field v-model="inputTitle" label="タイトル"> </v-text-field>
            <v-text-field v-model="author" label="著者"></v-text-field>
            <v-text-field v-model="itemPrice" label="価格"></v-text-field>
            <v-text-field
              v-model="itemCaption"
              label="キャプション"
            ></v-text-field>
            <!-- <v-btn class="mr-4" type="submit" @click="submitForm"> 追加 </v-btn> -->
            <v-btn class="mr-4" type="submit"> 追加 </v-btn>
          </v-form>

          <!-- <br />
          <p>{{ inputTitle }}</p>
          <p>{{ inputAuthor }}</p>
          <p>{{ inputPrice }}</p>
          <p>{{ inputCaption }}</p> -->
        </div>

        <!-- itemは今作った任意の変数名。dataは配列変数(mounted()で定義してる。中身は、Laravelから渡されたBookモデルのall();) -->

        <div class="table-wrap">
          <!-- <td>{{ data[0].title }}</td> -->
          <table>
            <!-- 項目名 -->
            <th>タイトル</th>
            <th>著者</th>
            <th>価格</th>
            <th>キャプション</th>

            <!-- 中身 データ -->
            <tr v-for="item in bookData">
              <!-- title = Bookモデルのカラム名 -->
              <td>{{ item.title }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.itemPrice }}</td>
              <td>{{ item.itemCaption }}</td>
            </tr>
          </table>
        </div>

        <!-- カード使う書き方 -->
        <!-- <div v-for="item in bookData">
          <v-card class="ma-2 pa-2">
            <p>{{ item.title }}</p>
            <p>{{ item.author }}</p>
            <p>{{ item.itemPrice }}</p>
            <p>{{ item.itemCaption }}</p>
          </v-card>
        </div> -->

        <!-- 子コンポーネント使う方法 -->
        <!-- <Book v-for="item in bookData" v-bind:item="item" /> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios"; // 追加
import Book from "./components/Book.vue";

export default {
  name: "App",
  // 呼び出す子のコンポーネントを宣言
  components: {
    Book,
  },

  //data()の中で定義した変数は、ファイル全体で呼び出せる
  data() {
    return {
      bookData: "", //mounted()の中のthis.bookData

      inputTitle: "", //フォームのinputタグに表示する初期値
      author: "", //初期値
      itemPrice: "", //初期値
      itemCaption: "", //初期値
    };
  },

  methods: {
    submitForm() {
      // 以下でもOK
      // const url = "http://127.0.0.1:8000/api/create";

      // const data = {
      //   title: this.title,
      //   author: this.author,
      //   itemPrice: this.price,
      //   itemCaption: this.caption,
      // };

      // axios.post(url, data);


      axios.post("http://127.0.0.1:8000/api/create", {
        title: this.inputTitle, //左のプロパティ名titleは、DBのカラム名じゃないとダメ！
        author: this.author,
        itemPrice: this.itemPrice,
        itemCaption: this.itemCaption,
      });
    },
  },

  //mounted()の中で作った変数は、mounted()の中でしか使えない（関数スコープ）
  //async=メソッドの中でawait(非同期処理を同期処理として実行する機能)使うときに付ける
  async mounted() {
    const url = "http://127.0.0.1:8000/api/test"; //LaravelのURL

    // 指定したURLからデータを取得
    const response = await fetch(url); //fetchは非同期処理なので、awaitつけて同期処理として実行(データ取得未完了の状態で、次の行の処理に移動しないように)

    // .json() = 変数responseの中身を、オブジェクト{データ：値}」の形(JSON形式)に変換(Vueでも扱えるように)
    const bookData = await response.json();

    // console.log(bookData);

    this.bookData = bookData; //mounted()の中でしか使えないローカル変数を、消えないようにdata()のbookDataに入れてる。※thisはdata()の中の変数を指す
  },
};
</script>

<style>
.form-wrap {
  margin-top: 70px;
}
.table-wrap {
  margin-top: 70px;
}

table {
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  text-align: center;
}

table,
th,
td {
  padding: 15px;
  border: 1px solid #999;
}
th {
  background-color: #f5f5f5;
}
</style>
