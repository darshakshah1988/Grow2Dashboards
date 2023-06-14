<template>
  <div class="landing-section">
    <div>
      <div
        class="dashboard-heading-wrapper flex-wrap flex align-items-center justify-content-around"
      >
        <div class="heading-text-section flex flex-column align-items-center">
          <div class="heading-primary font-bold line-height-2">
            Revolutionise Your Trade Industry with Grow2
          </div>
          <div class="heading-secondary font-normal line-height-2">
            The Ultimate Platform for Tradespeople, Apprentices, Creators, Business Owners, School
            students, Non for profit organisations and Sponsors!
          </div>
        </div>
        <div class="heading-image-section container">
          <div class="img-wrapper">
            <img src="@/assets/dashboardheader.png" class="responsive-img" />
            <div class="text-container">
              <span class="text inner">Tradespeople</span>
              <span class="text inner">Business owners</span>
              <span class="text inner">Sponsors</span>
              <span class="text outer">Apprentices</span>
              <span class="text outer">Creators</span>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute right-0 left-0 flex justify-content-center content-message-wrapper">
        <div class="dashboard-community-message-section py-5 border-round-xl relative">
          <div class="text-lg message-text">
            Empower your career with Grow2's innovative ecosystem that connects tradespeople,
            mentors, and businesses. Gain knowledge, create content, and collaborate with experts in
            your field to take your career to the next level.
          </div>
          <div class="flex community-button-wrapper">
            <PrimeVueButton
              label="Join Community on facebook"
              class="community-button border-round-lg w-17rem text-lg py-3 px-2 mt-4"
            ></PrimeVueButton>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-body-wrapper relative">
      <div class="body-feature-wrapper text-2xl md:text-5xl font-bold flex justify-content-center">
        Features
      </div>
      <div class="grow2-section" v-for="content in grow2Content" :key="content.id">
        <div
          :class="`content-section justify-content-center align-items-center grid ${
            content.offsetTo === 'right' && 'flex-to-right'
          }`"
        >
          <!-- <div :class="`flex card-container `"> -->
          <div class="col-10 lg:col-5 md:col-10 sm:col-10 mt-2 md:mt-0 flex justify-content-center">
            <div class="content-title">
              <div class="title-text font-semibold">
                <span class="grow2-title">Grow2</span>{{ ' ' }}
                <span class="title-name">{{ content.name }}</span>
              </div>
              <ul class="content-advantage-list-wrapper p-0">
                <div
                  class="content-advantage-list"
                  v-for="(key, value, index) in content.items"
                  :key="index"
                >
                  <li>
                    <div class="list-wrapper flex align-items-start">
                      <div class="mr-3">
                        <img src="@/assets/check-icon.svg" class="responsive-img" />
                      </div>
                      <div class="list-content-wrapper">
                        <span class="list-key-point font-semibold">{{ value }}</span> -
                        <span class="list-value-point">{{ key }} </span>
                      </div>
                    </div>
                  </li>
                </div>
                <div :class="`flex justify-content-center lg:justify-content-start`">
                  <PrimeVueButton
                    v-bind:label="`${content.buttonText}`"
                    class="community-button content-list-button border-round-lg w-auto text-md"
                  ></PrimeVueButton>
                </div>
              </ul>
            </div>
          </div>

          <div class="col-10 lg:col-5 md:col-10 sm:col-10 flex justify-content-center">
            <div :class="`content-list-items flex `" :size="67">
              <img :src="content.img" class="responsive-img dasboard-content-img" />
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div class="users-review-section col-11 flex flex-column justify-content-center">
        <div
          class="body-feature-wrapper text-2xl md:text-5xl font-bold flex justify-content-center"
        >
          What Our Users Are Saying
        </div>
        <div class="flex flex-wrap flex-row justify-content-center">
          <div
            :class="`review-wrapper flex flex-column
            ${usersReviews.indexOf(item) % 2 === 0 ? 'lg:flex-column-reverse' : 'lg:flex-column'}
            `"
            v-for="item in usersReviews"
            :key="usersReviews.indexOf(item)"
          >
            <div class="review-img-container flex">
              <img :src="item.reviewImg" :class="`review-img img-${usersReviews.indexOf(item)}`" />
            </div>
            <div class="review-text-wrapper">
              <div class="review-text text-base font-normal">{{ item.review }}</div>
              <div class="review-by font-medium mt-3 flex justify-content-end">
                -{{ item.reviewBy }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-section col-11 lg:col-11 md:col-11 sm:col-11">
        <Carousel
          :value="products"
          :numVisible="1"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <div class="m-2 text-center py-5 px-3">
              <div class="mb-3">
                <img
                  :src="slotProps.data"
                  :class="`carousel-img img-${products.indexOf(slotProps.data)} `"
                />
              </div>
            </div>
          </template>
        </Carousel>
      </div>
      <div class="grow2-community-section community-section">
        <div class="col-10 wrapper">
          <div
            class="body-feature-wrapper text-2xl md:text-5xl font-bold flex justify-content-center"
          >
            Welcome to the Grow2 Community!
          </div>
          <div class="heading-text-wrapper">
            We believe that the Grow2 ecosystem is more than just a platform; it’s a community of
            like-minded individuals who are passionate about their trades and helping each other
            succeed. That's why we've created various opportunities for our users to connect and
            engage with one another.
          </div>

          <div class="community-card-component flex flex-row flex-wrap justify-content-around">
            <div
              class="community-card-wrapper flex justify-content-center"
              v-for="card in communityCardDetails"
            >
              <div class="community-card flex flex-column">
                <div class="community-card-icon">
                  <div class="icon-card-wrapper"><img :src="card.icon" /></div>
                </div>
                <div class="community-card-title">{{ card.title }}</div>
                <div class="community-card-text">{{ card.text }}</div>
              </div>
            </div>
          </div>
          <div class="join-grow-2 flex justify-content-center">
            Join the Grow2 community today and start connecting, learning, and growing with us!
          </div>
        </div>
      </div>
      <div class="learn-and-grow-section community-section">
        <div class="col-10 wrapper">
          <div
            class="body-feature-wrapper text-2xl md:text-5xl font-bold flex justify-content-center"
          >
            Learn and Grow with Us
          </div>
          <div class="heading-text-wrapper">
            At Grow2, we are committed to providing our users with high-quality educational content
            related to the trade industry. Our platform offers a variety of resources to help you
            enhance your skills, stay up-to-date with industry trends, and achieve your goals.
          </div>
          <div class="community-card-component flex flex-row flex-wrap justify-content-around">
            <div
              class="community-card-wrapper learn-and-grow flex justify-content-center"
              v-for="card in learnAndGrowDetails"
            >
              <div class="community-card flex flex-column">
                <div class="">
                  <div class=""><img :src="card.img" /></div>
                </div>
                <div class="community-card-text">{{ card.text }}</div>
                <div class="community-card-title">{{ card.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-11 read-more-button-section flex justify-content-end">
        <div>
          <PrimeVueButton :plain="true" label="Read more" icon="right-arrow" iconPos="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from 'primevue/button'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Carousel from 'primevue/carousel'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingPageComponent',
  components: {
    PrimeVueButton: Button,
    Splitter,
    SplitterPanel,
    Carousel
  },

  data() {
    return {
      products: [
        '../../src/assets/review-user-0.png',
        '../../src/assets/review-user-1.png',
        '../../src/assets/review-user-2.png'
      ],
      responsiveOptions: [
        {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
        }
      ],
      communityCardDetails: [
        {
          icon: '../../src/assets/listpad.svg',
          title: 'Forums and Discussion Boards',
          text: `Our discussion boards are the perfect place for users to ask questions, share insights, and exchange ideas with others in the community. 
          You can connect with fellow tradespeople, apprentices, content creators, and business owners to get the support and inspiration you need to grow.`
        },
        {
          icon: '../../src/assets/laptop.svg',
          title: 'Webinars and Events',
          text: `We host regular webinars and events on a variety of topics to help users enhance their skills and stay up to date with industry trends. 
          These events are also a great way to meet and connect with other members of the community.`
        },
        {
          icon: '../../src/assets/gamification.svg',
          title: 'Gamification',
          text: `We've incorporated gamification techniques into our platform to make the learning process more engaging and fun. You can earn badges, 
          complete challenges, and compete with other users to level up and show off your skills.`
        }
      ],
      learnAndGrowDetails: [
        {
          img: '../../src/assets/book.png',
          title: 'Education',
          text: `How-to guides and tutorials on various trade-related topics.`
        },
        {
          img: '../../src/assets/lamp.png',
          title: 'Industry',
          text: `Thought leadership articles and insights from industry experts`
        },
        {
          img: '../../src/assets/monitorscreen.png',
          title: 'Case study',
          text: `Case studies and success stories highlighting the achievements of our users`
        }
      ],
      grow2Content: [
        {
          id: 1,
          offsetTo: 'left',
          name: 'Create',
          items: {
            'Powerful Content Creation Tools':
              'Create stunning content with our easy-to-use tools.',
            'Collaborate with Your Team':
              'Work together with your team members and get feedback in real-time.',
            'Share Your Content':
              'Share your creations with the world and become an influencer in your industry.'
          },
          buttonText: 'Learn more about Grow2 Create',
          buttonLink: '',
          img: '../../src/assets/dashboard-img4.png'
        },
        {
          id: 2,
          offsetTo: 'right',
          name: 'Learn',
          items: {
            'Learn from Industry Experts':
              'Gain access to knowledge and insights from experts in your industry.',
            'Gain Certifications':
              'Get certified in various courses and programs to advance your career.',
            'Become an Influencer':
              'Build your reputation and become a thought leader in your field.'
          },
          buttonText: 'Sign up for Grow2 Learn now',
          buttonLink: '',
          img: '../../src/assets/dashboard-img2.png'
        },
        {
          id: 3,
          offsetTo: 'left',
          name: 'Marketplace',
          items: {
            'Purchase Creator Content':
              'Access a wide range of creator content to enhance your knowledge and skills.',
            'Access Training Resources':
              'Access our training resources to stay up to date with the latest industry trends.',
            'Connect with Other Members': 'Connect with other members and expand your network.'
          },
          buttonText: 'Join Grow2 Marketplace today',
          buttonLink: '',
          img: '../../src/assets/dashboard-img3.png'
        },
        {
          id: 4,
          offsetTo: 'right',
          name: 'Life',
          items: {
            'Connect with Non-Profit Agencies':
              'Connect with non-profit agencies and give back to your community.',
            'Connect with Trade Mentors':
              'Connect with trade mentors and get support from like-minded individuals.',
            'Share Your Experiences':
              'Share your experiences and connect with other professionals in your field.'
          },
          buttonText: 'Learn more about Grow2 Life',
          buttonLink: '',
          img: '../../src/assets/dashboard-img1.png'
        },
        {
          id: 5,
          offsetTo: 'left',
          name: 'Academy',
          items: {
            'Connect All Components':
              'Connect all components of the ecosystem for a seamless user experience.',
            'Build Your Career Path':
              'Create a career path for yourself with the help of our platform.',
            'Find New Opportunities': 'Find new opportunities to expand your network channels.'
          },
          buttonText: 'Join Grow2 Academy & build your career path today',
          buttonLink: '',
          img: '../../src/assets/dashboard-img5.png'
        }
      ],
      usersReviews: [
        {
          review: `“I started using Grow2 Marketplace for my business, and it's been a great investment.
            The creator content has really helped me stay up- to -
            date with the latest industry trends and enhance my skills.I highly recommend it to other business owners.”`,
          reviewBy: 'Darshak Shah',
          reviewImg: '../../src/assets/review-user-0.png'
        },
        {
          review: `“I was blown away by the resources available on Grow2 Learn. As a trade educator,
            I appreciate the focus on using VARK to educate tradespeople.
           It's a game-changer in the industry, and I'm proud to be a part of it.”`,
          reviewBy: 'Darshak Shah',
          reviewImg: '../../src/assets/review-user-1.png'
        },
        {
          review: `“Grow2 Life has been an amazing resource for me. I was able to connect with
          a mentor who has helped me navigate the challenges of being a tradeswoman.
          It's great to have a supportive community of like-minded individuals.”`,
          reviewBy: 'Darshak Shah',
          reviewImg: '../../src/assets/review-user-2.png'
        }
      ]
    }
  }
})
</script>

<style src="../../styles/landing.scss"></style>
