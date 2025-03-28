<script setup lang="ts">
const applicationManager = useApplicationManager()
const applicationMenu = useApplicationMenu()

function onApplicationClick(applicationId: string) {
  applicationManager.openApp(applicationId)
}
</script>

<template>
  <List>
    <SystemBarApplicationsMenuApplicationItem
        v-for="application of applicationMenu.appsByCategoryActive.value"
        :application="application"
        @click="onApplicationClick(application.config.id)"
    />
  </List>
</template>