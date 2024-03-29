<template>
  <DesktopSystemBarMenuContent
      class="owd-desktop__application-menu__container"
      v-click-outside="menuClose"
  >

    <DesktopLauncherMenuContentCategories
      :allow-keys-navigation="navigationKeysSection === 'categories'"
      :categories="launcherCategories"
      :category-selected="categorySelected"
      @select="(category) => categorySelected = category"
      @setNavigationKeysSection="(value) => navigationKeysSection = value"
      @menuClose="menuClose"
    />

    <DesktopLauncherMenuContentApps
      :allow-keys-navigation="navigationKeysSection === 'apps'"
      :apps="categoryApps"
      @setNavigationKeysSection="(value) => navigationKeysSection = value"
      @menuClose="menuClose"
    />

  </DesktopSystemBarMenuContent>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import {useStore} from "vuex";
import DesktopSystemBarMenuContent from '../../../components/DesktopSystemBar/components/DesktopSystemBarMenuContent.vue'
import DesktopLauncherMenuContentCategories from './DesktopLauncherContentCategories.vue'
import DesktopLauncherMenuContentApps from './DesktopLauncherContentApps.vue'

const emit = defineEmits([
  'close'
])

const store = useStore()

const categorySelected = ref('')

const launcherCategories = computed(() => store.getters['core/launcher/categories'])
const launcherItems = computed(() => store.getters['core/launcher/items'])

// category > apps
const categoryApps = computed(() => {
  if (!categorySelected.value) return []

  return launcherItems.value[categorySelected.value].sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  })
})

// key navigation section
const navigationKeysSection = ref('');

// set default key navigation section on mounted
// (just to trigger the watcher in ApplicationMenuContentCategories.vue)
onMounted(() => navigationKeysSection.value = 'categories')

function selectNavigationKeysSection(value: string) {
  navigationKeysSection.value = value
}

function menuClose() {
  categorySelected.value = ''
  emit('close')
}
</script>

<style scoped lang="scss">
.owd-desktop__application-menu {
  &__container {
    display: grid;
    width: 410px;
    max-width: calc(100% - 32px);
    height: 500px;
    max-height: 60vh;
    grid-template-columns: 40% 60%;
    line-height: 32px;
    font-size: 13px;
    left: 16px;

    @media(max-height: 400px) {
      max-height: calc(100vh - 60px);
    }
  }
}
</style>