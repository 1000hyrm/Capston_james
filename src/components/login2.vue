<template>
    <div class="login">
        <h2>login</h2>
        <input type="text" v-model="user_id" placeholder="Id"><br>
        <input type="password" v-model="user_pw" placeholder="Password"><br>
        <a href="#" id="login_btn" @click="login">LOGIN</a>

        <div>
            <p>계정 없으면 <router-link to="/signup2">회원가입</router-link>을 진행</p>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import http from "../services/http-common.js"

export default {
    data()
    {
        return {
            user_id: null,
            user_pw: null
        };
    },
    methods: {
        login() {
            let userData = {};
            userData.id = this.user_id;
            userData.pw = this.user_pw;

            try {
                http.post("/login", JSON.stringify(userData),
                    {
                        headers: {
                            "Content-Type": `application/json`,
                        },
                    })
                    .then((res) => {
                        if (res.data.flag == 'invalid') {
                            alert('아이디 또는 비밀번호가 틀렸습니다.');
                        }
                        else {
                            // this.$store.commit('initUserId', userData.id);
                            // this.$store.commit('initUserToken', res.data);
                            this.$store.commit('changeLoginState');
                            this.$cookies.set('user_id', userData.id);
                            this.$cookies.set('access_token', res.data.access_token);
                            this.$router.push({
                                path: 'home'
                            })
                            alert(userData.id + " 님 반갑습니다.");
                        }
                    });
            }
            catch (error) {
                console.log(error);
            }
        },
    }
}
</script>

<style scoped>
.login {
    margin-top: 2rem;
}

input {
    margin: 10px 0;
    width: 40%;
    padding: 15px;
}

button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}

p {
    margin-top: 40px;
    font-size: 15px;
}

p a {
    text-decoration: underline;
    cursor: pointer;
}

#login_btn {
    background-color: blueviolet;
    padding: 15px 25px;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font: 15px;
    color: aliceblue;
}
</style>