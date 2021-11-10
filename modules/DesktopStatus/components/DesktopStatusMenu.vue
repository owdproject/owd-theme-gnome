<template>
  <DesktopSystemBarMenu v-if="desktopModules.list.SystemBarStatus && desktopModules.list.SystemBarStatus.default">
    <div class="icons">

      <component
          v-for="(desktopModule, i) of desktopModules.list.SystemBarStatus.default" :key="i"
          :is="desktopModule.components.menu"
          :config="desktopModule.config"
      />

    </div>
  </DesktopSystemBarMenu>
</template>

<script setup>
import DesktopSystemBarMenu from "../../../components/DesktopSystemBar/components/DesktopSystemBarMenu.vue";
import {inject} from "vue";

const props = defineProps({
  config: Object
})

const desktopModules = inject('desktopModules')
</script>

<style scoped lang="scss">
.icons {
  pointer-events: none;
  margin: 0 -5px;

  i {
    top: -1px;
    position: relative;
    margin: 0 4px;
  }
}
</style>