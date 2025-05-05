import {ref, computed} from "vue"
import {useApplicationManager} from "@owdproject/core/runtime/composables/useApplicationManager"
import {getSortedCategories} from "../utils/utilsApplications"

const enabled = ref(false)
const categoryActive = ref()

export function useApplicationMenu() {
    const applicationManager = useApplicationManager()
    const appEntries = useAppEntries()

    const categories = computed(() => {
        return getSortedCategories(applicationManager.apps);
    })

    const appEntriesByActiveCategory = computed(() => {
        if (!categoryActive.value) {
            return []
        }

        return appEntries.sortedAppEntries(
            'title',
            entry => entry.category === categoryActive.value
        ).value
    })

    return {
        enabled,
        categories,
        categoryActive,
        appEntriesByActiveCategory,
    }
}