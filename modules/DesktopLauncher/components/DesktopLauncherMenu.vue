<template>
  <DesktopSystemBarMenu>
    <span>
      {{$t(`${config.name}.menu`)}}
    </span>
  </DesktopSystemBarMenu>
</template>

<script setup>
import {defineProps} from 'vue'
import DesktopSystemBarMenu from "../../../components/DesktopSystemBar/components/DesktopSystemBarMenu.vue";

defineProps({
  config: Object
})
</script>