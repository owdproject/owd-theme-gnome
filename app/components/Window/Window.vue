<script setup lang="ts">
const props = defineProps<{
  config?: WindowConfig
  window?: IWindowController
  content?: any
}>()

const workspaceStore = useWorkspaceStore()

provide('windowController', handleWindowControllerProps(props))

function onWorkspaceWindowDragStart(e) {
  e.dataTransfer.setData('text', props.window?.state.id)
}
</script>

<template>
  <CoreWindow
      v-show="window?.state.active"
      :draggable="workspaceStore.overview ? 'true' : 'false'"
      @dragstart="onWorkspaceWindowDragStart"
  >
    <Sheet
        border rounded
    >
      <WindowNav>

        <template v-slot:nav-prepend>
          <slot name="nav-prepend"/>
        </template>

        <template v-slot:nav-append>
          <slot name="nav-append"/>
        </template>

      </WindowNav>

      <WindowContent v-bind="content">

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