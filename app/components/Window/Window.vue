<script setup lang="ts">
const props = defineProps<{
  config?: WindowConfig
  window?: IWindowController
}>()

provide('windowController', handleWindowControllerProps(props))
</script>

<template>
  <CoreWindow>
    <Sheet border rounded>
      <WindowNav>

        <template v-slot:nav-prepend>
          <slot name="nav-prepend"/>
        </template>

        <template v-slot:nav-append>
          <slot name="nav-append"/>
        </template>

      </WindowNav>

      <WindowContent>

        <slot/>

      </WindowContent>
    </Sheet>
  </CoreWindow>
</template>

<style scoped lang="scss">
.owd-window {
  border-width: 1px;
  border-style: solid;
  border-color: #0c0c0c;
  box-shadow: 0 0 10px 0 rgba(21, 21, 21, 0.5);
  border-radius: var(--owd-gnome-window-border-radius);

  :deep(> .owd-sheet) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>