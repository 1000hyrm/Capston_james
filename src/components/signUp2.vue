<template>
    <div class="signUp">
        <h3>회원가입</h3>
        <input type="text" v-model="ID" placeholder="ID">
        <a href="#" id="CheckId_btn" @click="CheckId">중복확인</a><br>
        <input type="name" v-model="name" placeholder="이름"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <input type="text" v-model="tel" placeholder="전화번호"><br>
        <button @click="SignUp">회원가입</button><br>
        <div><router-link to="/">로그인</router-link>으로 돌아가기</div>
    </div>
</template>

<script>
// import axios from 'axios';
import http from "../services/http-common.js"
export default {
    data: function() {
      return {
        ID: '',
        password: '',
        name: '',
        tel: '',
      }
    },
    methods: {
      SignUp(){
        let userData={};
        userData.ID = this.ID;
        userData.name = this.name;
        userData.password = this.password;
        userData.tel = this.tel

        try {
          http.post("/signup", JSON.stringify(userData),
          {
            headers: {
              "Content-Type": `application/json`,
            }
          })
          .then((res) => {
            alert('회원가입이 완료 되었습니다.\n 로그인 화면으로 돌아갑니다.')

            this.$router.push({
              path: '/'
            })
          })
        }
        catch (error) {
          console.log(error);
        }
      },

      CheckId()
      {
        let userData = {};
        userData.id = this.ID;

        try {
          http
            .post("/checkid", JSON.stringify(userData),
              {
                headers: {
                  "Content-Type": `application/json`,
                }
              })
            .then((res) => {
              if(res.data.flag=="ok"){
              alert('사용가능한 id 입니다.')
              } else{
                alert('이미 사용중인 id 입니다.')
              }
            })
        }
        catch (error) {
          console.log(error);
        }
      }
    }
}
</script>

<style scoped>
input {
      margin: 10px 0;
      width: 40%;
      padding: 15px;
    }

#CheckId_btn {
    /* background-color: #333366; */
    border: 3px solid #333366;
    padding: 10px 17px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font: 15px;
    color: black;
}
/* .signUp{
   margin-top: 3rem;
}

.signUp > input{
  margin-top: 1rem;
}

.signUp :nth-child(2){
  margin-left: 4.7rem;
}

.signUp > button{
  margin-top: 2rem;
}

.signUp > div{
  margin-top: 2rem;
} */
</style>