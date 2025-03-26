<script setup lang="ts">

</script>

<template>
  <WindowNavButton>
    <div class="owd-window-nav__button__icon" />
  </WindowNavButton>
</template>

<style scoped lang="scss">
.owd-window-nav__button__icon {
  width: 10px;
  height: 10px;
  top: 6px;
  left: 6px;
  transform: rotateZ(45deg);
  position: relative;

  &:before, &:after {
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    content: "";
  }

  &:before {
    height: 100%;
    width: 2px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    height: 2px;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>