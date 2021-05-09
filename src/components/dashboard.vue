<template>
  <div class="page-container md-layout-row">
    <md-app>

      <md-app-drawer md-permanent="full" class="tabs">

        <md-list class="tabs">
          <md-list-item class="tabs">
            <router-link to="/dashboard/charts">CHARTS</router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/dashboard/stepper">STEPPER</router-link>
          </md-list-item>


          <md-list-item>
            <router-link to="/dashboard/configurations">CONFIGURATIONS</router-link>
          </md-list-item>

          <md-list-item>
            <router-link to="/dashboard/users">USERS</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="dash-content">
          <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard'
  }
</script>

<style lang="scss" scoped>
  .tabs{
    display: flex;
    text-align: center;
  }
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    a{
        text-decoration: none;
    }
  }

  .dash-content{
      height: 93vh;
  }

  .md-list-item-content{
    justify-content: center;
  }

  .md-list-item-text{
      cursor: pointer;
      font-size: 20px;
      text-decoration: none;
    

      a{
          text-decoration: none;
      }
  }
</style>