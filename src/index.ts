const btnHeader = document.querySelector('#btn-header') as Element
const header = document.querySelector('header') as Element
const main = document.querySelector('main') as HTMLDivElement




btnHeader.addEventListener('click', () => {
  btnHeader.classList.toggle('close')
  header.classList.toggle('open')
  main.classList.toggle('header-open')
})