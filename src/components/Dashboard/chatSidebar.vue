<template>
  <div class="slideout-section-right" :class="{ open: isOpen }">
    <div class="sidebar-section-right">
      <div class="">
        <div class="slideout-menu">
          <div class="chat-sidebar-section">
            <div class="title-section">
              <!-- <div class="name-wrapper">
        <div class="person-name">Jon Smith</div>
        <div class="course-name">Good Morning!</div>
      </div> -->
              <div class="notification-wrapper" @click="toggleMenu">
                <img src="@/assets/dashboard/bell-icon.svg" />
              </div>
            </div>
            <div class="chat-section">
              <div class="chat-wrapper">
                <div class="message-wrapper">Recent Messages</div>
                <div class="button-wrapper"><img src="@/assets/dashboard/three-dot.svg" /></div>
              </div>
              <div>
                <div class="message-section">
                  <div class="flex align-items-center">
                    <div class="profile-img">
                      <img src="@/assets/dashboard-profile-img.png" />
                    </div>
                    <div class="name-wrapper">
                      <div class="name">Jon Arthur</div>
                      <div class="last-online">12 min ago</div>
                    </div>
                  </div>
                  <div class="online-wrapper">
                    <div class="is-online"></div>
                  </div>
                </div>
                <div class="message-section">
                  <div class="flex align-items-center">
                    <div class="profile-img">
                      <img src="@/assets/dashboard-profile-img.png" />
                    </div>
                    <div class="name-wrapper">
                      <div class="name">Jon Arthur</div>
                      <div class="last-online">12 min ago</div>
                    </div>
                  </div>
                  <div class="online-wrapper">
                    <div class="is-online"></div>
                  </div>
                </div>
                <div class="message-section">
                  <div class="flex align-items-center">
                    <div class="profile-img">
                      <img src="@/assets/dashboard-profile-img.png" />
                    </div>
                    <div class="name-wrapper">
                      <div class="name">Jon Arthur</div>
                      <div class="last-online">12 min ago</div>
                    </div>
                  </div>
                  <div class="online-wrapper">
                    <div class="is-online"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="calender-section">
              <!-- <Calendar
                v-model="selectedDate"
                :inline="true"
                :locale="locale"
                :onMonthChange="handleMonthChange"
              ></Calendar> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Calendar from 'primevue/calendar'
export default {
  name: 'ChatSidebarComponent',
  components: {
    Calendar
  },
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
    const currentDate = new Date()
    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()))
    const endOfWeek = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)
    )

    return {
      currentMonth: null,

      selectedDate: null,

      minDate: startOfWeek,
      maxDate: endOfWeek,
      locale: {
        firstDayOfWeek: 1,
        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        monthNames: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        monthNamesShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },

      date: null
    }
  },
  methods: {
    getWeekdayLabel(date) {
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      return weekdays[date.getDay()]
    },
    handleMonthChange(event) {
      this.currentMonth = event.target.value
    }
  },
  mounted() {
    const currentDate = new Date()
    this.currentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  },
  computed: {
    currentWeekDates() {
      const startOfWeek = new Date(this.currentMonth, 1)
      const weekDates = []

      for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek)
        date.setDate(date.getDate() + i)
        weekDates.push(date)
      }

      return weekDates
    }
  }
}
</script>

<style lang="scss" src="@/styles/chatsidebar.scss"></style>
