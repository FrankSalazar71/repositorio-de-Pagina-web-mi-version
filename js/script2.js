
      let textoEnMovimiento = "IEP-Alfonso Ugarte";
      let direccionDerecha = true;
      function animarTitulo() {
        document.title = textoEnMovimiento + document.title;
        if (direccionDerecha) {
          textoEnMovimiento = textoEnMovimiento.substring(1) + textoEnMovimiento[0];
        } else {
          textoEnMovimiento = textoEnMovimiento[textoEnMovimiento.length - 1] + textoEnMovimiento.substring(0, textoEnMovimiento.length - 1);
        }
        setTimeout(animarTitulo, 200);
      }
      animarTitulo();



      function enableDarKMode(){
        let main_body = document.body;
        main_body.classList.toggle("dark-mode");
      }

      
  