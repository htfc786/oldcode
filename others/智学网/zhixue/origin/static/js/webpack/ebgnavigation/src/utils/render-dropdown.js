import { renderNavbarDom, traverseDomArr } from './utils'
const renderDropdown = (element, list = [], params) => {
  element.innerHTML = ''
  element.insertAdjacentHTML('beforeend', renderNavbarDom(list, params))
  traverseDomArr(element)
}
export {
  renderDropdown
}
