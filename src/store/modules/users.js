import axios from 'axios';

//initial state
const state = {
    users: []
}

const getters = {
    users: (state) => state.users
}

const actions = {
    async fetchUsers({commit}){
        const res = await axios.get('http://localhost:5000/users');
        console.log(res.data)
        commit('setUsers', res.data)
    }
}

const mutations = {
    setUsers: (state, users) => (state.users = users),
}

export default {
    state,
    getters,
    actions,
    mutations
}