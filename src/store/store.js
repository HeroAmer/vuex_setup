import Vuex from 'vuex';
import Vue from 'vue';
import configurations from './modules/configurations';
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        configurations,
        users
    }
})