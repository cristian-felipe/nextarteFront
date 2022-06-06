function inicio(){
        $.ajax({
            url: "http://localhost:8080/api/nextarte/user/all",
            type: 'GET'
        });
}

function iniciarSesion(){
    let nombre =$("#usurio").val()
    let contraseña = $("#contraseña").val()
    console.log(datosPeticion);
    console.log(contraseña);
        $.ajax({
            url: "http://localhost:8080/api/user/new",
            data: datosPeticion,
            type: 'POST',
            contentType: "application/JSON",
            dataType: 'json',
            success: function (respuesta) {
                console.log(respuesta);
                validacion(respuesta)	
            },
            error: function (xhr, status) {		
                console.log("error en la solicitud");	
            },
        });
        alert("Las contraseñas no coinciden")
}
function validacion(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " "+ nombre)

}