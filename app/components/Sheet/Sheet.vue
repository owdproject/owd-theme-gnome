<script setup lang="ts">
const props = defineProps<{
  rounded?: boolean,
}>()

const classes = computed(() => {
  const list = ['owd-sheet']

  if (props.rounded) {
    list.push('owd-sheet--rounded')
  }

  return list
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.owd-sheet {
  background: #353535;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .05);
  border-radius: var(--owd-gnome-window-border-radius);
}
</style>