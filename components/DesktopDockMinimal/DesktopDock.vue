<template>
  <div class="owd-menu">
    <ul class="owd-menu__group">
      <slot name="prepend" />

      <template v-for="(window) of dock.apps">
        <template v-if="window.config.favorite">

          <DesktopDockItem v-if="window.list.length === 0" :window="window" />

          <template v-else v-for="(window) of window.list">
            <DesktopDockItem :window="window" />
          </template>

        </template>
      </template>

      <template v-for="(window) of dock.list">

        <DesktopDockItem v-if="!window.config.favorite" :window="window" />

      </template>

      <slot name="append" />
    </ul>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from 'vuex'

import DesktopDockItem from './DesktopDockItem.vue'

const store = useStore()
const dock = computed(() => {
  return {
    apps: store.getters['core/dock/apps'],
    list: store.getters['core/dock/list'],
  }
})
</script>

<style lang="scss">
.owd-menu {
  position: absolute;
  top: 0;
  left: 24px;
  padding: 0;
  margin: 24px 0;
  user-select: none;
  transition: transform 0.25s ease-in-out;
  color: white;

  &:hover {
    z-index: 12;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  @media (max-width: 560px) {
    top: auto;
    left: 15px;
    right: 15px;
    bottom: 15px;
    margin: 0;
    padding: 0;

    ul {
      float: right;

      li {
        height: 48px;
        line-height: 48px;
        float: left;
        margin: 4px 0 0 0;
      }
    }
  }
}
</style>
