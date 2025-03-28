const enabled = ref(false)

export function useNotificationsMenu() {
    const applicationManager = useApplicationManager()


    return {
        enabled,
    }
}