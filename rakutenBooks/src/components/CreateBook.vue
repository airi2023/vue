<template>
  <v-card class="ma-2 pa-2">
    <h3>本の登録</h3>
    <!-- <p>{{ title }}</p> -->
    <div>
      <label for="title">タイトル：</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div>
      <label for="author">著者：</label>
      <input type="text" id="author" v-model="author" />
    </div>

    <div>
      <label for="price">値段：</label>
      <input type="text" id="price" v-model="price" />
    </div>

    <div>
      <label for="caption">キャプション：</label>
      <input type="text" id="caption" v-model="caption" />
    </div>

    <button v-on:click="doSubmit">送信</button>
  </v-card>

  <!-- この方法もあり（/api/books宛にformで入力された値（postリクエスト）を送る） -->
  <!-- <v-card class="ma-2 pa-2">
        <form action="http://127.0.0.1:8000/api/books">
        <input type="text" id="title" />
        <input type="submit" value="送信" />
        </form>
    </v-card> -->
</template>

<script>
export default {
  name: "CreateBook",
  data() {
    return {
      title: "",
      author: "",
      price: "",
      caption: "",
    };
  },

  methods: {
    async doSubmit() {
    //   console.log(this.title, this.price);
      const data = {
        title: this.title,
        author: this.author,
        itemPrice: this.price,
        itemCaption: this.caption,
      };

      const response = await fetch("http://127.0.0.1:8000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);
    },
  },
};
</script>

<style>
input,
button {
  border: solid 1px #999;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
