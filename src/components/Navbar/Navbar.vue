<template>
  <nav :class="['navbar-section']">
    <div class="navbar-logo">
      <img src="@/assets/G2-grad.svg" alt="Logo" />
      <div class="navbar-title-text" @click="changeRoute('/')">Grow<span>2</span></div>
    </div>
    <Transition name="slide-fade">
      <div
        :class="['navbar-links tablet-screen', isNavbarActive && 'active']"
        v-if="isNavbarActive"
      >
        <div class="signup-button-wrapper card flex justify-content-center">
          <button class="signup-button" @click="() => changeRoute('signup')">Sign Up</button>
        </div>
        <div class="signup-button-wrapper card flex justify-content-center">
          <button class="signup-button" @click="() => changeRoute('login')">Login</button>
        </div>
        <div class="navbar-link-wrapper" :onClick="toggleDropdown">
          <div class="flex align-items-center">
            <div class="pr-3">Grow 2</div>
            <div :class="['flex', 'align-items-center', !isOpen && 'rotate-180']">
              <img :src="`/src/assets/down-arrow.svg`" class="dropdown-logo" />
            </div>
          </div>
          <Transition name="slide-fade">
            <div class="navbar-grow2-dropdown" v-if="isOpen">
              <div
                class="dropdown-menu flex justify-content-start"
                v-for="(item, code) in grow2Options"
                :key="code"
              >
                <div class="flex align-items-center">
                  <img
                    :alt="item.name"
                    :src="`/src/assets/${item.code}.svg`"
                    class="mr-3 dropdown-logo"
                  />
                  <div class="dropdown-options-label">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div class="navbar-link-wrapper">About Us</div>
        <div class="navbar-link-wrapper">Contact Us</div>
      </div>
    </Transition>
    <div :class="['navbar-links desktop-screen']">
      <div class="navbar-link-wrapper">
        <div class="card flex justify-content-center">
          <div class="card flex justify-content-center">
            <Dropdown
              v-model="selectedOption"
              :options="grow2Options"
              optionLabel="name"
              scrollHeight="500px"
              placeholder="Grow 2"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                  <div class="dropdown-options-label">{{ slotProps.value.name }}</div>
                </div>
              </template>
              <template #option="slotProps">
                <div class="flex align-items-center">
                  <img
                    :alt="slotProps.option.name"
                    :src="`/src/assets/${slotProps.option.code}.svg`"
                    class="mr-3 dropdown-logo"
                  />
                  <div class="dropdown-options-label">{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>
      <div class="navbar-link-wrapper">About Us</div>
      <div class="navbar-link-wrapper">Contact Us</div>
      <div class="navbar-link-wrapper">
        <button class="signup-button" @click="changeRoute('signup')">Sign Up</button>
      </div>
      <div class="navbar-link-wrapper">
        <button class="signup-button" @click="changeRoute('login')">Login</button>
      </div>
    </div>
    <div class="navbar-tablet-screen">
      <button class="navbar-toggle" @click="toggleNavbar">
        <img src="@/assets/three-lines.svg" v-if="!isNavbarActive" />
        <img src="@/assets/white-cross.svg" v-if="isNavbarActive" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import Dropdown from 'primevue/dropdown'

export default {
  name: 'NavbarComponent',
  components: {
    Dropdown
  },

  data() {
    return {
      isOpen: false,
      isNavbarActive: false,

      selectedOption: '',

      grow2Options: [
        { name: 'Grow2 Create', code: 'G2C' },
        { name: 'Grow2 Learn', code: 'G2LE' },
        { name: 'Grow2 Marketplace', code: 'G2M' },
        { name: 'Grow2 Life', code: 'G2LF' },
        { name: 'Grow2 Academy', code: 'G2A' }
      ]
    }
  },
  methods: {
    changeRoute(route: string) {
      this.$router.push(route)
    },
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectOption(option: { label: string }) {
      this.selectedOption = option.label
      this.isOpen = false
    }
  },
  created() {
    console.log(this.selectedOption)
  }
}
</script>

<style src="../../styles/Navbar.scss"></style>
