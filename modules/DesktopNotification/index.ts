import DesktopNotificationMenu from './components/DesktopNotificationMenu.vue'
import DesktopNotificationMenuContent from './components/DesktopNotificationMenuContent.vue'

export default {
  config: {
    name: 'DesktopNotification',
    area: 'SystemBar',
    position: 'center',
    opened: false
  },
  components: {
    menu: DesktopNotificationMenu,
    content: DesktopNotificationMenuContent
  }
}