<script setup>
const workspaces = useWorkspaces()

function toggleDesktopOverview() {
  workspaces.overview.value = !workspaces.overview.value
}
</script>

<template>
  <div class="owd-desktop__system-bar">

  <div class="owd-desktop__system-bar__left">
    <slot name="system-bar-left-prepend" />

    <SystemBarApplications
        class="owd-desktop__system-bar__activities"
        @click="toggleDesktopOverview"
    >

    </SystemBarApplications>
  </div>

      <!--
      <template v-if="desktopModules.list.SystemBar && desktopModules.list.SystemBar.left">
        <template v-for="(desktopModule, i) of desktopModules.list.SystemBar.left" :key="i">
          <component
              :is="desktopModule.components.menu"
              :config="desktopModule.config"
              @click="(e) => openSystemBarDesktopModule(e, desktopModule)"
          />
          <component
              v-if="desktopModule.config.opened"
              :is="desktopModule.components.content"
              :arrow-position="desktopModule.config.arrowPosition"
              @close="closeSystemBarDesktopModule(desktopModule)"
          />
        </template>
      </template>

      <slot name="system-bar-left-append" />
    </div>

      <div class="owd-desktop__system-bar__middle">
        <template v-if="desktopModules.list.SystemBar && desktopModules.list.SystemBar.center">
          <template v-for="(desktopModule, i) of desktopModules.list.SystemBar.center" :key="i">
            <component
                :is="desktopModule.components.menu"
                :config="desktopModule.config"
                @click="(e) => openSystemBarDesktopModule(e, desktopModule)"
            />
            <component
                :is="desktopModule.components.content"
                :opened="desktopModule.config.opened"
                :arrow-position="desktopModule.config.arrowPosition"
                @close="closeSystemBarDesktopModule(desktopModule)"
            />
          </template>
        </template>
      </div>

      <div class="owd-desktop__system-bar__right">
        <slot name="system-bar-right-prepend" />

        <template v-if="desktopModules.list.SystemBar && desktopModules.list.SystemBar.right">
          <template v-for="(desktopModule, i) of desktopModules.list.SystemBar.right" :key="i">
            <component
                :is="desktopModule.components.menu"
                :config="desktopModule.config"
                @click="(e) => openSystemBarDesktopModule(e, desktopModule)"
            />
            <component
                v-if="desktopModule.config.opened"
                :is="desktopModule.components.content"
                :config="desktopModule.config"
                :arrow-position="desktopModule.config.arrowPosition"
                @close="closeSystemBarDesktopModule(desktopModule)"
            />
          </template>
        </template>

        <slot name="system-bar-right-append" />
      </div>
      -->

  </div>
</template>

<style scoped lang="scss">
.owd-desktop__system-bar {
  position: relative;
  height: var(--owd-gnome-system-bar-height);
  padding: var(--owd-gnome-system-bar-padding);
  background: black;
  color: white;
  box-sizing: border-box;

  &__middle {
    text-align: center;
  }

  &__right {
    text-align: right;

    a {
      font-size: 11px;

      .v-icon {
        display: inline-block;
        margin-top: -4px;
      }
    }
  }

  &__activities {
    @media(max-width: 800px) {
      display: none;
    }
  }
}
</style>