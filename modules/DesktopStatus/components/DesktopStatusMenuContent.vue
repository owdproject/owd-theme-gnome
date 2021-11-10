<template>
  <DesktopSystemBarMenuContent
      class="owd-desktop__status-menu__container"
      v-click-outside="menuClose"
  >

    <template v-if="desktopModules.list.SystemBarStatus && desktopModules.list.SystemBarStatus.default">
      <component
          v-for="(desktopModule, i) of desktopModules.list.SystemBarStatus.default" :key="i"
          :is="desktopModule.components.content"
          @close="menuClose"
      />
    </template>

  </DesktopSystemBarMenuContent>
</template>

<script setup>
import DesktopSystemBarMenuContent from '../../../components/DesktopSystemBar/components/DesktopSystemBarMenuContent.vue'
import {inject} from "vue";

const emit = defineEmits([
  'close'
])

const desktopModules = inject('desktopModules')

function menuClose() {
  emit('close')
}
</script>

<style scoped lang="scss">
.owd-desktop__status-menu__container {
  > div {
    position: relative;
    margin-bottom: -8px;

    &:not(:last-child) {
      padding-bottom: 8px;
      margin-bottom: 20px;

      &:before {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 128px;
        transform: translateX(-50%);
        border-bottom: 1px solid $owd-window-content-border-color;
        content: '';
      }
    }

  }
}

.owd-desktop__status-menu {
  &__container {
    display: grid;
    width: 300px;
    max-width: calc(100% - 32px);
    right: 16px;
    padding: 20px 18px;
    text-align: center;
  }
}

.overline {
  height: 9px;
  line-height: 12px;
  margin-bottom: 12px;
}

.patreon-goal {
  text-align: left;
  margin-bottom: 22px;

  .progress-bar {
    width: 100%;
    height: 8px;
    margin-top: 5px;
    border-radius: 4px;
    background: #282828;
    overflow: hidden;

    &__value {
      height: 100%;
      background-color: $owd-dock-item-square-background;
      border-radius: 4px;
    }
  }
}
</style>