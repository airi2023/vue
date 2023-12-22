<template>
  <v-card class="ma-2 pa-2">
    <h3 class="title-h3">本の登録</h3>
    <!-- <p>{{ title }}</p> -->

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="title" label="タイトル"> </v-text-field>
      <v-text-field v-model="author" label="著者"></v-text-field>
      <v-text-field v-model="price" label="価格"></v-text-field>
      <v-text-field v-model="caption" label="キャプション"></v-text-field>

      <v-btn v-on:click="doSubmit">送信</v-btn>

      <br />
      <p class="successText" v-if="flagOK">送信成功！</p>
    </v-form>
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
      flagOK: false,
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
      this.flagOK = !this.flagOK;
    },
  },
};
</script>

<style>
.title-h3 {
  padding: 30px 30px 0px 30px;
  color: #182651;
}

form {
  margin: 30px;
}

button {
  color: #182651 !important;
}

.successText {
  font-size: 30px;
  font-weight: bold;
  color: #182651;
  margin-top: 30px;
}
</style>
