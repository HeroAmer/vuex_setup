import axios from 'axios';

const state = {
    configurations : [],
    targetConfiguration : []
}


const getters = {
    configurations: (state) => state.configurations,
    targetConfigurations: (state) => state.targetConfiguration
}

const actions = {
    async fetchConfigurations ({commit}){
        const res = await axios.get('http://localhost:5000/configurations');
        commit('setConfigs', res.data)
    },

    async fetchTargetConfiguration ({commit}){
        const res = await axios.get('http://localhost:5000/targetConfigurations');
        commit ('setTargetConfig', res.data)
    },


    async deleteConfig({commit}, config){
        console.log(config.id)
       commit('removeConfig', config.id)
      }
}


const mutations = {
    setConfigs: (state, configurations) => (state.configurations = configurations),
    removeConfig: (state, id ) => state.configurations = state.configurations.filter(configuration => configuration.id !== id),
    setTargetConfig: (state, targetConfiguration) => state.targetConfiguration = targetConfiguration
}

export default {
    state,
    getters,
    actions,
    mutations
}