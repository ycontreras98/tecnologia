$(document).ready(function() {

    //ocultar el error para que solo se muestre cuando hay error
    $("#error").hide();
    //validar el formulario al enviar los datos
    $("#formulario").submit(function() {
        var mensaje = "";
        if ($("#nombre").val().trim().length == 0) {
            mensaje = "El campo nombre está en blanco";
        }
        if ($("#correo").val().trim().length == 0) {
            mensaje = "El campo email está en blanco";
        }
        if ($("#correo").val().trim().length == 0) {
            mensaje = "El campo email está en blanco";
        }
        if ($("#celular").val().trim().length == 0) {
            mensaje = "El campo celular está en blanco";
        }
        if (mensaje != "") {
            $("#error").html(mensaje);
            $("#error").show();
            event.preventDefault();
        }
    });
    $("#enviar").click(function() {
        $("#error").animate({
            height: 'toggle'
        });
    });
});