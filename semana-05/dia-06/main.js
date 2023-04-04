const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "btn-prueba":
        Swal.fire("Esta es la primera prueba");
        break;
      case "btn-pregunta":
        Swal.fire("Pregunta", "esta es una pregunta", "question");
        break;
      case "btn-error":
        Swal.fire("Error", "este es un error", "error");
        break;
      case "btn-peligro":
        Swal.fire("Cuidado", "esta es una alert de peligro", "warning");
        break;
      case "btn-info":
        Swal.fire("Info", "esta es una alerta info", "info");
        break;
      case "btn-satisfactorio":
        Swal.fire("Cuidado", "esta es una alerta satisfactoria", "success");
        break;
      case "btn-confirmacion":
        Swal.fire({
          title: "Confirmación",
          text: "alerta de confirmación",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Continuar!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Continuar", "continuaste!!.", "success");
          }
        });
        break;
      case "alert-img":
        Swal.fire({
          title: "Prueba imagen!",
          imageUrl: "./cover.jpg",
        });
        break;
    }
  });
});

// este evento solo para uns de librerias externas
const btnAlertaCustom = document.querySelector('#btn-alerta-custom');
btnAlertaCustom.onclick = function(event){
    Swal.fire('prueba')
}

const btnAlertaInputs = document.querySelector('#btn-alerta-inputs');
btnAlertaInputs.onclick = function(event){
    Swal.fire( {title: 'Ingrese su nombre',
    input: 'text'});
}