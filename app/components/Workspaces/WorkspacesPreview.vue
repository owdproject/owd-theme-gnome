<script setup lang="ts">
import html2canvas from "html2canvas";

const workspaceStore = useWorkspaceStore()
const previewEnabled = ref(false)

async function generateDesktopWorkspacePreview(workspaceId: string) {
  const workspace = document.querySelector(`.owd-desktop__workspace-inner[data-workspace-id="${workspaceId}"]`);
  const workspacePreview = document.querySelector(`.owd-desktop__workspace-previews__item[data-workspace-id="${workspaceId}"]`);

  if (workspacePreview) {
    await html2canvas(workspace, {
      allowTaint: true,
    }).then(function (canvas) {
      workspacePreview.innerHTML = ''
      workspacePreview.appendChild(canvas);
    })
  }
}

function onWorkspacePreviewClick(workspaceId: string) {
  if (workspaceStore.active !== workspaceId) {
    workspaceStore.setWorkspace(workspaceId)
  } else {
    workspaceStore.setOverview(false)
  }
}

watch(() => workspaceStore.overview, (val) => {
  if (!val) {
    previewEnabled.value = false
  } else {
    setTimeout(() => previewEnabled.value = true, 200)
  }
})

onMounted(async () => {
  setTimeout(async () => {
    // generate all workspace preview

    for (const workspaceId of workspaceStore.list) {
      await generateDesktopWorkspacePreview(workspaceId)
    }
  }, 500)
})
</script>

<template>
  <div
      :class="[
      'owd-desktop__workspace-previews',
      {'owd-desktop__workspace-previews--enabled': previewEnabled}
    ]"
  >
    <div class="owd-desktop__workspace-previews__container">
      <div
          v-for="(workspaceId) of workspaceStore.list"
          :key="workspaceId"
          :data-workspace-id="workspaceId"
          :class="[
            'owd-desktop__workspace-previews__item',
            {'owd-desktop__workspace-previews__item--active': workspaceId === workspaceStore.active}
        ]"
          @click="onWorkspacePreviewClick(workspaceId)"
      />
    </div>

  </div>
</template>

<style lang="scss">
.owd-desktop__workspace-previews {
  display: grid;
  align-content: center;
  text-align: center;
  height: 100%;

  &__container {
    display: inline-block;
    margin: 0 auto;
    height: 100%;
  }

  @media(max-height: 700px) {
    //display: none;
  }

  &__item {
    display: inline-block;
    width: 80px;
    margin: 0 3px;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;

    &--active {
      box-shadow: 0 0 0 3px rgb(var(--owd-gnome-primary-color));
    }

    canvas {
      width: 88px !important;
      max-height: 44px;
      pointer-events: none;
    }
  }
}

.owd-desktop__workspace-previews--enabled {
  z-index: 9;
}
</style>