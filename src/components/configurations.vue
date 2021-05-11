<template>
  <div class="wrapper">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="source-table" style="width:600px">
      <md-table>
        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Column name</md-table-head>
          <md-table-head>Data type</md-table-head>
          <md-table-head>Dropdown</md-table-head>
        </md-table-row>

        <md-table-row v-for="(src, index) in configurations" :key="src.id" value="src">
          <md-table-cell md-numeric>{{index + 1}}</md-table-cell>
          <md-table-cell>{{src.key}}</md-table-cell>
          <md-table-cell>{{src.type}}</md-table-cell>
          <md-table-cell>
            <md-field>
            <label for="options">options</label>
            <md-select v-model="src.map" name="option" id="option">
              <md-option :value="option.key" v-for="option in targetConfigurations" :key="option.id">{{option.key}}</md-option> 
            </md-select>
          </md-field>
          </md-table-cell>
        </md-table-row>

      </md-table>
    </div>
    <div class="source-table" style="width:500px">
      <md-table>
        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Coulmn name</md-table-head>
          <md-table-head>Data type</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>

        <md-table-row v-for="(option, index) in targetConfigurations" :key="option.id" value="src" style="height:90px" >
          <md-table-cell md-numeric>{{index + 1}}</md-table-cell>
          <md-table-cell>{{option.key}}</md-table-cell>
          <md-table-cell>{{option.type}}</md-table-cell>
          <md-table-cell>
            <div class="cell-holder">
              <a href="#" @click="deleteConfig(option)"><md-icon class="fa fa-close"></md-icon></a>
              <md-icon class="fa fa-chevron-up"></md-icon>
              <md-icon class="fa fa-chevron-down"></md-icon>
            </div>
          </md-table-cell>
       
        </md-table-row>

      </md-table>
    </div>
  </div>
</template>

<script>
  import { mapGetters , mapActions } from 'vuex';

  export default {
    computed: mapGetters(['configurations', 'targetConfigurations']),
    name: 'configurations',
    methods: {
      ...mapActions(['fetchConfigurations','fetchTargetConfiguration', 'deleteConfig'])
    },
    created(){
      this.fetchConfigurations();
      this.fetchTargetConfiguration();
      
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .cell-holder{
    display: flex !important;
  }
</style>