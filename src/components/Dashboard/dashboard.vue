<template>
  <div class="dashboard-component relative">
    <div class="grid">
      <div class="col-12 dashboard-navbar">
        <div class="name-section">
          <div class="flex name-section-wrapper" @click="toggleLeftMenu">
            <div class="name-img-wrapper"><img src="@/assets/dashboard-profile-img.png" /></div>
            <div class="name-wrapper">
              <div class="person-name">Jon Smith</div>
              <div class="course-name">Queensland cricket</div>
            </div>
          </div>
        </div>
        <div class="three-lines-wrapper" @click="toggleRightMenu">
          <div>
            <img src="@/assets/dashboard/three-lines-zigzag.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="grid">
      <div :class="`${isOpenLeftSidebar && !isMobile ? 'left-sidebar-desktop' : ''}`">
        <SidebarComponent
          :isMobile="isMobile"
          :isOpen="isOpenLeftSidebar"
          :toggleMenu="toggleLeftMenu"
        />
      </div>
      <div class="main-dashboard-section col-12 lg:col-8">
        <div class="dashboard-body-section">
          <div class="statistics-section">
            <div class="dashboard-title">
              <span>Statistics</span>
            </div>
            <div class="statistics-numbers-wrapper">
              <div class="statistics-body flex flex-column">
                <div class="stat-views">VIEWS</div>
                <div class="stat-numbers">1,482,482</div>
              </div>
              <div class="statistics-body flex flex-column">
                <div class="stat-views">MONEY EARNED</div>
                <div class="stat-numbers">$ 1500</div>
              </div>
              <div class="statistics-body flex flex-column">
                <div class="stat-views">MEMBERS</div>
                <div class="stat-numbers">1156</div>
              </div>
            </div>
          </div>
          <div class="target-section">
            <div class="target-wrapper">
              <div class="dashboard-title"><span>Targets</span></div>
              <div class="flex justify-content-evenly flex-wrap">
                <div class="weekly-section flex">
                  <div class="weekly-number-wrapper">
                    <div class="weekly-text">Weekly Target</div>
                    <div class="weekly-numbers">25% achieved</div>
                  </div>
                  <span class="separator" />
                  <div class="weekly-progress-section">
                    <ProgressBarComponent
                      :isDarkView="false"
                      :percentage="50"
                      :progressBarColor="'#FFC529'"
                    />
                  </div>
                </div>
                <div class="monthly-section flex">
                  <div class="weekly-number-wrapper">
                    <div class="weekly-text">Monthly Target</div>
                    <div class="weekly-numbers">25% achieved</div>
                  </div>
                  <span class="separator" />
                  <div class="weekly-progress-section">
                    <ProgressBarComponent
                      :isDarkView="true"
                      :percentage="50"
                      :progressBarColor="'#FFC529'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="marketplace-and-socials-section flex justify-content-evenly">
            <div class="marketplace-section">
              <div class="marketplace-wrapper">
                <div class="marketplace-title">Marketplace Performance</div>
                <div class="marketplace-progress">
                  <ProgressBarComponent
                    :isDarkView="false"
                    :percentage="50"
                    :progressBarColor="'url(#linearColors1)'"
                    :isShowText="true"
                  />
                </div>
                <div class="marketplace-content-title">The Perfect Pitch</div>
                <div class="marketplace-stats">
                  <div class="stats-wrapper">
                    <div class="flex justify-content-between social-wrapper col-12">
                      <div class="mp-stats flex align-items-center col-6">
                        <div class="mp-icon flex align-items-center">
                          <img src="@/assets/likes.svg" />
                        </div>
                        <div class="mp-numbers"><span>14</span> Likes</div>
                      </div>
                      <div class="mp-stats flex align-items-center col-6">
                        <div class="mp-icon flex align-items-center">
                          <img src="@/assets/views.svg" />
                        </div>
                        <div class="mp-numbers"><span>14</span> Views</div>
                      </div>
                    </div>
                    <div class="flex justify-content-between social-wrapper col-12">
                      <div class="mp-stats flex align-items-center col-6">
                        <div class="mp-icon flex align-items-center">
                          <img src="@/assets/followers.svg" />
                        </div>
                        <div class="mp-numbers"><span>14</span> Followers</div>
                      </div>
                      <div class="mp-stats flex align-items-center col-6">
                        <div class="mp-icon flex align-items-center">
                          <img src="@/assets/shares.svg" />
                        </div>
                        <div class="mp-numbers"><span>14</span> Shares</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="socials-section flex">
              <div class="flex">
                <div class="socials-wrapper" v-for="social in socials.slice(0, 2)">
                  <div class="logo">
                    <div>
                      <img :class="`logo-img ${social.title.toLowerCase()}`" :src="social.img" />
                    </div>
                  </div>
                  <div :class="`social-name ${social.title.toLowerCase()}`">
                    {{ social.title }}
                  </div>
                  <div :class="`social-action ${social.title.toLowerCase()}`">Click To Share.</div>
                </div>
              </div>
              <div class="flex">
                <div class="socials-wrapper" v-for="social in socials.slice(2, 4)">
                  <div class="logo">
                    <div>
                      <img :class="`logo-img ${social.title.toLowerCase()}`" :src="social.img" />
                    </div>
                  </div>
                  <div :class="`social-name ${social.title.toLowerCase()}`">
                    {{ social.title }}
                  </div>
                  <div :class="`social-action ${social.title.toLowerCase()}`">Click To Share.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class=""
        :class="`${isOpenRightSidebar && !isMobile ? 'right-sidebar-desktop relative' : ''}`"
      >
        <ChatSidebarComponent
          :isMobile="isMobile"
          :isOpen="isOpenRightSidebar"
          :toggleMenu="toggleRightMenu"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from 'primevue/sidebar'
import ProgressBarComponent from '../Common/ProgressBar/Progressbar.vue'
import SidebarComponent from './Sidebar.vue'
import ChatSidebarComponent from './chatSidebar.vue'

import facebookIcon from '@/assets/facebook.svg'
import instaIcon from '@/assets/dark-insta.svg'
import tiktokIcon from '@/assets/dark-tiktok.svg'
import twitterIcon from '@/assets/twitter.svg'

export default {
  name: 'DashboardComponent',

  components: {
    primeVueSidebar: Sidebar,
    ProgressBarComponent,
    SidebarComponent,
    ChatSidebarComponent
  },
  mounted() {
    this.checkScreenWidth()
    window.addEventListener('resize', this.checkScreenWidth)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenWidth)
  },
  data() {
    return {
      isMobile: false,
      visible: false,
      isOpenLeftSidebar: true,
      isOpenRightSidebar: true,
      socials: [
        {
          img: facebookIcon,
          title: 'Facebook'
        },
        {
          img: instaIcon,
          title: 'Instagram'
        },
        {
          img: tiktokIcon,
          title: 'TikTok'
        },
        {
          img: twitterIcon,
          title: 'Twitter'
        }
      ]
    }
  },
  watch: {
    isMobile(newVal) {
      this.isOpenLeftSidebar = !newVal
      this.isOpenRightSidebar = !newVal
    }
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth <= 1100
      this.isOpenLeftSidebar = !(window.innerWidth <= 1100)
      this.isOpenRightSidebar = !(window.innerWidth <= 1100)
    },
    toggleLeftMenu() {
      this.isOpenLeftSidebar = !this.isOpenLeftSidebar
    },
    toggleRightMenu() {
      this.isOpenRightSidebar = !this.isOpenRightSidebar
    }
  }
}
</script>

<style src="@/styles/dashboard.scss"></style>
