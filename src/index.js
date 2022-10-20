import VueBottomSheet from './VueBottomSheet.vue'

export default {
  install: (Vue, settings) => {
    if (settings) {
      if (settings.name && typeof settings.name === 'string') {
        VueBottomSheet.name = settings.name
      }

      if (settings.options && typeof settings.options === 'object') {
        VueBottomSheet.props.options.default = () => {
          return settings.options
        }
      }

      if (settings.tag && typeof settings.tag === 'string') {
        VueBottomSheet.props.tag.default = settings.tag
      }

      if (settings.watchOptions && typeof settings.watchOptions === 'boolean') {
        VueBottomSheet.props.watchOptions = settings.watchOptions
      }
    }

    Vue.component(
      VueBottomSheet.name,
      VueBottomSheet
    )
  }
}

export {
  VueBottomSheet
}
