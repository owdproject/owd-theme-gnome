<script setup lang="ts">
const props = defineProps<{
  padded?: boolean
  centered?: boolean
}>()

const classes = computed(() => {
  const list = ['owd-window__content']

  if (props.centered) {
    list.push('owd-window__content--centered')
  }

  if (props.padded) {
    list.push('owd-window__content--padded')
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
.owd-window__content {
  display: block;
  flex: 1;

  &--centered {
    align-content: center;
  }

  &--padded {
    padding: 16px;
  }
}
</style>