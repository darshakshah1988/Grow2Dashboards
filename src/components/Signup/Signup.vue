<template>
  <div class="signup-section col-12 md:col-8">
    <div class="content-secion flex flex-column align-items-center">
      <div class="content-title-wrapper"><span>Grow</span><span class="font-green">2</span></div>
      <div class="create-account-section">
        <div class="create-title">Create Free Account</div>
        <div class="create-body">
          Lorem Ipsum you the blocks and components you need to create a truly professional website.
        </div>
      </div>

      <div class="form-card">
        <div class="form-container">
          <form @submit.prevent="submitForm">
            <div class="form-group">
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
            <div class="form-group flex align-items-center">
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
                value="term&cond"
              />

              <label class="checkbox-label" for="terms">
                I agree with the <a href="#">Terms & Conditions</a> of Grow2
              </label>
            </div>
            <div class="form-group">
              <PrimeVueButton
                type="submit"
                v-bind:label="`Get started`"
                class="signup-button border-round-lg"
              ></PrimeVueButton>
            </div>
          </form>
          <div class="already-account-section">Already have an account? <span>Log in</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

export default {
  name: 'SignUpComponent',
  components: {
    Checkbox,
    PrimeVueButton: Button
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        agreeTerms: false
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(this.formData)
    }
  }
}
</script>

<style src="../../styles/SignUp.scss"></style>
