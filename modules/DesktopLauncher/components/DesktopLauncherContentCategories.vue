<template>
  <div
      ref="categoriesMenuList"
      class="owd-desktop__application-menu__categories"
      @keyup.esc="$emit('menu-close')"
      @keyup.up="selectPrevCategory"
      @keyup.down="selectNextCategory"
      @keyup.left="setNavigationKeysSection('categories')"
      @keyup.right="setNavigationKeysSection('apps')"
  >
    <ul>
      <li
          v-for="(category) in categories"
          :class="{selected: categorySelected === category && allowKeysNavigation}"
          :key="category"
      >
        <button
            @mouseover="(e) => categoryMouseOver(e, category)"
            v-text="$t(`DesktopApplicationCategories.${category}`)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref, inject, nextTick, watch} from "vue";

const desktopOptions = inject('desktopOptions')

const props = defineProps({
  categories: {
    type: Object,
    default: {}
  },
  categorySelected: {
    type: String,
    default: ''
  },
  allowKeysNavigation: Boolean
})

const emit = defineEmits([
  'menu-close',
  'select',
  'set-navigation-keys-section'
])

// element ref
const categoriesMenuList = ref(null)

// initial focus on buttons to enable key navigation
watch(() => props.allowKeysNavigation, (active) => {
  if (active && props.categories.length > 0) {
    if (props.categorySelected === '') {
      categoriesMenuList.value.querySelector('ul > li:first-child button').focus()
    } else {
      nextTick(() => categoriesMenuList.value.querySelector('ul > li.selected button').focus())
    }
  }
})

function selectPrevCategory() {
  if (!props.allowKeysNavigation) return false

  const currentIndex = props.categories.indexOf(props.categorySelected)

  if (currentIndex - 1 > -1) {
    emit('select', props.categories[currentIndex - 1])
  }
}

function selectNextCategory() {
  if (!props.allowKeysNavigation) return false

  const currentIndex = props.categories.indexOf(props.categorySelected)

  if (currentIndex + 1 < props.categories.length) {
    emit('select', props.categories[currentIndex + 1])
  }
}

function categoryMouseOver(e: Event, category: string) {
  // enable key direction
  e.target.focus()

  // set key navigations on categories
  emit('set-navigation-keys-section', 'categories')
  emit('select', category)
}

// key navigation
function setNavigationKeysSection(value: string) {
  if (props.allowKeysNavigation && value === 'categories') {
    return emit('menu-close')
  }

  emit('set-navigation-keys-section', value)
}
</script>

<style scoped lang="scss">
.owd-desktop__application-menu__categories {
  padding: 16px 0;
  overflow-y: auto;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      width: 100%;

      button {
        display: block;
        width: 100%;
        text-align: left;
        padding-left: 20px;
      }

      &.selected button {
        background: var(--owd-window-item-background-hover);
      }
    }
  }

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 0;
    background: transparent;
  }
}
</style>