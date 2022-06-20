const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io()

socket.on('connect', () => {
  console.log('conectado al servidor...')

  lblOffline.style.display = 'none'
  lblOnline.style.display = ''
})

socket.on('disconnect', () => {
  console.log('desconectado del servidor...')

  lblOnline.style.display = 'none'
  lblOffline.style.display = ''
})

btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value
  const payload = {
    mensaje,
    id: 'abc',
    fecha: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
  }

  socket.emit('enviar-mensaje', payload, id => {
    console.log('recibo "id" desde el servidor...', id)
  })
})

socket.on('enviar-mensaje', payload => {
  console.log(payload)
})
