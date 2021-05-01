$(document).ready(function() {

    //ocultar el error para que solo se muestre cuando hay error
    $("#error").hide();
    $("#errorname").hide();
    $("#errorcorreo").hide();
    $("#errorcel").hide();
    //validar el formulario al enviar los datos
    $("#formulario").submit(function() {
        var mensaje = "";

        if ($("#correo").val().trim().length == 0) {
            mensaje = "El campo email está en blanco!";
        } else
        if ($("#correo").val().trim().length == 0) {
            mensaje = "El campo email está en blanco!";
        } else
        if ($("#correo").val().trim().length < 10) {
            mensaje = ('El correo debe tener más de 10 carácteres');
        }
        if (mensaje != "") {
            $("#errorcorreo").html(mensaje);
            $("#errorcorreo").show();
            event.preventDefault();
        };


        if ($("#celular").val().trim().length < 8) {
            mensaje = "El campo celular debe tener 9 dígitos!";
        } else
        if ($("#celular").val().trim().length == 0) {
            mensaje = "El campo celular está en blanco!";
        }
        if (mensaje != "") {
            $("#errorcel").html(mensaje);
            $("#errorcel").show();
            event.preventDefault();
        }



        if ($("#nombre").val().trim().length == 0) {
            mensaje = "El campo nombre está en blanco!";
        }
        if (mensaje != "") {
            $("#errorname").html(mensaje);
            $("#errorname").show();
            event.preventDefault();
        }









    });

});