
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll:1,
        dots: '.dots',
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    })
  })



let a = document.getElementById('capacitacion').addEventListener('click', function() {
    document.getElementById('capacitaciondiv').classList.add('cambio')
    document.getElementById('capacitaciondiv').style.display='block'
    document.getElementById('comunidaddiv').classList.remove('cambio')
    document.getElementById('asesoriadiv').classList.remove('cambio')
    document.getElementById('politicadiv').classList.remove('cambio')
    document.getElementById('usbdiv').classList.remove('cambio')
    document.getElementById('santiagodiv').classList.remove('cambio')
    document.getElementById('catolicadiv').classList.remove('cambio')
})
let b = document.getElementById('comunidad').addEventListener('click', function() {
    document.getElementById('comunidaddiv').classList.add('cambio')
    document.getElementById('capacitaciondiv').classList.remove('cambio')
    document.getElementById('asesoriadiv').classList.remove('cambio')
    document.getElementById('politicadiv').classList.remove('cambio')
    document.getElementById('usbdiv').classList.remove('cambio')
    document.getElementById('santiagodiv').classList.remove('cambio')
    document.getElementById('catolicadiv').classList.remove('cambio')
    document.getElementById('capacitaciondiv').style.display='none'
})
let c = document.getElementById('asesoria').addEventListener('click', function(){
    document.getElementById('asesoriadiv').classList.add('cambio')
    document.getElementById('capacitaciondiv').classList.remove('cambio')
    document.getElementById('comunidaddiv').classList.remove('cambio')
    document.getElementById('politicadiv').classList.remove('cambio')
    document.getElementById('usbdiv').classList.remove('cambio')
    document.getElementById('santiagodiv').classList.remove('cambio')
    document.getElementById('catolicadiv').classList.remove('cambio')
    document.getElementById('capacitaciondiv').style.display='none'
})
let d = document.getElementById('politica').addEventListener('click', function() {
    document.getElementById('politicadiv').classList.add('cambio')
    document.getElementById('capacitaciondiv').classList.remove('cambio')
    document.getElementById('comunidaddiv').classList.remove('cambio')
    document.getElementById('asesoriadiv').classList.remove('cambio')
    document.getElementById('usbdiv').classList.remove('cambio')
    document.getElementById('santiagodiv').classList.remove('cambio')
    document.getElementById('catolicadiv').classList.remove('cambio')
    document.getElementById('capacitaciondiv').style.display='none'
})
let e = document.getElementById('usb').addEventListener('click', function(){
    document.getElementById('usbdiv').classList.add('cambio')
    document.getElementById('capacitaciondiv').classList.remove('cambio')
    document.getElementById('comunidaddiv').classList.remove('cambio')
    document.getElementById('asesoriadiv').classList.remove('cambio')
    document.getElementById('politicadiv').classList.remove('cambio')
    document.getElementById('santiagodiv').classList.remove('cambio')
    document.getElementById('catolicadiv').classList.remove('cambio')
    document.getElementById('capacitaciondiv').style.display='none'
})
let f = document.getElementById('santiago').addEventListener('click', function(){
    document.getElementById('santiagodiv').classList.add('cambio')
    document.getElementById('capacitaciondiv').classList.remove('cambio')
    document.getElementById('comunidaddiv').classList.remove('cambio')
    document.getElementById('asesoriadiv').classList.remove('cambio')
    document.getElementById('politicadiv').classList.remove('cambio')
    document.getElementById('usbdiv').classList.remove('cambio')
    document.getElementById('catolicadiv').classList.remove('cambio')
    document.getElementById('capacitaciondiv').style.display='none'
})
let g = document.getElementById('catolica').addEventListener('click',function(){
    document.getElementById('catolicadiv').classList.add('cambio')
    document.getElementById('capacitaciondiv').classList.remove('cambio')
    document.getElementById('comunidaddiv').classList.remove('cambio')
    document.getElementById('asesoriadiv').classList.remove('cambio')
    document.getElementById('politicadiv').classList.remove('cambio')
    document.getElementById('usbdiv').classList.remove('cambio')
    document.getElementById('santiagodiv').classList.remove('cambio')
    document.getElementById('capacitaciondiv').style.display='none'
})




  