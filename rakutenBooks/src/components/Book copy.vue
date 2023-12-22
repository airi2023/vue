<template>
  <v-card class="mx-auto my-8" elevation="16">
    <div style="display: flex">
      <!-- 画像 -->
      <!-- <img v-bind:src="book_image" alt="" style="margin: 10px" /> -->

      <!-- 文章 -->
      <div style="width: 90%; margin: 10px">
        <h3>{{ item.title }}</h3>
        <h4>著者：{{ item.author }}</h4>
        <h4>{{ item.itemPrice }}円</h4>
        <div class="caption">
          <p>{{ item.itemCaption }}</p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Books",
  props: {
    item: Object, //親App.vueから受け取った変数item＝Object型
  },

  data: () => ({

  }),

  mounted() {

  },
};
</script>
