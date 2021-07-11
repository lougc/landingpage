

// MENU RESPONSIVE

const btnMenu = document.getElementById('icon-menu')
const menuToggle = document.getElementById('menu')
const textHeader = document.querySelector('.header__text')

btnMenu.addEventListener('click', () =>{
   menuToggle.classList.toggle('icon-menu--mostrar')
   textHeader.classList.toggle('header__text--ocultar')
})


// Boton GO UP

const goUpButton = document.getElementById('go-up')


onscroll = () => {
   if(document.documentElement.scrollTop > 100) {
      goUpButton.classList.add('container-go-up__button--mostrar')
   } else {
      goUpButton.classList.remove('container-go-up__button--mostrar')
   }
}

goUpButton.addEventListener('click', ()=>{
   scrollTo({
      top: 0,
      behavior: 'smooth'
   })
})

// VENTANAS MODAL

const btnModal1 = document.getElementById('btnModal-1'),
      btnModal2 = document.getElementById('btnModal-2'),
      btnModal3 = document.getElementById('btnModal-3'),
      btnModal4 = document.getElementById('btnModal-4'),
      btnModal5 = document.getElementById('btnModal-5'),
      btnModal6 = document.getElementById('btnModal-6'),
      btnModal7 = document.getElementById('btnModal-7'),
      btnModal8 = document.getElementById('btnModal-8')

const ventanaModal1 = document.getElementById('modal-1'),
      ventanaModal2 = document.getElementById('modal-2'),
      ventanaModal3 = document.getElementById('modal-3'),
      ventanaModal4 = document.getElementById('modal-4'),
      ventanaModal5 = document.getElementById('modal-5'),
      ventanaModal6 = document.getElementById('modal-6'),
      ventanaModal7 = document.getElementById('modal-7'),
      ventanaModal8 = document.getElementById('modal-8')

const modalContainer = document.querySelectorAll('.modal-container')
const btnCerrar = document.querySelectorAll('.close')

btnModal1.addEventListener('click', () => showModal(modalContainer[0], ventanaModal1, btnCerrar[0]))

btnModal2.addEventListener('click', () => showModal(modalContainer[1], ventanaModal2, btnCerrar[1]))

btnModal3.addEventListener('click', () => showModal(modalContainer[2], ventanaModal3, btnCerrar[2]))

btnModal4.addEventListener('click', () => showModal(modalContainer[3], ventanaModal4, btnCerrar[3]))

btnModal5.addEventListener('click', () => showModal(modalContainer[4], ventanaModal5, btnCerrar[4]))

btnModal6.addEventListener('click', () => showModal(modalContainer[5], ventanaModal6, btnCerrar[5]))

btnModal7.addEventListener('click', () => showModal(modalContainer[6], ventanaModal7, btnCerrar[6]))

btnModal8.addEventListener('click', () => showModal(modalContainer[7], ventanaModal8, btnCerrar[7]))


const showModal = (container, modal, cerrar) =>{
   container.style.opacity = '1'
   container.style.visibility = 'visible'
   modal.classList.toggle('modal-close')

   cerrar.addEventListener('click', () => {
      modal.classList.toggle('modal-close')
      setTimeout(()=>{
         container.style.opacity = '0'
         container.style.visibility = 'hidden'
      }, 1000)
   })

   window.addEventListener('click', (e)=>{
      if(e.target == container){
         modal.classList.toggle('modal-close')
            setTimeout(()=>{
               container.style.opacity = '0'
               container.style.visibility = 'hidden'
            }, 1000)
      }
   })

}


// SELECCION CATEGORIAS PRODUCTOS


categorias.addEventListener('change', ()=>{

   const categorias = document.getElementById('categorias').value
   const facial = document.getElementById('categoria-facial')
   const corporal = document.getElementById('categoria-corporal')
   const aromaterapia = document.getElementById('categoria-aromaterapia')

      if(categorias == 'facial') {
         facial.classList.add('productos-galeria--activo')
      } else {
         facial.classList.remove('productos-galeria--activo')
      }
      if(categorias == 'corporal') {
         corporal.classList.add('productos-galeria--activo')
      } else {
         corporal.classList.remove('productos-galeria--activo')
      }
      if(categorias == 'aromaterapia') {
         aromaterapia.classList.add('productos-galeria--activo')
      } else {
         aromaterapia.classList.remove('productos-galeria--activo')
      }
   
})

// VALIDACIÓN FORMULARIO

const form = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')

const regExp = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
   apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}

const campos = {
	nombre: false,
	apellido: false,
	email: false,
	telefono: false
}

const validarFormulario = (e) => {
   switch (e.target.name) {
         case "nombre":
           validarCampo(regExp.nombre, e.target, 'nombre')
         break
         case "apellido":
            validarCampo(regExp.apellido, e.target, 'apellido')
         break
         case "email":
            validarCampo(regExp.email, e.target, 'email')
         break
         case "telefono":
            validarCampo(regExp.telefono, e.target, 'telefono')
         break
   }
}

const validarCampo = (expresion, input, campo) => {
   if(expresion.test(input.value)){
      document.getElementById(`form__${campo}`).classList.remove('form__field--error')
      document.getElementById(`form__${campo}`).classList.add('form__field--correcto')
      document.querySelector(`#form__${campo} .form__field-mensaje`).classList.remove('form__field-mensaje-activo')
      campos[campo] = true
   } else {
      document.getElementById(`form__${campo}`).classList.add('form__field--error')
      document.getElementById(`form__${campo}`).classList.remove('form__field--correcto')
      document.querySelector(`#form__${campo} .form__field-mensaje`).classList.add('form__field-mensaje-activo')
      campos[campo] = false
   }
}

inputs.forEach((input) =>{
   input.addEventListener('keyup', validarFormulario)
   input.addEventListener('blur', validarFormulario)
})

form.addEventListener('submit', (e) =>{
   e.preventDefault()

   if(campos.nombre && campos.apellido && campos.email && campos.telefono){
      form.reset()

         document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo')
         setTimeout(()=>{
            document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo')
         }, 3000)

         document.querySelectorAll('.form__field--correcto').forEach((borderGreen)=>{
            borderGreen.classList.remove('form__field--correcto')
         })
   } else {
      document.getElementById('form__mensaje-error').classList.add('form__mensaje-error-activo')
      setTimeout(()=>{
         document.getElementById('form__mensaje-error').classList.remove('form__mensaje-error-activo')
      }, 3000)
   }

})