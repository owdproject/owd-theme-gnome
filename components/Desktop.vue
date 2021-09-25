<template>
  <DesktopBase :class="{
    'owd-desktop__system-bar--position-top': desktopOptions.SystemBar.position === 'top',
    'owd-desktop__system-bar--position-bottom': desktopOptions.SystemBar.position === 'bottom',
  }">
    <SystemBar v-if="desktopOptions.SystemBar.enabled">

      <!-- additional slots for left area system-bar -->
      <template v-slot:system-bar-left-prepend>
        <slot name="system-bar-left-prepend"/>
      </template>
      <template v-slot:system-bar-left-append>
        <slot name="system-bar-left-append"/>
      </template>

      <!-- additional slots for right area system-bar -->
      <template v-slot:system-bar-right-prepend>
        <slot name="system-bar-right-prepend"/>
      </template>
      <template v-slot:system-bar-right-append>
        <slot name="system-bar-right-append"/>
      </template>

    </SystemBar>

    <div class="owd-desktop__content" @click="setDesktopOverview(false)">
      <slot/>

      <DesktopDockMinimal v-if="desktopOptions.Dock.enabled" />

      <WindowsContainer />
    </div>

    <NoticeFullscreenExit>
      Press <kbd>ESC</kbd> to exit full screen
    </NoticeFullscreenExit>
  </DesktopBase>
</template>

<script setup lang="ts">
import {inject} from 'vue'
import {useStore} from "vuex";

import WindowsContainer from '@owd-client/core/src/components/window/container/WindowsContainer.vue'

import DesktopBase from '@owd-client/core/src/components/desktop/DesktopBase.vue'
import SystemBar from "./DesktopSystemBar/DesktopSystemBar.vue";
import DesktopDockMinimal from "./DesktopDockMinimal/DesktopDock.vue";

import NoticeFullscreenExit from '@owd-client/core/src/components/notice/NoticeFullscreenExit.vue'

const store = useStore()
const desktopOptions = inject('desktopOptions')
</script>

<style scoped lang="scss">
.owd-desktop {
  background: $owd-desktop-system-bar-background;

  &__system-bar {
    &--position-top {
      .owd-desktop__content {
        border-radius: 10px 10px 0 0;
      }
    }

    &--position-bottom {
      flex-direction: column-reverse;

      .owd-desktop__content {
        border-radius: 0 0 10px 10px;
      }
    }
  }

  &__content {
    background-color: $owd-background;
  }
}
</style>