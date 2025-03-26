<script setup lang="ts">
import '#/desktop.config'

const props = defineProps<{
  systemBar?: SystemBarConfig
}>()

const desktop = useDesktopManager()
</script>

<template>
  <CoreDesktop v-bind="$props">

    <Background/>

    <SystemBar
        v-if="desktop.config.systemBar.enabled"
    />

    <DesktopContent>
      <CoreApplicationRender />
      <slot/>
    </DesktopContent>

    <DockBar />

  </CoreDesktop>
</template>

<style lang="scss">
@use '../assets/styles/index.scss';

.owd-desktop {
  font-family: var(--owd-gnome-font-family);
  color: var(--owd-color);

  button {
    font-family: var(--owd-gnome-font-family);
  }

  &__system-bar {
    &--position-bottom {
      flex-direction: column-reverse;
    }
  }
}
</style>