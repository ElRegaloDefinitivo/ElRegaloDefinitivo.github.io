function checkPassword(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    if (password === "528") {
        var d = new Date();
        var dayOfWeek = d.getDay();
        switch (dayOfWeek) {
            case 0:
                window.location.href = "semana/domingo/domingo.html";
                break;
            case 1:
                window.location.href = "semana/lunes/lunes.html";
                break;
            case 2:
                window.location.href = "semana/martes/martes.html";
                break;
            case 3:
                window.location.href = "semana/miercoles/miercoles.html";
                break;
            case 4:
                window.location.href = "semana/jueves/jueves.html";
                break;
            case 5:
                window.location.href = "semana/viernes/viernes.html";
                break;
            case 6:
                window.location.href = "semana/sabado/sabado.html";
                break;
        }
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}
