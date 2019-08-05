function localStorg(input) {
    var elemento = document.getElementById("LocalStorage");
    if (input.srcElement.files && input.srcElement.files[0]) {
        var reader = new FileReader();
        reader.onloadend = function() {
            elemento.src = reader.result;
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("localimage", elemento.src);
            } else {
                console.log("Tu navegador no soporta LocalStorage");
            }
        }
        reader.readAsDataURL(input.srcElement.files[0]);
    }
}

function sessionStorg(input) {
    var elemento = document.getElementById("SessionStorage");
    if (input.srcElement.files && input.srcElement.files[0]) {
        var reader = new FileReader();
        reader.onloadend = function() {
            elemento.src = reader.result;
            if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem("sessionimage", elemento.src);
            } else {
                console.log("Tu navegador no soporta SessionStorage");
            }
        }
        reader.readAsDataURL(input.srcElement.files[0]);
    }
}

document.addEventListener("change", function(e) {
    console.log();
    switch (e.srcElement.id) {
        case "LocalStorageFile":
            console.log("ejecutada");
            localStorg(e);
            break;
        case "SessionStorageFile":
            console.log("ejecutada");
            sessionStorg(e);
            break;
    }
});

window.addEventListener("load", function(e) {
    if (localStorage.getItem("localimage") != null) {
        var imagen = document.getElementById("LocalStorage");
        imagen.src = localStorage.getItem("localimage");
    } else {
        console.log("Imagen no cargada localmente");
    }

    if (sessionStorage.getItem("sessionimage") != null) {
        var imagen = document.getElementById("SessionStorage");
        imagen.src = sessionStorage.getItem("sessionimage");
    } else {
        console.log("Imagen no cargada en sesion");
    }
});