<template>
  <div class="homecare">
    <div class="black-bg" v-if="ModalState == true">
      <div class="white-bg">
        <h4>온습도 측정 중입니다.</h4>
        <p>잠시만 기다려주세요.</p>
        <img id="loading_img" src="../assets/download.gif">
        <a href="#" id="modalOK">확인</a>
      </div>
    </div>

    <table v-if="ModalState == false">
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
    <!-- <div v-if="chart.data > 0">
      <line-chart ref="lineChart"
      :chartData="chart.data" 
      :options="chart.options" 
      id="chart"></line-chart>
    </div> -->
  </div>
</template>

<script>
import http from "../services/http-common.js"
// import LineChart from "../Module/LineChart/LineChart";

export default {
  // name: "line-chart",
  // type: "line",
  // components: { LineChart },
  data() {
    return {
      ModalState: true,
      items: [],
      // chart: {
      //   data: {
      //     labels: [2014, 2015, 2016, 2017, 2018],
      //     datasets: [
      //       {
      //         label: "인원수",
      //         backgroundColor: "rgb(255,153,204, 0.5)",
      //         pointBackgroundColor: "hotpink",
      //         fill: true,
      //         tension: 0.1,
      //         borderColor: "hotpink",
      //         pointBorderColor: "hotpink",
      //         borderWidth: 1,
      //         pointBorderWidth: 1,
      //         data: [450, 300, 100, 1000, 750]
      //       }
      //     ]
      //   },
      //   options: {
      //     plugins: {
      //       legend: {
      //         display: true,
      //         position: "left",
      //         labels: {
      //           boxWidth: 8,
      //           padding: 10,
      //           usePointStyle: true,
      //           pointStyle: "circle",
      //           font: {
      //             size: 14
      //           }
      //         },
      //         fullSize: false,
      //         align: "center"
      //       },
      //       tooltip: {
      //         boxWidth: 15,
      //         bodyFont: {
      //           size: 14
      //         }
      //       }
      //     },
      //     scales: {
      //       x: {
      //         grid: {
      //           display: false
      //         },
      //         ticks: {
      //           padding: 3
      //         }
      //       },
      //       y: {
      //         ticks: {
      //           callback: (val, index) => {
      //             return val !== 0 ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
      //           },
      //           padding: 10
      //         },
      //         grid: {
      //           drawBorder: false,
      //           color: "#323232",
      //           lineWidth: 1
      //         }
      //       }
      //     },
      //     responsive: true,
      //     maintainAspectRatio: false,
      //     animation: {
      //       duration: 5000
      //     }
      //   }
      // }
    };
  },
  methods: {
    getHomeinfo() {
      http
        .get("/newhomedata")
        .then(res => {
          console.log(res.data);
          this.items = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    ModalControl() {
      setTimeout(this.EnableOk, 5000);
    },
    EnableOk() {
      let Ok_btn = document.getElementById('modalOK');
      let LoadingImg = document.getElementById('loading_img')

      LoadingImg.style.display = 'none';
      Ok_btn.addEventListener("click", () => { this.ModalState = false });
      Ok_btn.style.cssText =
        "background-color: #333366; border-radius: 8px; padding: 10px 17px;"
        + "text-decoration: none; text-align: center; display: inline-block;"
        + "font: 15px; color: white; ";
    },
  },
  mounted() {
    this.ModalControl();
    this.getHomeinfo();
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#loading_img {
  display: block;
  margin: auto;
  padding-bottom: 0.6rem;
}

#modalOK {
  display: none;
}

.homecare {
  width: 100%;
  text-align: center;
}

table {
  display: inline-block;
  margin-top: 3rem;
  border: 2px solid #333366;
  border-radius: 8px;
}

td {
  border-bottom: 2px solid #333366;
  padding: 0.4rem;
}

#line-chart {
  width: 300;
  height: 250;
}
</style>
