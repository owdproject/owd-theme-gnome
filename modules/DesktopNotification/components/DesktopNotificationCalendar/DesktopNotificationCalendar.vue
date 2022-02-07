<template>
  <div>

    <div class="calendar-header">
      <div class="day-of-week">{{calendar.dayOfWeek}}</div>
      <div class="date">{{calendar.date}}</div>
    </div>

  </div>
</template>

<script setup>
import {getCurrentInstance, inject, ref} from "vue";

const desktopConfig = inject('desktopConfig')

const app = getCurrentInstance();
const moment = app.appContext.config.globalProperties.$moment

const getDayOfWeek = () => {
  return moment().format(desktopConfig.options.NotificationMenu.calendar.header.dayOfWeekFormat)
}
const getDate = () => {
  return moment().format(desktopConfig.options.NotificationMenu.calendar.header.dateFormat)
}

let dayOfWeek = ref(getDayOfWeek())
let date = ref(getDate())

setInterval(() => {
  dayOfWeek.value = getDayOfWeek()
  date.value = getDate()
}, 1000)

const calendar = {
  dayOfWeek: dayOfWeek.value,
  date: date.value
}
</script>

<style scoped lang="scss">
.calendar-header {
  padding: 0 10px;

  .day-of-week {
    font-weight: bold;
    font-size: 13px;
    line-height: 12px;
  }
  .date {
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
  }
}
</style>