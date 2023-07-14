<template>
  <footer class="footer-section">
    <div class="footer-container col-11 lg:col-10 wrapper flex flex-row flex-wrap">
      <!-- <p>&copy; 2023 Your Website. All rights reserved.</p> -->
      <div class="col-10 lg:col-6 flex justify-content-start">
        <div class="grow-2-footer">
          <div class="grow-2-footer-title">
            <div class="title flex">Grow2</div>
            <div class="tag-line flex">
              Lorem ipsum diigital experiences that create more happy in the world.
            </div>
          </div>
          <div class="socials-container">
            <div class="flex">Follow us on</div>
            <div class="flex flex-row justify-content-between social-links-section">
              <div class="social-links flex" v-for="links in socials">
                <div><img :src="links" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 lg:col-6 flex flex-wrap nav-links-wrapper">
        <div class="col-12 flex-1 nav-link-section" v-for="item in navLinks">
          <div class="nav-link-title">{{ item.title }}</div>
          <div class="footer-nav-links" v-for="link in item.links">
            <div>{{ link.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div><small>Copyright © 2023 Grow2 . All Rights Reserved.</small></div>
  </footer>
</template>

<script lang="ts">
import twitterIcon from '@/assets/twitter.svg'
import instagramIcon from '@/assets/instagram.svg'
import facebookIcon from '@/assets/facebook.svg'
import tiktokIcon from '@/assets/tik-tok.svg'
import spotifyIcon from '@/assets/spotify.svg'
import youtubeIcon from '@/assets/youtube.svg'

export default {
  name: 'FooterComponent',

  data() {
    return {
      navLinks: [
        {
          title: 'Company',
          links: [
            { url: '', name: 'About' },
            { url: '', name: 'Feature' },
            { url: '', name: 'Works' },
            { url: '', name: 'Careers' }
          ]
        },
        {
          title: 'Help',
          links: [
            { url: '', name: 'Customer Support' },
            { url: '', name: 'Terms & Conditions' },
            { url: '', name: 'Privacy Policy' }
          ]
        },
        {
          title: 'Resources',
          links: [
            { url: '', name: 'Free Tutorials' },
            { url: '', name: 'How to Blog' },
            { url: '', name: 'Youtube Playlist' },
            { url: '', name: 'Case study' }
          ]
        }
      ],
      socials: [twitterIcon, instagramIcon, facebookIcon, tiktokIcon, spotifyIcon, youtubeIcon]
    }
  }
}
</script>

<style src="../../styles/Footer.scss"></style>
