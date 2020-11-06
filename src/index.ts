const headerDesktop = document.querySelector('header') as HTMLDivElement
const headerMobile = document.querySelector('header > div') as HTMLDivElement

const btnHeader = document.querySelector('#btn-header') as Element
const header = document.querySelector('header') as Element
const main = document.querySelector('main') as HTMLDivElement

const HeaderButtons = document.querySelectorAll<HTMLSpanElement>('header nav span') 

const sections = {
  home: document.querySelector('.home') as HTMLDivElement,
  about: document.querySelector('.about') as HTMLDivElement,
  matter: document.querySelector('.matter') as HTMLDivElement,
}

type keysSections = 'home' | 'about' | 'matter'

const toggleHeader = () => {
  btnHeader.classList.toggle('close')
  header.classList.toggle('open')
  main.classList.toggle('header-open')
}

const scrollToSection = (sectionName:keysSections ) => {
  const Section = sections[sectionName]

  const headerHeight = innerWidth <= 800
    ? headerMobile.clientHeight
    : headerDesktop.clientHeight

  const positionSection = Section.offsetTop - headerHeight

  scrollTo({
    top: positionSection,
    behavior: 'smooth'
  })

  toggleHeader()
}

HeaderButtons.forEach((button)=>{
  button.addEventListener('click', () => {
    scrollToSection(button.dataset.link as keysSections)
  })
})

btnHeader.addEventListener('click', toggleHeader)
