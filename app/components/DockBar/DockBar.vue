<script setup lang="ts">
const applicationManager = useApplicationManager()
</script>

<template>
  <div class="owd-dock-bar">
    <Button
        v-for="[windowId, window] of applicationManager.windowsOpened"
        size="sb"
    >
      {{window.state.title}}
    </Button>
  </div>
</template>

<style scoped lang="scss">

</style>