<template>
  <div>
    <table border="1">
      <tr>
        <td>온도</td>
        <td>습도</td>
        <td>측정시간</td>
      </tr>
      <tr :key="index" v-for="(value, index) in items">
        <td>{{ value.Temperature }}</td>
        <td>{{ value.Humidity }}</td>
        <td>{{ value.Nowtime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// 해당 스크립트 태그 안의 주석은 전부 삭제X
//import http from "../services/http-common.js"
export default {
  data() {
    return {
      items:
      [
          {
            "Humidity": "66.1%",
            "Nowtime": "2022-09-15 22:21:16",
            "Temperature": "25.2*C"
          }
      ]
    }
  },
  // methods: {
  //   getHomeinfo() {
  //     http
  //       .get("/homecare")
  //       .then(res => {
  //         console.log(res.data);
  //         this.items = res.data;
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },
  // },
  // mounted() {
  //   this.getHomeinfo();
  // }
}
</script>

<style scoped>
    section{
      height: 540px;
      background-color: #F1F2F3;
    }
</style>
