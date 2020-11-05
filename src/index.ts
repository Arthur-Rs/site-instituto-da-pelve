//#region Variables

const btnHeader = document.querySelector('#btn-header') as Element
const header = document.querySelector('header') as Element
const main = document.querySelector('main') as HTMLDivElement

const HeaderButtons = document.querySelectorAll<HTMLSpanElement>('header nav span') 

const Sections = {
  home: document.querySelector('.home') as HTMLDivElement,
  about: document.querySelector('.about') as HTMLDivElement,
  matter: document.querySelector('.matter') as HTMLDivElement,
}

type keysSections = 'home' | 'about' | 'matter'

const offsetHeight = Sections.home.offsetTop

//#endregion

//#region Functions

const toggleHeader = () => {
  btnHeader.classList.toggle('close')
  header.classList.toggle('open')
  main.classList.toggle('header-open')
}

const scrollToSection = (sectionName:keysSections ) => {
  const Section = Sections[sectionName]
  const positionSection = Section.offsetTop - offsetHeight

  scrollTo({
    top: positionSection,
    behavior: 'smooth'

  })

  toggleHeader()
}

//#endregion

//#region Events

HeaderButtons.forEach((button)=>{
  button.addEventListener('click', () => {
    scrollToSection(button.dataset.link as keysSections)
  })
})

btnHeader.addEventListener('click', toggleHeader)

//#endregion