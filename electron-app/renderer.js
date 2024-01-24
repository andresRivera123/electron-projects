const $ = selector => document.querySelector(selector)
const $count = $('#count')
const $button = $('button')

let count = 0
$button.addEventListener('click', () => {
  count += 1
  $count.innerHTML = count
})

window.electronAPI.onUpdateTheme((event, theme) => {
  const root = document.documentElement
  console.log({ theme })
  root.style.setProperty('--scheme', theme)
})
