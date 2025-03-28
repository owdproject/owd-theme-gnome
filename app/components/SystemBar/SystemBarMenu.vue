<script setup lang="ts">

</script>

<template>
  <Sheet
      class="owd-system-bar__menu"
  >
    <slot />
  </Sheet>
</template>

<style scoped lang="scss">
.owd-system-bar__menu {
  position: absolute;
  top: calc(var(--owd-gnome-system-bar-height) + var(--owd-gnome-system-bar-menu-spacing));
  padding: 8px;
}
</style>