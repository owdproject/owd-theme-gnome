<script setup lang="ts">
const volumeStore = useVolumeStore()
</script>

<template>
  <SystemBarSettingsMenuSlider icon-prepend="mdi:headset">
    <Slider v-model="volumeStore.master" :min="0" :max="100" />
  </SystemBarSettingsMenuSlider>
</template>

<style scoped lang="scss">
.owd-system-bar__settings-menu__header {
  display: flex;
  flex-direction: row;
  width: 100%;

  > div {
    &:nth-child(1) {
      text-align: left;
      flex: 1;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 12px;
      flex: 0;
    }
  }
}
</style>