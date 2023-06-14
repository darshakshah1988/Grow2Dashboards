<template>
  <div class="slideout-section" :class="{ open: isOpen }">
    <div class="sidebar-section">
      <div class="flex">
        <div class="slideout-menu">
          <div class="section-first">
            <div class="name-section">
              <div class="flex name-section-wrapper" @click="toggleMenu">
                <div class="name-img-wrapper"><img src="@/assets/dashboard-profile-img.png" /></div>
                <div class="name-wrapper">
                  <div class="person-name">Jon Smith</div>
                  <div class="course-name">Queensland cricket</div>
                </div>
              </div>
            </div>
            <div class="grow-2-list-section">
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
          </div>
          <div class="section-second">
            <div class="content-wrapper">
              <div class="content-text">Content</div>
              <div class="content-list">
                <div class="content-list-wrapper" v-for="item in contents">
                  <div class="flex align-items-center">
                    <img
                      :alt="item.name"
                      :src="`/src/assets/dashboard/${item.img}`"
                      class="mr-3 dropdown-logo"
                    />
                    <div class="dropdown-options-label">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-second section-third">
            <div class="content-list-wrapper" v-for="item in settingsAndBillings">
              <div class="flex align-items-center">
                <img
                  :alt="item.name"
                  :src="`/src/assets/dashboard/${item.img}`"
                  class="mr-3 dropdown-logo"
                />
                <div class="dropdown-options-label">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="content">
        <button @click="toggleMenu">Toggle Menu</button>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SidebarComponent',
  props: {
    toggleMenu: { type: Function },
    isOpen: {
      type: Boolean
    },
    isMobile: {
      type: Boolean
    }
  },
  data() {
    return {
      isMobile: false,
      grow2Options: [
        { name: 'Dashboard', code: 'sidebar-dashboard' },
        { name: 'Grow2 Create', code: 'G2C' },
        { name: 'Grow2 Learn', code: 'G2LE' },
        { name: 'Grow2 Marketplace', code: 'G2M' },
        { name: 'Grow2 Life', code: 'G2LF' },
        { name: 'Grow2 Academy', code: 'G2A' }
      ],
      contents: [
        { name: 'To do', img: 'todo.svg' },
        { name: 'Cards to finish', img: 'cards-to-finish.svg' },
        { name: 'Reviews', img: 'star-reviews.svg' }
      ],
      settingsAndBillings: [
        { name: 'Settings', img: 'settings.svg' },
        { name: 'Billings', img: 'billings.svg' }
      ]
    }
  }
}
</script>

<style lang="scss" src="../../styles/sidebar.scss" />
