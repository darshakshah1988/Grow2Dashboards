<template>
  <div class="signup-section col-12 md:col-8">
    <div class="content-secion flex flex-column align-items-center">
      <div class="content-title-wrapper"><span>Grow</span><span class="font-green">2</span></div>
      <div class="create-account-section">
        <div class="create-title">{{ isLoginPage ? 'Login' : 'Create Free Account' }}</div>
        <div class="create-body">
          Lorem Ipsum you the blocks and components you need to create a truly professional website.
        </div>
      </div>

      <div class="form-card">
        <div class="form-container">
          <form @submit.prevent="submitForm">
            <div class="form-group" v-if="!isLoginPage">
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                placeholder="First name & Last name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                v-model="formData.password"
                required
                minlength="6"
                placeholder="Create password"
              />
            </div>
            <div class="form-group flex align-items-center" v-if="!isLoginPage">
              <!-- <input
                type="checkbox"
                class="custom-checkbox"
                id="terms"
                v-model="formData.agreeTerms"
                required
              /> -->
              <Checkbox
                class="custom-checkbox"
                v-model="formData.agreeTerms"
                required
                :binary="formData.agreeTerms"
              />

              <label class="checkbox-label" for="terms">
                I agree with the <a href="#">Terms & Conditions</a> of Grow2
              </label>
            </div>
            <div class="form-group">
              <PrimeVueButton
                type="submit"
                v-bind:label="isLoginPage ? 'Login' : 'Get started'"
                class="signup-button border-round-lg"
              ></PrimeVueButton>
            </div>
          </form>
          <div v-if="!isLoginPage" class="already-account-section">
            Already have an account? <span>Log in</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import { json } from 'stream/consumers'
import store from '../../store/store'

export default {
  name: 'SignUpComponent',
  components: {
    Checkbox,
    PrimeVueButton: Button
  },
  props: {
    isLoginPage: String
  },
  data() {
    return {
      user: '',
      formData: {
        name: '',
        email: '',
        password: '',
        agreeTerms: false
      }
    }
  },
  created() {
    this.getUserDetails()
  },
  methods: {
    getUserDetails() {
      // get token from localstorage
      let token = localStorage.getItem('userData')

      try {
        //decode token here and attach to the user object
        if (token) {
          let decoded = JSON.parse(token)
          store.dispatch('setUser', decoded)
          this.$router.push('/dashboard')
        }
      } catch (error) {
        // return error in production env
        console.log(error, 'error from decoding token')
      }
    },
    async submitForm() {
      try {
        localStorage.setItem('userData', JSON.stringify(this.formData))
        store.dispatch('setUser', this.formData)
        this.$router.push('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style src="../../styles/SignUp.scss"></style>
