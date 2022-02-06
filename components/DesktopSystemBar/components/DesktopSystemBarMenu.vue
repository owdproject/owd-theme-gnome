<template>
  <a class="owd-desktop__system-bar__menu">
    <span class="owd-desktop__system-bar__menu__inner">
      <slot />
    </span>
  </a>
</template>

<style lang="scss">
.owd-desktop__system-bar__menu {
  display: inline-block;
  margin: 0 4px;
  font-family: var(--owd-desktop-system-bar-menu-title-font-family);
  font-size: var(--owd-desktop-system-bar-menu-title-font-size);
  font-weight: var(--owd-desktop-system-bar-menu-title-font-weight);

  &:hover {
    .owd-desktop__system-bar__menu__inner {
      background-color: var(--owd-desktop-system-bar-menu-background-hover);
    }
  }

  &__inner {
    display: inline-block;
    background-color: transparent;
    padding: 0 12px;
    height: 26px;
    line-height: 26px;
    border-radius: 30px;
    pointer-events: none;
    transition: background-color 0.15s ease-in-out;
  }
}
</style>