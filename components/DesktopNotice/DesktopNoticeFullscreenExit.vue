<template>
  <transition name="fade-transition">
    <div
      class="owd-notice-fullscreen-exit"
      v-show="visible"
    >
      Press <kbd>ESC</kbd> to exit full screen
    </div>
  </transition>
</template>

<script setup>
import {ref, onBeforeMount, onMounted, onUnmounted} from 'vue'
import {useStore} from "vuex";

const store = useStore()

const visible = ref(false)
const timeout = ref(0)

function handleWindowInstanceFullscreen(e) {
  if (e.keyCode === 27) {
    store.dispatch('core/window/windowUnfullscreenAll')
    store.dispatch('core/window/windowUnmaximizeAll')
  }
}

// detect window instance fullscreen/maximize event
onBeforeMount(() => {
  store.subscribe((mutation) => {
    if (mutation.type === 'core/windowFullscreen/SET_FULLSCREEN_MODE') {
      if (typeof mutation.payload === 'boolean') {
        if (mutation.payload) {
          clearTimeout(timeout.value)
          visible.value = true
          timeout.value = setTimeout(() => visible.value = false, 3000)
        } else {
          visible.value = false
        }
      }
    }
  })
})

// when press ESC and a window is in full-screen mode
onMounted(() => window.addEventListener('keydown', handleWindowInstanceFullscreen))
onUnmounted(() => window.removeEventListener('keydown', handleWindowInstanceFullscreen))
</script>

<style scoped lang="scss">
.owd-notice-fullscreen-exit {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 90vw;
  width: 330px;
  min-height: 50px;
  line-height: 50px;
  text-transform: inherit;
  font-size: 16px;
  text-align: center;
  z-index: 999;
  background: rgb(49 50 52 / 77%) !important;
  color: white !important;

  kbd {
    border: 1px solid white;
    padding: 7px 4px;
    margin: 0 8px;
    border-radius: 2px;
  }
}
</style>