const enabled = ref(false)
const categoryActive = ref()

export function useApplicationMenu() {
    const applicationManager = useApplicationManager()

    const categories = computed(() => {
        return getSortedCategories(applicationManager.apps);
    })

    const appsByCategoryActive = computed(() => {
        if (!categoryActive.value) {
            return []
        }

        return applicationManager.appsByCategory[categoryActive.value]
    })

    return {
        enabled,
        categories,
        categoryActive,
        appsByCategoryActive,
    }
}