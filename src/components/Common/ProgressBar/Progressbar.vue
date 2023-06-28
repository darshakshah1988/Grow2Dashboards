<template>
  <div class="progress-bar">
    <div class="progress-circle">
      <svg class="progress-svg" :viewBox="viewBox">
        <circle
          class="progress-background"
          :cx="radius"
          :cy="radius"
          :r="radius"
          :stroke="isDarkView ? '#F6F5FA' : 'white'"
        />
        <linearGradient id="linearColors1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2461f3"></stop>
          <stop offset="100%" stop-color="#633aa7"></stop>
        </linearGradient>
        <circle
          class="progress-loader"
          :cx="radius"
          :cy="radius"
          :r="radius"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="offset"
          :stroke="progressBarColor"
        />
        <!-- <circle
          class="progress-initiator"
          :cx="initiatorX"
          :cy="initiatorY"
          :r="initiatorRadius"
          :fill="'#633AA7'"
        /> -->
      </svg>
      <div class="progress-text" v-if="!isShowText" :style="fontColorStyle">{{ percentage }}%</div>
      <div class="progress-text progress-text-primary" v-if="isShowText" :style="fontColorStyle">
        30
      </div>
      <div class="progress-text progress-text-secondary" v-if="isShowText" :style="fontColorStyle">
        Published
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProgressBarComponent',
  props: {
    progressBarColor: {
      type: String,
      default: '#FFC529'
    },
    isShowText: {
      type: Boolean,
      default: false
    },
    isDarkView: {
      type: Boolean,
      default: false
    },
    percentage: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100
    }
  },
  data() {
    return {
      radius: 80,
      circumference: 2 * Math.PI * 80,
      currentPercentage: 0,
      initiatorRadius: 20
    }
  },
  computed: {
    viewBox() {
      const size = this.radius * 2
      return `0 0 ${size} ${size}`
    },
    offset() {
      return this.circumference - (this.currentPercentage / 100) * this.circumference
    },
    fontColorStyle() {
      return {
        color: this.isDarkView ? '#ffffff' : '#4E4C74'
      }
    }
    // initiatorX() {
    //   const progress = (this.currentPercentage / 100) * this.circumference
    //   const x = -Math.sin((2 * Math.PI * progress) / this.circumference - Math.PI / 2)
    //   return this.radius + this.radius * x
    // },
    // initiatorY() {
    //   const progress = (this.currentPercentage / 100) * this.circumference
    //   const y = Math.cos((2 * Math.PI * progress) / this.circumference - Math.PI / 2)
    //   return this.radius + this.radius * y
    // }
  },
  mounted() {
    this.animateProgressBar()
  },

  methods: {
    animateProgressBar() {
      const interval = setInterval(() => {
        if (this.currentPercentage >= this.percentage) {
          clearInterval(interval)
        } else {
          this.currentPercentage++
        }
      }, 10) // Adjust the interval duration as per your preference
    }
  }
}
</script>

<style scoped lang="scss">
.progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.progress-circle {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: transparent;
  overflow: hidden;
}

.progress-svg {
  transform: rotate(-90deg);
}

.progress-background {
  fill: transparent;
  stroke-width: 20;
}
.progress-initiator {
  stroke-width: 20; /* Adjust the stroke width as per your preference */
  fill: #633aa7;
  stroke: #633aa7; /* Add the stroke property */
}
.progress-loader {
  fill: transparent;
  stroke-width: 20;
  stroke-linecap: round;
  transform-origin: center;
}

.progress-text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;

  color: #4e4c74;

  &.progress-text-primary {
    font-size: 18px;
    line-height: 21px;
    color: #050513;
    top: -5px;
  }
  &.progress-text-secondary {
    top: 10px;

    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    color: #828699;
  }
}
</style>
