<template>
  <div class="owd-system-bar__button">
    <span>
      <slot />
    </span>

    <slot name="outer" />
  </div>
</template>

<style scoped lang="scss">
.owd-system-bar__button {
  display: inline-block;
  vertical-align: top;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  padding: 0 8px;

  > span {
    height: calc(var(--owd-gnome-system-bar-height) - calc(var(--owd-gnome-system-bar-padding) * 2));
    line-height: calc(var(--owd-gnome-system-bar-height) - calc(var(--owd-gnome-system-bar-padding) * 2));
    font-weight: bold;
    font-size: 14px;
  }
}
</style>