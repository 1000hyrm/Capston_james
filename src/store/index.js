import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        UserData: [],
        UserId: "",
        UserName: "",
        UserToken: "",
        LoginState: false
    },
    getters: {
        getUserToken(state) {
            return state.UserToken;
        },
        getLoginState(state) {
            return state.LoginState;
        }
    },
    mutations: {
        initUserId(state, payload) {
            return state.UserId = payload;
        },
        initUserName(state, payload) {
            return state.UserName = payload.userName;
        },
        initUserToken(state, payload) {
            return state.UserToken = payload.access_token;
        },
        changeLoginState(state) {
            return state.LoginState = true;
        }
    },
    action: {

    }
});