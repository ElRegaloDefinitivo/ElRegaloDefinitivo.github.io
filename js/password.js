function checkPassword(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    if (password === "528") {
        var d = new Date();
        var dayOfWeek = d.getDay();
        switch (dayOfWeek) {
            case 0:
                window.location.href = "semana/domingo/index.html";
                break;
            case 1:
                window.location.href = "semana/lunes/index.html";
                break;
            case 2:
                window.location.href = "semana/martes/index.html";
                break;
            case 3:
                window.location.href = "semana/miercoles/index.html";
                break;
            case 4:
                window.location.href = "semana/jueves/jueves.html";
                break;
            case 5:
                window.location.href = "semana/viernes/index.html";
                break;
            case 6:
                window.location.href = "semana/sabado/index.html";
                break;
        }
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}
