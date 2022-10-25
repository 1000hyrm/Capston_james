<template>
  <section>
    <div>
      <form id="news_form1">
        <p>**당신의 관심 키워드를 입력하세요**</p>
        <br />
        <input type="text" v-model="Keyword" placeholder="키워드를 입력하세요!" /><br />
        <a href="#" @click="NewsParsing">확인</a>
      </form>
    </div>
    <div id="news_data">
      <p id="new_p2">관심있을 만한 뉴스기사를 가져왔어요!</p>
      <!-- <input v-model="" /> -->
    </div>
  </section>
</template>

<script>
import http from "../services/http-common.js";
export default {
  data() {
    return {
      NewsItem: [],
      Keyword: null
    }
  },
  methods: {
    NewsParsing() {
      let NewsData = {};
      NewsData.KeyWords = this.Keyword;

      try {
        http.post("/News", JSON.stringify(NewsData),
          {
            headers: {
              "Content-Type": `application/json`,
            },
          })
          .then((res) => {
            console.log(res.data);
            this.NewsItem = res.data;
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
section {
  height: 540px;
  background-color: #f1f2f3;
}
</style>
