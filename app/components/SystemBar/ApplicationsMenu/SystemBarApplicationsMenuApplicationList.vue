<script setup lang="ts">
const applicationManager = useApplicationManager()
const applicationMenu = useApplicationMenu()

function onAppEntryClick(appEntry: ApplicationEntryWithInherited) {
  applicationManager.execAppCommand(
      appEntry.application.id,
      appEntry.command,
  )
}
</script>

<template>
  <List>
    <SystemBarApplicationsMenuApplicationItem
        v-for="entry of applicationMenu.appEntriesByActiveCategory.value"
        :entry="entry"
        @click="onAppEntryClick(entry)"
    />
  </List>
</template>