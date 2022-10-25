<template>
  <header id="head">
    <div id="head_area">
      <form>
        <input type="search" placeholder="Search">
        <span>검색</span>
        <span style="display:none;">{{ CheckLogin }}</span>
      </form>
      <div v-if='LoginState'>
        <a href="#" id="log-in" @click="log_out">{{ $store.state.UserName }} 님 LOGOUT</a>
      </div>
      <div class="title">
        <h2>제임스, 우리집을 부탁해!</h2>
        <p>내가 없는 우리집에선 무슨 일이 일어날까?</p>
      </div>
      <div>
        <ul>
          <li><a href="#" class="A">HOME</a></li>
          <li><a href="#" class="A">LOGIN</a></li>
          <li><a href="#" class="A">SERVICE</a></li>
          <li><a href="#" class="A">QnA</a></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </header>
</template>

<script>
import http from "../services/http-common.js"

export default {
  data() {
    return {
      LoginState : false,
    }
  },
  methods: {
    log_out() {
      if (!confirm("로그아웃 하시겠습니까?")) {
        // 취소 눌렀을 때
      }
      else {
        if (this.$cookies.isKey('user_id') && this.$cookies.isKey('access_token')) {
          this.$cookies.remove('user_id');
          this.$cookies.remove('access_token');
          this.LoginState = false;
          this.$router.push({
            path: '/'
          });
        }
      }
    }
  },
  computed: {
    CheckLogin() {
      return this.LoginState = this.$store.getters.getLoginState;
    }
  }
};
</script>

<style scoped>
#log-in {
  color: #fff;
  float: right;
  width: auto;
  height: 20px;
  position: relative;
  right: 30px;
  top: -10px;
  opacity: 0.7;
  font-weight: bold;
  background-color: #333366;
}

form {
  position: relative;
  top: 10px;
  left: 5px;

  width: 180px;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-top: 24px;
}

form>input {
  border: none;
  width: 130px;
  height: 23px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
  padding-left: bold;
}

form>span {
  opacity: 0.5;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

* {
  margin: 0;
  background-color: #333366;
}

.title {
  position: relative;
  margin-top: 3rem;
}

h2 {
  /* vertical-align: middle;
  width: auto;
  position: relative;
  top: 3.7rem;
  left: 4.5rem;
  display: inline-block; */
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
}

#head_area {
  /* height: 220px; */
  height: 12rem;
  width: 100%;
  text-align: center;
}

p {
  position: relative;
  top: 2rem;
  color: white;
}

/* 여기서 부터는 nav 부분 적용 */
ul {
  background-color: #FFFFFF;
  /* height: 60px; */
  height: 3rem;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;

  display: flex;
  text-align: center;
  padding: 0;
  list-style: none;
  position: relative;
  top: 4rem;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
}
.A {
  color: #666699;
  font-weight: bold;
}

a {
  text-decoration-line: none;
  color: black;
  background-color: #FFFFFF
    /* border-right:2px solid #F1F2F3; */
}

@media screen and (min-width: 769px) {
  /* 데스크탑 스타일 */
  li {
      background-color: #FFFFFF;
      margin-left: 12em;
      margin-top: 1em;
      /* vertical-align: middle; */
      overflow: initial;
    }
}

@media screen and (max-width: 768px) {
  /* 모바일 스타일 */
    li {
        background-color: #FFFFFF;
        margin-left: 1.45em;
        margin-top: 1em;
        /* vertical-align: middle; */
        overflow: initial;
      }
}
</style>
