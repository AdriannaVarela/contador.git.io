const color_fondo=document.getElementById('color_fondo')
const numero=document.getElementById('numero')
let cantidad = 10



let tiempo = setInterval(() =>{
 cantidad -= 1
 color_fondo.style.height = `${cantidad}%`
 numero.textContent=cantidad

 if(cantidad ===0)
 {
  clearInterval(tiempo)
  window.alert('Despegue');
 }
},500);

