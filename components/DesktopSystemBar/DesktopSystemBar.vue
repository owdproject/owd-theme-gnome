<template>
  <div class="owd-desktop__system-bar">

    <!-- system-bar left area -->
    <div class="owd-desktop__system-bar__left">
      <slot name="system-bar-left-prepend" />

      <DesktopSystemBarMenu @click="$emit('toggleDesktopOverview')">
        Activities
      </DesktopSystemBarMenu>

      <template v-if="desktopModules.list.SystemBar && desktopModules.list.SystemBar.left">
        <template v-for="(desktopModule, i) of desktopModules.list.SystemBar.left" :key="i">
          <component
              :is="desktopModule.components.menu"
              :config="desktopModule.config"
              @click="(e) => openSystemBarDesktopModule(e, desktopModule)"
          />
          <component
              v-if="desktopModule.config.opened"
              :is="desktopModule.components.content"
              :arrow-position="desktopModule.config.arrowPosition"
              @close="closeSystemBarDesktopModule(desktopModule)"
          />
        </template>
      </template>

      <slot name="system-bar-left-append" />
    </div>

    <!-- system-bar middle area -->
    <div class="owd-desktop__system-bar__middle">
      <template v-if="desktopModules.list.SystemBar && desktopModules.list.SystemBar.center">
        <template v-for="(desktopModule, i) of desktopModules.list.SystemBar.center" :key="i">
          <component
              :is="desktopModule.components.menu"
              :config="desktopModule.config"
              @click="(e) => openSystemBarDesktopModule(e, desktopModule)"
          />
          <component
              :is="desktopModule.components.content"
              :opened="desktopModule.config.opened"
              :arrow-position="desktopModule.config.arrowPosition"
              @close="closeSystemBarDesktopModule(desktopModule)"
          />
        </template>
      </template>
    </div>

    <!-- system-bar right area -->
    <div class="owd-desktop__system-bar__right">
      <slot name="system-bar-right-prepend" />

      <template v-if="desktopModules.list.SystemBar && desktopModules.list.SystemBar.right">
        <template v-for="(desktopModule, i) of desktopModules.list.SystemBar.right" :key="i">
          <component
              :is="desktopModule.components.menu"
              :config="desktopModule.config"
              @click="(e) => openSystemBarDesktopModule(e, desktopModule)"
          />
          <component
              v-if="desktopModule.config.opened"
              :is="desktopModule.components.content"
              :config="desktopModule.config"
              :arrow-position="desktopModule.config.arrowPosition"
              @close="closeSystemBarDesktopModule(desktopModule)"
          />
        </template>
      </template>

      <slot name="system-bar-right-append" />
    </div>

  </div>
</template>

<script setup>
import {defineProps, inject} from 'vue';
import DesktopSystemBarMenu from "./components/DesktopSystemBarMenu.vue";

const props = defineProps({
  systemBar: Boolean
})

const desktopModules = inject('desktopModules')

const openSystemBarDesktopModule = (event, module) => {
  // set desktop module opened
  module.config.opened = !module.config.opened

  // set content arrow position
  module.config.arrowPosition = event.target.getBoundingClientRect().left + (event.target.offsetWidth / 2) - 12
}

const closeSystemBarDesktopModule = (module) => {
  if (module) {
    module.config.opened = false
  }
}
</script>

<style scoped lang="scss">
.owd-desktop__system-bar {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  color: $owd-desktop-system-bar-text;
  height: $owd-desktop-system-bar-height;
  line-height: $owd-desktop-system-bar-height;
  user-select: none;
  cursor: default;

  &__middle {
    text-align: center;
  }

  &__right {
    text-align: right;

    a {
      font-size: 11px;

      .v-icon {
        display: inline-block;
        margin-top: -4px;
      }
    }
  }
}
</style>