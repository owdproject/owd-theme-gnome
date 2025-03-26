<script setup lang="ts">
const applicationManager = useApplicationManager()
const systemBar = useSystemBar()

function onApplicationClick(applicationId: string) {
  applicationManager.openApp(applicationId)
}
</script>

<template>
  <SystemBarButton @click="systemBar.applicationMenu.enabled = !systemBar.applicationMenu.enabled">
    {{ $t('systemBar.applications') }}

    <Sheet
        v-if="systemBar.applicationMenu.enabled"
        class="owd-system-bar__applications-menu"
    >
      <List>
        <SystemBarMenuItem
            v-for="[applicationId, application] of applicationManager.apps"
            :application="application"
            @click="onApplicationClick(applicationId)"
        />
      </List>
    </Sheet>
  </SystemBarButton>
</template>

<style scoped lang="scss">
.owd-system-bar__button {
  .owd-system-bar__applications-menu {
    position: absolute;
    top: 40px;
    left: 8px;
    padding: 4px;
    height: 440px;
    max-height: 80dvh;
    width: 320px;
    flex-direction: row;
  }
}

.owd-system-bar__menu {
  &__title {
    background: var(--owd-elevation-inactive);
    width: 36px;
  }

  &__list {
    min-width: 400px;
  }
}
</style>