<script setup lang="ts">
const applicationManager = useApplicationManager()
</script>

<template>
  <div class="owd-dock-bar">
    <div class="owd-dock-bar__inner">
      <DockBarButtonApp
          v-for="[applicationId, application] of applicationManager.appsRunning"
          :application="application"
      />
      <Divider layout="vertical" />
      <DockBarButtonMenu />
    </div>
  </div>
</template>

<style scoped lang="scss">
.owd-dock-bar {
  padding: var(--owd-gnome-dock-bar-spacing);
  text-align: center;

  &__inner {
    display: inline-flex;
    flex-direction: row;
    gap: var(--owd-gnome-dock-bar-spacing);
    margin: 0 auto;
    padding: var(--owd-gnome-dock-bar-spacing);
    border-radius: 24px;
    background: rgba(var(--owd-gnome-hover-background-color));
  }

  .p-divider-vertical:before {
    color: transparent;
  }
}
</style>