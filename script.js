<< << << < HEAD
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









            }); ===
            ===
            =
            indow.onload = iniciar;

            function iniciar() {
                document.getElementById("enviar").addEventListener('click', validar, false);
            }

            function validaNombre() {
                var elemento = document.getElementById("nombre");
                if (!elemento.checkValidity()) {
                    if (elemento.validity.valueMissing) {
                        error2(elemento, "Debe introducir un nombre")
                    }
                    if (elemento.validity.patternMismatch) {
                        error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
                    }
                    //error(elemento);
                    return false;
                }
                return true;
            }

            function validaEdad() {
                var elemento = document.getElementById("edad");
                if (!elemento.checkValidity()) {
                    if (elemento.validity.valueMissing) {
                        error2(elemento, "Debe introducir una edad")
                    }
                    if (elemento.validity.rangeOverflow) {
                        error2(elemento, "La edad debe ser menor a 100")
                    }
                    if (elemento.validity.rangeUnderflow) {
                        error2(elemento, "Debe ser mayor de 15 años para enviar un formulario");
                    }
                    //error(elemento);
                    return false;
                }
                return true;
            }



            function validaCelular() {
                var elemento = document.getElementById("celular");
                if (!elemento.checkValidity()) {
                    if (elemento.validity.valueMissing) {
                        error2(elemento, "Debe introducir un celular")
                    }
                    if (elemento.validity.patternMismatch) {
                        error2(elemento, "El celular debe tener 9 numeros");
                    } //error(elemento);
                    return false;
                }
                return true;
            }




            function validar(e) {
                borrarError();
                if (validaNombre() && validaEdad() && validaCelular() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
                    return true
                } else {
                    e.preventDefault();
                    return false;
                }
            }

            function error(elemento) {
                document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
                elemento.className = "error";
                elemento.focus();
            }

            function error2(elemento, mensaje) {
                document.getElementById("mensajeError").innerHTML = mensaje;
                elemento.className = "error";
                elemento.focus();
            } >>>
            >>>
            > origin / main

            function borrarError() {
                var formulario = document.forms[0];
                for (var i = 0; i < formulario.elements.length; i++) {
                    formulario.elements[i].className = "";
                }
            }