import DesktopNotificationTime from './components/DesktopNotificationMenu.vue'
import DesktopNotificationContent from './components/DesktopNotificationContent.vue'

export default {
  config: {
    name: 'DesktopNotification',
    area: 'SystemBar',
    position: 'center',
    opened: false
  },
  components: {
    menu: DesktopNotificationTime,
    content: DesktopNotificationContent
  }
}