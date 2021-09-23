let navItem = document.querySelectorAll('#nav-item');



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems,{
    edge: 'left',
    draggable: true,
    inDuration: 350,
    outDuration: 350,
    onOpenStart: function(){
      console.log('open'); //Abre el sidebar
    },
    onCloseStart: function(){
      console.log('close'); //Cierra el sidebar
    },
    onOpenEnd: function(){
      console.log('openend'); //termina la funcion de abrir el sidebar
    },
    onCloseEnd: function(){
      console.log('closeend'); //Termina la funcion de cerrar el sidebar
    },
    preventScrolling: false,
    preventScrollingByTouch: false,
    preventScrollingByWheel: true,

  });
});


  document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
        duration:100,
        dist: -100,
        indicators: true,
        padding:5,
        noWrap: false,
        numVisible: 15,
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems,{
        enterDelay: 500,
        exitDelay:100,
        margin:0,
        outDuration:500,
    });
  });