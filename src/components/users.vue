<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Gender</md-table-head>
        <md-table-head>Job Title</md-table-head>
      </md-table-row>

      <md-table-row v-for="(user, index) in users" :key="user.id" value="user">
        <md-table-cell md-numeric>{{index + 1}}</md-table-cell>
        <md-table-cell>{{user.name}}</md-table-cell>
        <md-table-cell>{{user.email}}</md-table-cell>
        <md-table-cell>{{user.gender}}</md-table-cell>
        <md-table-cell>{{user.jobTitle}}</md-table-cell>
      </md-table-row>

      

    </md-table>
  </div>
</template>

<script>
  import { mapGetters , mapActions } from 'vuex';

  export default {
    name: 'users',
    computed: mapGetters(['users']),
    methods: {
      ...mapActions(['fetchUsers'])
    },
    created(){
      this.fetchUsers();
    }
  }
</script>