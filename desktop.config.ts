// desktop component
import Desktop from './components/Desktop.vue'
import WindowApp from './components/Window/WindowApp.vue'
import WindowAppNav from './components/Window/WindowAppNav.vue'
import WindowAppNavButton from './components/Window/WindowAppNavButton.vue'

// desktop modules
import DesktopLauncher from "./modules/DesktopLauncher";
import DesktopNotification from "./modules/DesktopNotification";
import DesktopStatus from "./modules/DesktopStatus";

// plugins
import Vuetify from "owd-vuetify-plugin/src"

// locales
import locales from "./locales"

export default {
    name: 'gnome',
    compatibility: '2.0.0-beta.4',

    variants: {
        'adwaita-dark': 'assets/styles/variants/adwaita-dark/variables.scss',
        'adwaita-light': 'assets/styles/variants/adwaita-light/variables.scss'
    },

    options: {
        Logo: {
            enabled: true
        },
        Dock: {
            enabled: true
        },
        SystemBar: {
            enabled: true,
            position: 'top',
            icons: {
                'battery': 'mdi mdi-battery',
                'battery-0': 'mdi mdi-battery-alert-variant-outline',
                'battery-20': 'mdi mdi-battery-20',
                'battery-40': 'mdi mdi-battery-40',
                'battery-60': 'mdi mdi-battery-60',
                'battery-80': 'mdi mdi-battery-80',
                'battery-100': 'mdi mdi-battery'
            }
        },
        ApplicationMenu: {
            categoryAppsTriggerType: 'mouseover'
        },
        NotificationMenu: {
            menu: {
                dateFormat: 'MMM D',
                timeFormat: 'HH:mm'
            },
            calendar: {
                header: {
                    dayOfWeekFormat: 'dddd',
                    dateFormat: 'MMMM D YYYY'
                }
            },
            floatingNotification: {
                max: 2,
                duration: 8000
            }
        },


        Window: {
            icons: {
                minimize: 'mdi mdi-window-minimize',
                maximize: 'mdi mdi-window-maximize',
                fullscreen: 'mdi mdi-fullscreen',
                close: 'mdi mdi-window-close',
                external: 'mdi mdi-open-in-new'
            },
        },
    },

    locales,

    components: {
        'Desktop': Desktop,
        'WindowApp': WindowApp,
        'WindowAppNav': WindowAppNav,
        'WindowAppNavButton': WindowAppNavButton
    },

    modules: [
        DesktopLauncher,
        DesktopNotification,
        DesktopStatus
    ],

    plugins: [
        Vuetify
    ],
}