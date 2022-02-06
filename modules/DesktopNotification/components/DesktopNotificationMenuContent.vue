<template>
  <!-- desktop notification menu -->
  <DesktopSystemBarMenuContent
      v-if="opened"
      class="owd-desktop__notification__container"
      v-click-outside="menuClose"
  >

    <DesktopNotificationList class="col col-notification-list" />
    <DesktopNotificationCalendar class="col col-calendar" />

  </DesktopSystemBarMenuContent>

  <!-- floating notifications -->
  <DesktopNotificationFloatingList v-show="!opened" />
</template>

<script setup>
import DesktopSystemBarMenuContent from '../../../components/DesktopSystemBar/components/DesktopSystemBarMenuContent.vue'
import DesktopNotificationList from "./DesktopNotification/DesktopNotificationList.vue";
import DesktopNotificationCalendar from "./DesktopNotificationCalendar/DesktopNotificationCalendar.vue";
import DesktopNotificationFloatingList from "./DesktopNotificationFloating/DesktopNotificationFloatingList.vue";

const props = defineProps({
  opened: Boolean
})

const emit = defineEmits([
  'close'
])

function menuClose() {
  emit('close')
}
</script>

<style scoped lang="scss">
.owd-desktop__notification__container {
  display: grid;
  width: 700px;
  max-width: calc(100% - 32px);
  height: 500px;
  max-height: 60vh;
  grid-template-columns: 58% 42%;
  line-height: 32px;
  padding: 16px 0;
  left: 50%;
  transform: translateX(-50%);

  @media(max-width: 600px) {
    grid-template-columns: 100%;
  }

  @media(max-height: 400px) {
    max-height: calc(100vh - 60px);
  }

  /*
  .arrow {
    border: solid $owd-window-border;
    background: var(--owd-window-background);
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 8px;
    transform: rotate(-135deg);
  }
   */

  .col-notification-list {
    padding: 8px 24px;

    @media(max-width: 600px), (max-height: 400px) {
      padding: 4px 16px;
    }
  }

  .col-calendar {
    border-left: 1px solid var(--owd-desktop-system-bar-menu-content-separator);
    padding: 16px;
    text-align: left;

    @media(max-width: 600px) {
      display: none;
    }
  }
}
</style>