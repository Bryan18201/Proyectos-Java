
function eliminar(id){
    swal({
  title: "Estas seguro de Eliminar?",
  text: "Una vez borrado no se podra recuperar!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
      $.ajax({
          url:"/eliminar/"+id,
          success: function(res) {
              console.log(res);
          }
      });
    swal("Se ha eliminado la persona", {
      icon: "success",
    }).then((ok) =>{
        location.href="/Listar";
    });
  } else {
    swal("No se ha eliminado la persona!");
  }
});
}
