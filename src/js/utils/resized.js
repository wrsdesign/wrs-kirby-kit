import getCurrentMediaQuery from './getCurrentMediaQuery'

var resized = () => {
  var mediaQuery = getCurrentMediaQuery()

  var handleResize = () => {
    var newMediaQuery = getCurrentMediaQuery()

    if (newMediaQuery !== mediaQuery) {
      window.dispatchEvent(new CustomEvent('breakpoints:change'))
      mediaQuery = newMediaQuery
    }

    var vh = document.documentElement.clientHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  window.addEventListener('resize', handleResize)
  handleResize()
}

export default resized
