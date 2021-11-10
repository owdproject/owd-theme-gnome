import DesktopStatusMenu from './components/DesktopStatusMenu.vue'
import DesktopStatusMenuContent from './components/DesktopStatusMenuContent.vue'

export default {
  config: {
    name: 'DesktopStatus',
    area: 'SystemBar',
    position: 'right',
    opened: false
  },
  components: {
    menu: DesktopStatusMenu,
    content: DesktopStatusMenuContent
  }
}