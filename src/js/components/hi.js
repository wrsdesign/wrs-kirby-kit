import { isBreakpoint, getCurrentMediaQuery } from '@utils'

window.App.hi = () => {
  return {
    init() {},
    toggle() {
      if(isBreakpoint('sm-')) {
        console.log('ENABLED')
      } else {
        console.log('DISABLED')
      }
    }
  }
}
