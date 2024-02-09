import '@github/include-fragment-element'
import './alpha/action_bar_element'
import './alpha/dropdown'
import './anchored_position'
import './dialog_helper'
import './focus_group'
import './scrollable_region'
import './alpha/image_crop'
import './alpha/modal_dialog'
import './beta/nav_list'
import './beta/nav_list_group_element'
import './alpha/segmented_control'
import './alpha/toggle_switch'
import './alpha/tool_tip'
import './alpha/x_banner'
import './beta/auto_complete/auto_complete'
import './beta/clipboard_copy'
import './beta/relative_time'
import './alpha/tab_container'
import '../../../lib/primer/forms/primer_multi_input'
import '../../../lib/primer/forms/primer_text_field'
import '../../../lib/primer/forms/toggle_switch_input'
import './alpha/action_menu/action_menu_element'

type Primer = {
  featureFlags: FeatureFlags
}

type FeatureFlags = {
  // eslint-disable-next-line no-unused-vars
  isEnabled: (flagName: string) => boolean
}

export const Primer: Primer = {
  featureFlags: {
    isEnabled: (): boolean => {
      return false
    },
  },
}
