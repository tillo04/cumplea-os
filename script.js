const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

// Obtener el mensaje personalizado de los parámetros de la URL
if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
  mainMessageElement.style.display = 'none' // Ocultar el mensaje inicialmente
}

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true

// Evento para abrir el sobre
btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const containerLetterElement = document.querySelector('.container-letter')
  const containerMessageElement = document.querySelector('.container-message')
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    containerLetterElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')
    paperElement.style.background = getComputedStyle(coverElement).background // Establecer el mismo fondo que el sobre

    // Mover todo el sobre hacia la izquierda
    containerLetterElement.style.transform = 'translateX(-200px)'

    // Mover el mensaje hacia la derecha
    containerMessageElement.style.transform = 'translateX(450px)'

    // Mostrar el mensaje con animación
    const mainMessageElement = document.querySelector('#mainMessage')
    mainMessageElement.style.display = 'block'
    mainMessageElement.classList.add('slide-up-from-envelope')

    // Animación del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})

// Evento para cerrar el sobre
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const containerLetterElement = document.querySelector('.container-letter')
  const containerMessageElement = document.querySelector('.container-message')
  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    containerLetterElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')
    containerLetterElement.style.transform = 'translateX(0)' // Restablecer la posición del sobre
    containerMessageElement.style.transform = 'translateX(0)' // Restablecer la posición del mensaje

    // Ocultar el mensaje
    const mainMessageElement = document.querySelector('#mainMessage')
    mainMessageElement.style.display = 'none'
    mainMessageElement.classList.remove('slide-up-from-envelope')

    // Animación del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})