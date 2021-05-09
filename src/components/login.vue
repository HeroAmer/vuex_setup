<template>

    <div class="login-card-holder">
       <form novalidate  @submit.prevent="validateUser">
      <md-card class="container-form">
        <md-card-header>
          <div class="md-title">Welcome back</div>
        </md-card-header>

        <md-card-content class="content">
            <div>
              <md-field :class="getValidationClass('username')">
                <label for="first-name">Username</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.username" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.username.required">Please enter a username</span>
                <span class="md-error" v-else-if="!$v.form.username.minlength">Please enter a valid username</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="last-name">Password</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.password" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.password.required">Please enter a password</span>
                <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
              </md-field>
            </div>


        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
        </md-card-actions>
      </md-card>

    </form>
    </div>
</template>

<script>
 import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
  } from 'vuelidate/lib/validators'

export default {
    name:"login",
    mixins: [validationMixin],
    data: () => ({
      form: {
        username: null,
        password: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(3)
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.username = null
        this.form.password = null
      },
      saveUser () {
        this.sending = true;
        // const user = {
        //     username : this.form.username,
        //     password: this.form.password
        // }

        // console.log(user)
       this.$router.push('/dashboard')
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .container-form{
      margin: auto;
      margin-top: 50px;
      width: 500px;
  }
</style>