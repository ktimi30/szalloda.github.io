window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("btn").addEventListener("click", foglalas, false);
}

function foglalas() {
    console.log("haho");
    ures($("nev"));
    ures($("email"));
    ures($("szam"));
    ures($("erkezes"));
    ures($("tavozas"));
    ures($("felnottek"));
    ures($("gyerekek"));
    ures($("szoba"));
    if ($("szam") >= 10) {
        window.alert("Hibás telefonszámot adott meg!");
    }
    if ($("felnottek").value < 0) {
        window.alert("A felnőttek száma hibás!");
    }
    if ($("gyerekek").value < 0) {
        window.alert("A felnőttek száma hibás!");
    }
    if ($("szoba") > 8 || $("szoba" < 8)) {
        window.alert("Hibás kódot adott meg!");
    }
    $("foglalas").innerHTML = "Kedves " + $("nev").value + "! A szobafoglalás sikeresen megtörtént!";
}

function ures(ertek) {
    if (ertek.value.length == 0) {
        window.alert("A mezők kitöltése kötelező!");
        $("form").reset();
        $("btn").removeEventListener();
    }
}
