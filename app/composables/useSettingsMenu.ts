const enabled = ref(false)

export function useSettingsMenu() {
    const applicationManager = useApplicationManager()


    return {
        enabled,
    }
}