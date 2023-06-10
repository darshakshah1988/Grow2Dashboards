<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedOption"
      :options="cities"
      optionLabel="name"
      scrollHeight="500px"
      placeholder="Grow 2"
    >
      <template #value="slotProps"> </template>
      <template>
        <div class="flex align-items-center">
          <div class="navbar-link-wrapper">
            <button class="signup-button" @click="">Sign Up</button>
          </div>
          <div class="dropdown-options-label">{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import Dropdown from 'primevue/dropdown'

export default {
  name: 'Dropdown-component',
  components: {
    Dropdown
  },

  props: ['isOpen'],
  data() {
    return {
      selectedOption: '',
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ]
    }
  },
  watch: {
    isOpen: function (val) {
      console.log(val, '>>>>>>>>>>>>>>')
    }
  }
}
</script>

<style src="./CustomDropdown.scss"></style>
