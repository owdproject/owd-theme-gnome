<template>
  <DesktopSystemBarMenu>
    <span class="date" v-text="date" />
    <span class="time" v-text="time" />
  </DesktopSystemBarMenu>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject, ref } from 'vue'
import DesktopSystemBarMenu from "../../../components/DesktopSystemBar/components/DesktopSystemBarMenu.vue";

const desktopOptions = inject('desktopOptions')

const props = defineProps({
  config: Object
})

const app = getCurrentInstance();
const moment = app.appContext.config.globalProperties.$moment

const getDate = () => {
  return moment().format(desktopOptions.NotificationMenu.menu.dateFormat)
}
const getTime = () => {
  return moment().format(desktopOptions.NotificationMenu.menu.timeFormat)
}

let date = ref(getDate())
let time = ref(getTime())

setInterval(() => {
  date.value = getDate()
  time.value = getTime()
}, 1000)
</script>

<style scoped lang="scss">
.date {
  margin-right: 8px;

  @media(max-width: 400px) {
    display: none;
  }
}
</style>