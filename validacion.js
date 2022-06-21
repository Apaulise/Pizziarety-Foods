window.addEventListener('load',()=>{
    const form = document.querySelector('#formulario')
    const names = document.getElementById('names')
    const email = document.getElementById('email')
    const mensaje = document.getElementById('mensaje')
    
    form.addEventListener('submit', (e) =>{
        
        e.preventDefault( )
        validaCampos()
    }) 


const validaCampos = () => {
    //capturar valores ingresados por el usario
    const namesValor = names.value.trim()
    const emailValor = email.value.trim()
    const mensajeValor = mensaje.value.trim()

    //Validando Nombre //
    if(namesValor === ''){
        console.log('CAMPO VACIO')
        validaFalla(names,'Campo vacio')
     }else{
        console.log(namesValor)
        validaOk(names)
     }
    //  Validando Email
     if(!emailValor){
        validaFalla(email, 'Campo vacio')
     }else if(validaEmail(emailValor)){
        validaFalla(email , 'El email no es válido')
     }else{
        validaOk(email)
     }

     if(!mensajeValor){
        validaFalla(mensaje,'Campo vacio' )
     }else{
        validaOk(mensaje)
     }



}
const validaFalla = (input, msje) =>{
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'

}
const validaOk = (input,msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
    
} 
const validaEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email);
}

})

